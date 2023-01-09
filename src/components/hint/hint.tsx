import { InterfaceColor, WrongColor } from "@/utils/theme"
import { transform } from "framer-motion"
import { keyframes } from "leva/dist/declarations/src/styles"
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react"
import Chat, { ChatOrientation } from "../chat/chat"
import { Message, MessageType } from "../message/message"
import "@/styles/bounce.css"
import SelectionButton from "../selectionButton/selectionButton"

interface HintProps {
	messages: Message[]
	isInEvaluatingMode?: boolean
}

const Hint: FunctionComponent<HintProps> = ({ messages, isInEvaluatingMode = false }) => {
	const [showHint, setShowHint] = useState(false)

	const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null)
	const imgRef: MutableRefObject<HTMLImageElement | null> = useRef(null)

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

						{/* <div
							ref={imgRef}
							className="bouncing-svg"
							style={{
								width: "160px",
								height: "160px",
								borderRadius: "100px",

								overflow: "hidden",
								display: "flex",
								justifyContent: "center",
							}}
							onClick={() => setShowHint(!showHint)}
						>
							<img src="/images/lightbulb.svg" />

							
						</div> */}
					</div>
				</>
			)}
		</>
	)
}

export default Hint
