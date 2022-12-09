import { WrongColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Chat from "../chat/chat"
import { Message, MessageType } from "../message/message"

interface AIProps {
	messages: Message[]
	position: { x: number; y: number }
	chatOffset?: { x: number; y: number }
	scale?: number
}

const AI: FunctionComponent<AIProps> = ({ messages, position, chatOffset = { x: 0, y: 0 }, scale = 1.0 }) => {
	return (
		<div
			style={{
				position: "absolute",
				top: position.x + "px",
				left: position.y + "px",
				display: "flex",
				flexDirection: "row",
			}}
		>
			<div
				style={{
					width: "250px",
					height: "250px",
					borderRadius: "1000px",
					overflow: "hidden",
					display: "flex",
					justifyContent: "center",
					filter: "drop-shadow(0px 0px 50px rgba(246, 223, 232, 1))",
				}}
			>
				<video autoPlay loop muted playsInline src="/videos/ai.mp4" style={{ transform: "scale(" + scale + ")" }} />
			</div>

			<div
				style={{
					position: "absolute",
					background: WrongColor,
					bottom: chatOffset.y + "px",
					left: chatOffset.x + "px",
					height: "1000px",
				}}
			>
				<Chat messages={messages} />
			</div>
		</div>
	)
}

export default AI
