import AI from "@/components/ai/ai"
import Background from "@/components/background/background"
import Fullscreen from "@/components/fullscreen/fullscreen"
import Restart from "@/components/restart/restart"
import ClubScene from "@/components/scenes/clubScene"
import Simulation from "@/components/simulation/simulation"
import Title from "@/components/title/title"
import { useGame } from "@/stores/gameStore"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"

interface ExplanationProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Explanation: FunctionComponent<ExplanationProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
	const messages = useGame((state) => state.explanationInfo.aiMessages)

	let navigate = useNavigate()

	const progessToNextScreen = () => {
		navigate("/game")
	}

	return (
		<>
			<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
				<Restart />
				<Fullscreen propagateFullscreenToggle={toggleFullscreen} />
				<Title title="Club Simulation" />
				<AI messages={messages} position={{ x: 900, y: 800 }} chatOffset={{ x: 300, y: 140 }} wearsGlasses />
				<div
					style={{
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						width: "100%",
						height: "100%",
						justifyContent: "center",
					}}
				>
					<Simulation title="Simuliere" nextLevel={() => progessToNextScreen()} />
				</div>
				{/* <ClubScene /> */}
			</Background>
		</>
	)
}

export default Explanation
