import AI from "@/components/ai/ai"
import Door from "@/components/door/door"
import { useGame } from "@/stores/gameStore"
import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"

interface EntranceProps {
	scale?: number
}

const Entrance: FunctionComponent<EntranceProps> = ({ scale = 1.0 }) => {
	const messages = useGame((state) => state.entranceInfo.aiMessages)

	let navigate = useNavigate()

	const progessToNextScreen = () => {
		navigate("/explanation")
	}
	return (
		<div
			style={{
				position: "absolute",
				width: "100%",
				height: "100%",
				transform: "scale(" + scale + ")",
				transformOrigin: "left top",
			}}
		>
			<AI messages={messages} position={{ x: 900, y: 100 }} />
			<div
				style={{
					position: "absolute",
					background: InterfaceColor,
					top: "1760px",
					left: "1100px",
					height: "200px",
					width: "200px",
					padding: "18px 30px 8px 30px",
					borderRadius: "10px",
					alignContent: "center",
					alignItems: "center",
					fontSize: "32px",
					fontWeight: 500,
					color: "white",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
					cursor: "pointer",
					zIndex: 1,
				}}
				onClick={() => progessToNextScreen()}
			>
				Helfen
			</div>
			<Door />
		</div>
	)
}

export default Entrance
