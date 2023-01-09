import "@/styles/message.css"
import { HighlightColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { ChatOrientation } from "../chat/chat"

export enum MessageType {
	Normal,
	Warning,
	Instruction,
	Hint,
	Typing,
	Lesson,
	Complaint,
}

export interface Message {
	id: string
	author: string
	text: string
	delay: number
	decay: number
	type: MessageType
	//typingDelay: number
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
			case MessageType.Typing:
				return InterfaceColor
			case MessageType.Lesson:
				return "white"
			case MessageType.Complaint:
				return "white"
		}
	}

	const textShadow = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "0 0 0px black"
			case MessageType.Warning:
				return "0 0 0px black"
			case MessageType.Instruction:
				return "0 0 0px black"
			case MessageType.Hint:
				return "0 0 0px black"
			case MessageType.Typing:
				return "0 0 0px black"
			case MessageType.Lesson:
				return "0 0 10px black"
			case MessageType.Complaint:
				return "0 0 10px black"
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
			case MessageType.Typing:
				return InterfaceColor
			case MessageType.Lesson:
				return HighlightColor
			case MessageType.Complaint:
				return InterfaceColor
		}
	}

	const opacity = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "1"
			case MessageType.Warning:
				return "1"
			case MessageType.Instruction:
				return "1"
			case MessageType.Hint:
				return "1"
			case MessageType.Typing:
				return "0.25"
			case MessageType.Lesson:
				return "0.5"
			case MessageType.Complaint:
				return "0.5"
		}
	}

	const fontSize = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "32px"
			case MessageType.Warning:
				return "32px"
			case MessageType.Instruction:
				return "40px"
			case MessageType.Hint:
				return "32px"
			case MessageType.Typing:
				return "50px"
			case MessageType.Lesson:
				return "32px"
			case MessageType.Complaint:
				return "30px"
		}
	}

	const font = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "500"
			case MessageType.Warning:
				return "500"
			case MessageType.Instruction:
				return "500"
			case MessageType.Hint:
				return "500"
			case MessageType.Typing:
				return "bold"
			case MessageType.Lesson:
				return "500"
			case MessageType.Complaint:
				return "500"
		}
	}

	const borderColor = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "transparent"
			case MessageType.Warning:
				return "transparent"
			case MessageType.Instruction:
				return HighlightColor
			case MessageType.Hint:
				return "transparent"
			case MessageType.Typing:
				return "transparent"
			case MessageType.Lesson:
				return "white"
			case MessageType.Complaint:
				return "white"
		}
	}
	const position = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "relative"
			case MessageType.Warning:
				return "relative"
			case MessageType.Instruction:
				return "relative"
			case MessageType.Hint:
				return "relative"
			case MessageType.Typing:
				return "absolute"
			case MessageType.Lesson:
				return "relative"
			case MessageType.Complaint:
				return "absolute"
		}
	}

	return (
		<div
			style={{
				position: position(type),
				background: backgroundColor(type),
				opacity: opacity(type),
				color: color(type),
				textShadow: textShadow(type),
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.14)",

				padding: "20px 30px 20px 30px",
				width: "fit-content",
				fontSize: fontSize(type),
				fontWeight: font(type),
				border: "solid 4px transparent",
				borderColor: borderColor(type),
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
