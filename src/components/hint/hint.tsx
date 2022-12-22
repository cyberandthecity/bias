import { WrongColor } from "@/utils/theme"
import { transform } from "framer-motion"
import { keyframes } from "leva/dist/declarations/src/styles"
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react"
import Chat, { ChatOrientation } from "../chat/chat"
import { Message, MessageType } from "../message/message"
import "@/styles/bounce.css"

interface HintProps {
	messages: Message[]
	isInEvaluatingMode?: boolean
}

const HINT: FunctionComponent<HintProps> = ({ messages, isInEvaluatingMode = false }) => {
	const [showHint, setShowHint] = useState(false)

	const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null)
	const imgRef: MutableRefObject<HTMLImageElement | null> = useRef(null)

	useEffect(() => {
		if (isInEvaluatingMode) {
			setShowHint(false)
		}
	}, [isInEvaluatingMode])

	useEffect(() => {
		if (videoRef && videoRef.current) {
			setTimeout(() => {
				videoRef.current?.play()
			}, 8000)
		}
	}, [videoRef])

	useEffect(() => {
		if (showHint && imgRef && imgRef.current) {
			imgRef.current.style.animationPlayState = "paused"
		} else if (!showHint && imgRef && imgRef.current) {
			imgRef.current.style.animationPlayState = "running"
		}
	}, [showHint])

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
									bottom: "2620px",
									right: "950px",
								}}
							>
								<Chat messages={messages} orientation={ChatOrientation.Right} />
							</div>
						)}
						<div
							ref={imgRef}
							className="bouncing-svg"
							style={{
								width: "160px",
								height: "160px",
								borderRadius: "100px",

								overflow: "hidden",
								display: "flex",
								justifyContent: "center",
								filter: showHint ? "drop-shadow(0px 0px 20px #FFA78A)" : "none",
							}}
							onClick={() => setShowHint(!showHint)}
						>
							<img src="/images/lightbulb.svg" />

							{/*<video
								ref={videoRef}
								loop
								muted
								playsInline
								src="/videos/idee.mp4"
							/>*/}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default HINT
