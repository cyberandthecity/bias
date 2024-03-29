import AI from "@/components/ai/ai"
import Background from "@/components/background/background"
import { BackgroundColorType } from "@/components/chat/chat"
import Fullscreen from "@/components/fullscreen/fullscreen"
import { Message } from "@/components/message/message"
import Restart from "@/components/restart/restart"
import ClubScene from "@/components/scenes/clubScene"
import Simulation from "@/components/simulation/simulation"
import Title from "@/components/title/title"
import { useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface IntroductionProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Introduction: FunctionComponent<IntroductionProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
	const explenationMessages = useGame((state) => state.explanationInfo.aiMessages)
	const [messages, setMessages] = useState<Message[]>(explenationMessages[0])

	const [playVideo, setPlayVideo] = useState(false)
	const [aiTransition, setAITransition] = useState(false)
	const [activateButton, setActivateButton] = useState(false)
	const [videoEnded, setVideoEnded] = useState(false)

	let navigate = useNavigate()

	const progessToNextScreen = () => {
		const sessionId = useGame.getState().sessionId
		try {
			fetch(process.env.ANALYTICS_URL + "/session/" + sessionId, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					type: "introduction",
					timestamp: Date.now(),
				}),
			})
		} catch (e) {
			console.log("Could not send analytics request")
		}

		navigate("/game")
	}

	useEffect(() => {
		if (aiTransition) {
			const messagesTimeout = setTimeout(() => {
				setMessages(explenationMessages[1])
			}, 900) // TODO: tune this

			const videoTimeout = setTimeout(() => {
				setPlayVideo(true)
			}, 2000) // TODO: tune this

			return () => {
				clearTimeout(messagesTimeout)
				clearTimeout(videoTimeout)
			}
		}
	}, [explenationMessages, aiTransition, setPlayVideo])

	useEffect(() => {
		if (videoEnded) {
			const messageTimeout = setTimeout(() => {
				setMessages(explenationMessages[2])
				setActivateButton(true)
			}, 3000) // TODO: tune this

			return () => {
				clearTimeout(messageTimeout)
			}
		}
	}, [videoEnded, explenationMessages])

	return (
		<>
			<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
				<Restart />
				{/* <Fullscreen propagateFullscreenToggle={toggleFullscreen} /> */}

				<div
					className={aiTransition ? "videoTransition" : ""}
					style={{
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						justifyContent: "center",
						opacity: 0,
						zIndex: 100,
					}}
				>
					<Simulation
						title="Simuliere"
						nextLevel={() => progessToNextScreen()}
						playVideo={playVideo}
						activateButton={activateButton}
						onVideoEnd={() => {
							setVideoEnded(true)
						}}
					/>
				</div>
				<AI
					messages={messages}
					position={{ x: 960, y: 1700 }}
					chatOffset={aiTransition ? { x: 400, y: 1150 } : { x: 230, y: 250 }}
					simulationTransition={aiTransition}
					backgroundColorType={BackgroundColorType.Dark}
					onLastMessage={() => {
						if (aiTransition == false) {
							setAITransition(true)
						}
					}}
				/>
				{/* <ClubScene /> */}
			</Background>
		</>
	)
}

export default Introduction
