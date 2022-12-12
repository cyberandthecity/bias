import "@/styles/message.css"
import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { ChatOrientation } from "../chat/chat"

export enum MessageType {
	Normal,
	Warning,
	Instruction,
	Hint,
}

export interface Message {
	id: string
	author: string
	text: string
	delay: number
	decay: number
	type: MessageType
}

interface MessageProps {
	id: string
	author: string
	text: string
	orientation?: ChatOrientation
	type?: MessageType
}

const transition = {
	type: "spring",
	stiffness: 120,
	mass: 1,
	damping: 20,
}

const variants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	enter: {
		opacity: 1,
		y: 0,
		transition,
	},
}

const ChatMessage: FunctionComponent<MessageProps> = ({ id, author, text, type = MessageType.Normal }) => {
	const color = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "white"
			case MessageType.Warning:
				return "#FFA78A"
			case MessageType.Instruction:
				return InterfaceColor
			case MessageType.Hint:
				return InterfaceColor
		}
	}

	const backgroundColor = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return InterfaceColor
			case MessageType.Warning:
				return "#F6F8FF"
			case MessageType.Instruction:
				return "#F6F8FF"
			case MessageType.Hint:
				return "#FFA78A"
		}
	}

	return (
		<div
			style={{
				position: "relative",
				background: backgroundColor(type),
				color: color(type),
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.14)",

				padding: "20px 30px 20px 30px",
				width: "fit-content",
				fontSize: "32px",
				fontWeight: 500,
				borderTopLeftRadius: "40px 38px",
				borderTopRightRadius: "40px 38px",
				borderBottomLeftRadius: "40px 38px",
				borderBottomRightRadius: "40px 38px",
				//backdropFilter: "blur(20px)",
			}}
		>
			<pre
				style={{
					color: "white",
					opacity: 0.5,
				}}
			>
				{author}
			</pre>
			{text}
		</div>
	)
}

export default ChatMessage
