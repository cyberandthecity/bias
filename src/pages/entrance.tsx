import AI from "@/components/ai/ai"
import Door from "@/components/door/door"
import { useGame } from "@/stores/gameStore"
import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import "@/styles/animation.css"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"

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
		navigate("/explanation")
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
				}}
			>
				<Restart />
				<Fullscreen propagateFullscreenToggle={toggleFullscreen} />
				<AI
					messages={messages}
					position={{ x: 880, y: 1330 }}
					scale={1.0}
					chatOffset={{ x: 440, y: 80 }}
					wearsGlasses
				/>

				<div
					className="shine"
					style={{
						position: "absolute",
						background: InterfaceColor,
						top: "1750px",
						left: "1080px",
						height: "225px",
						width: "225px",
						padding: "18px 30px 8px 30px",
						borderRadius: "20px",
						fontSize: "40px",
						fontWeight: 500,
						color: "white",
						boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
						cursor: "pointer",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1,
					}}
					onClick={() => progessToNextScreen()}
				>
					Helfen
				</div>

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
							background: "rgba(0, 0, 0, 0.5)",
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
