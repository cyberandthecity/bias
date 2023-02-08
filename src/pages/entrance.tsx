import AI from "@/components/ai/ai"
import Door from "@/components/door/door"
import { useGame } from "@/stores/gameStore"
import { InterfaceColor, AIDarkGradient, AILightGradient } from "@/utils/theme"

import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import "@/styles/shining.css"
import "@/styles/imageMoveEntrance.css"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import ImageCycler from "@/components/imageCyler/imageCycler"
import { BackgroundColorType } from "@/components/chat/chat"

interface EntranceProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }

	toggleFullscreen: (isFullscreen: boolean) => void
}

const Entrance: FunctionComponent<EntranceProps> = ({
	toggleFullscreen,
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
}) => {
	const messages = useGame((state) => state.entranceInfo.aiMessages)

	let navigate = useNavigate()

	const progessToNextScreen = () => {
		navigate("/introduction")
	}
	return (
		<>
			<div
				style={{
					position: "absolute",
					width: "2160px",
					height: "3840px",
					transform:
						"scale(" + scale + ") rotate(" + rotate + "deg) translate(" + translate.x + "px, " + translate.y + "px)",
					transformOrigin: "left top",
					overflow: "hidden",
				}}
			>
				{/* <Restart /> */}
				{/* <Fullscreen propagateFullscreenToggle={toggleFullscreen} /> */}
				<AI
					messages={messages}
					position={{ x: 880, y: 1340 }}
					scale={0.8}
					chatOffset={{ x: 490, y: 290 }}
					backgroundColorType={BackgroundColorType.Dark}
					wearsGlasses
					glassesBounce
				/>

				<div
					style={{
						position: "absolute",
						top: "1230px",
						left: "760px",
						width: "650px",
						height: "750px",
						background: AIDarkGradient,
					}}
				/>

				<div
					style={{
						position: "absolute",
						top: "1678px",
						left: "775px",
						width: "610px",
						height: "285px",
						//background: AILightGradient,
						borderRadius: "50px",
						boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.5)",
						zIndex: 0,
					}}
					className="blinkRed"
				/>
				<ImageCycler position={{ x: 795, y: 1695 }} />

				<div
					className="shine"
					style={{
						position: "absolute",
						background: InterfaceColor,

						top: "2140px",
						left: "730px",
						height: "120px",
						width: "620px",
						padding: "18px 30px 18px 30px",
						borderRadius: "20px",

						fontSize: "52px",
						fontWeight: 500,
						color: "white",
						boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.8)",
						cursor: "pointer",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						zIndex: 1,
						overflow: "hidden",
					}}
					onClick={() => progessToNextScreen()}
				>
					Ja, ich möchte helfen!
				</div>

				<div
					style={{
						position: "absolute",
						background: "none",

						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						cursor: "pointer",

						zIndex: 1,
					}}
					onClick={() => progessToNextScreen()}
				/>

				<Door />

				<div
					style={{
						top: "200px",
						left: "100px",
						position: "absolute",
						width: "2000px",
						height: "1600px",

						overflow: "hidden",
						display: "flex",
						justifyContent: "center",

						background: "rgba(0, 0, 0, 1.0)",
						zIndex: -2,
					}}
				>
					<div
						style={{
							width: "100%",
							height: "100%",
							background: "rgba(0, 0, 0, 0.65)",
							boxShadow: "inset 0px 0px 250px rgba(255, 255, 255, 0.8)",
							position: "absolute",
							zIndex: 1,
						}}
					/>
					<video autoPlay loop muted playsInline src="/videos/party.mp4" style={{ filter: "blur(20px)" }} />
				</div>
			</div>
		</>
	)
}

export default Entrance
