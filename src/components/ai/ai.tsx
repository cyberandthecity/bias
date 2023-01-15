import { WrongColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Chat, { BackgroundColorType } from "../chat/chat"
import { Message, MessageType } from "../message/message"
import AICanvas from "./aiCanvas"
import "@/styles/glassBounce.css"
import "@/styles/simulationTransition.css"

interface AIProps {
	messages: Message[]
	position: { x: number; y: number }
	chatOffset?: { x: number; y: number }
	scale?: number
	wearsGlasses?: boolean
	glassesBounce?: boolean
	backgroundColorType?: BackgroundColorType
	simulationTransition?: boolean
	onLastMessage?: (id: string) => void
}

const AI: FunctionComponent<AIProps> = ({
	messages,
	position,
	chatOffset = { x: 0, y: 0 },
	scale = 1.0,
	wearsGlasses = false,
	glassesBounce = false,
	backgroundColorType = BackgroundColorType.Bright,
	simulationTransition = false,
	onLastMessage,
}) => {
	return (
		<div
			style={{
				position: "absolute",
				top: position.y + "px",
				left: position.x + "px",
				display: "flex",
				flexDirection: "row",
				zIndex: 1,
			}}
		>
			<div
				style={{
					position: "absolute",
					background: WrongColor,
					bottom: chatOffset.y + "px",
					left: chatOffset.x + "px",
					height: "1000px",
					transition: "all 800ms ease-in-out",
				}}
			>
				{messages.length > 0 && (
					<Chat messages={messages} backgroundColorType={backgroundColorType} onLastMessage={onLastMessage} />
				)}
			</div>
			<div
				className={simulationTransition ? "simulationTransition" : ""}
				style={{
					transform: "scale(" + scale + ")",
					WebkitTransform: "scale(" + scale + ")",
				}}
			>
				<div
					style={{
						width: "250px",
						height: "250px",
						borderRadius: "1000px",
						display: "flex",
						justifyContent: "center",
						overflow: "hidden",
						boxShadow: " 0px 0px 50px rgba(246, 223, 232, 1)",
					}}
				>
					<video
						autoPlay
						loop
						muted
						playsInline
						src="/videos/ai.mp4"
						style={{
							transform: "scale(1.65)",
						}}
					/>
					{/* <AICanvas /> */}
				</div>

				{wearsGlasses && (
					<img
						className={glassesBounce ? "glassBounce" : ""}
						src={"/images/glasses.svg"}
						alt="glasses"
						style={{ position: "absolute", transform: "scale(1.1)", top: "60px", left: "26px", opacity: 0.8 }}
					/>
				)}
			</div>
		</div>
	)
}

export default AI
