import "@/styles/bounce.css"
import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useState } from "react"
import Chat, { ChatOrientation } from "../chat/chat"
import { Message } from "../message/message"

interface HintProps {
	messages: Message[]
	isInEvaluatingMode?: boolean
}

const Hint: FunctionComponent<HintProps> = ({ messages, isInEvaluatingMode = false }) => {
	const [showHint, setShowHint] = useState(false)

	useEffect(() => {
		if (isInEvaluatingMode) {
			setShowHint(false)
		}
	}, [isInEvaluatingMode])

	return (
		<>
			{!isInEvaluatingMode && (
				<>
					<div>
						{showHint && (
							<div
								style={{
									position: "absolute",
									height: "1000px",
									bottom: "2520px",
									right: "900px",
								}}
							>
								<Chat messages={messages} orientation={ChatOrientation.Right} />
							</div>
						)}
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<div
								className={!showHint ? "shine" : ""}
								style={{
									background: InterfaceColor,
									padding: "10px 20px 10px 20px",
									borderRadius: "10px",
									width: "fit-content",
									boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
									cursor: "pointer",
									overflow: "hidden",
								}}
								onClick={() => {
									setShowHint(!showHint)
								}}
							>
								<img src="/images/lightbulb.svg" style={{ width: "64px", height: "64px" }} />
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Hint
