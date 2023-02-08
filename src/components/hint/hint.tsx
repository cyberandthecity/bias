import "@/styles/bounce.css"
import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useState } from "react"
import Chat, { BackgroundColorType, ChatOrientation } from "../chat/chat"
import { Message, MessageType } from "../message/message"

interface HintProps {
	hintPrompt: string
	isInEvaluatingMode?: boolean
	messageDelay?: number
}

const Hint: FunctionComponent<HintProps> = ({ hintPrompt, isInEvaluatingMode = false, messageDelay = 40000 }) => {
	const [showHint, setShowHint] = useState(false)
	const [showedHint, setShowedHint] = useState(false)
	const [showHintMessage, setShowHintMessage] = useState(false)

	useEffect(() => {
		if (isInEvaluatingMode) {
			setShowHint(false)
		}
	}, [isInEvaluatingMode])

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowHintMessage(true)
		}, messageDelay)
		return () => clearTimeout(timeout)
	}, [messageDelay])

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
								{/* <Chat messages={messages} orientation={ChatOrientation.Right} /> */}
							</div>
						)}
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "20px",
								alignItems: "center",
								height: "100px",
							}}
						>
							{!showHint && showHintMessage && !showedHint && (
								<Chat
									messages={[
										{
											id: "hintPropmt",
											author: "",
											text: "Brauchst du Hilfe? Klicke hier ->",
											delay: 0,
											decay: 0,
											type: MessageType.Normal,
										},
									]}
									orientation={ChatOrientation.Right}
									backgroundColorType={BackgroundColorType.Bright}
									isAbsolute={false}
								/>
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
										width: "content-fit",
										maxWidth: "1300px",
										boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
										cursor: "pointer",
										overflow: "hidden",

										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "row",
									}}
									onClick={() => {
										setShowHint(!showHint)
										setShowedHint(true)
									}}
								>
									<img src="/images/lightbulb.svg" style={{ width: "64px", height: "64px" }} />
									{showHint && (
										<p
											style={{
												fontSize: "34px",
												fontWeight: "500",
												color: "white",

												padding: "0px 10px 00px 40px",
											}}
										>
											{hintPrompt}
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Hint
