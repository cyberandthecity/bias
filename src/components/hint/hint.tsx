import { WrongColor } from "@/utils/theme"
import { FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react"
import Chat, { ChatOrientation } from "../chat/chat"
import { Message, MessageType } from "../message/message"

interface HintProps {
	messages: Message[]
	isChecking?: boolean
}

const HINT: FunctionComponent<HintProps> = ({ messages, isChecking = false }) => {
	const [showHint, setShowHint] = useState(false)

	const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null)

	useEffect(() => {
		if (isChecking) {
			setShowHint(false)
		}
	}, [isChecking])

	useEffect(() => {
		if (videoRef && videoRef.current) {
			setTimeout(() => {
				videoRef.current?.play()
			}, 3000)
		}
	}, [videoRef])

	return (
		<>
			{!isChecking && (
				<>
					<div>
						{showHint && (
							<div
								style={{
									position: "absolute",
									height: "1000px",
									top: "180px",
									right: "900px",
									
								}}
							>
								<Chat messages={messages} orientation={ChatOrientation.Right} />
							</div>
						)}
						<div
							style={{
								width: "120px",
								height: "120px",
								borderRadius: "100px",

								overflow: "hidden",
								display: "flex",
								justifyContent: "center",
								filter: showHint ? "drop-shadow(0px 0px 20px #FFA78A)": "none",
							}}
							onClick={() => setShowHint(!showHint)}
						>
							<video
								ref={videoRef}
								loop
								muted
								playsInline
								src="/videos/idee.mp4"
							/>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default HINT
