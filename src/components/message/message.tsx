import "@/styles/message.css"
import { hexToRGB } from "@/utils/hexToRGB"
import { HighlightColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { TypeAnimation } from "react-type-animation"
import { BackgroundColorType, ChatOrientation } from "../chat/chat"

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
}

interface MessageProps {
	id: string
	author: string
	text: string
	orientation?: ChatOrientation
	type?: MessageType
	backgroundColorType: BackgroundColorType
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

const ChatMessage: FunctionComponent<MessageProps> = ({
	id,
	author,
	text,
	backgroundColorType,
	type = MessageType.Normal,
}) => {
	const color = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "white"
			case MessageType.Warning:
				return "#FFA78A"
			case MessageType.Instruction:
				return "white" //InterfaceColor
			case MessageType.Hint:
				return "white"
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
				return "0 0 0px black"
			case MessageType.Complaint:
				return "0 0 0px black"
		}
	}

	const backgroundColor = (messageType: MessageType): string => {
		// Must be in hex format
		switch (messageType) {
			case MessageType.Normal:
				if (backgroundColorType === BackgroundColorType.Dark) return "#FFFFFF"
				else return InterfaceColor
			case MessageType.Warning:
				return "#F6F8FF"
			case MessageType.Instruction:
				return HighlightColor
			case MessageType.Hint:
				return HighlightColor //"#FFA78A"
			case MessageType.Typing:
				return InterfaceColor
			case MessageType.Lesson:
				return HighlightColor
			case MessageType.Complaint:
				return InterfaceColor
		}
	}

	const alpha = (messageType: MessageType): number => {
		switch (messageType) {
			case MessageType.Normal:
				return backgroundColorType == BackgroundColorType.Dark ? 0.3 : 0.5
			case MessageType.Warning:
				return 1
			case MessageType.Instruction:
				return backgroundColorType == BackgroundColorType.Dark ? 0.3 : 0.5
			case MessageType.Hint:
				return 0.6
			case MessageType.Typing:
				return 0.25
			case MessageType.Lesson:
				return backgroundColorType == BackgroundColorType.Dark ? 0.5 : 0.75
			case MessageType.Complaint:
				return 0.5
		}
	}

	const fontSize = (messageType: MessageType) => {
		switch (messageType) {
			case MessageType.Normal:
				return "34px"
			case MessageType.Warning:
				return "34px"
			case MessageType.Instruction:
				return "34px"
			case MessageType.Hint:
				return "32px"
			case MessageType.Typing:
				return "50px"
			case MessageType.Lesson:
				return "34px"
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
				background: hexToRGB(backgroundColor(type), alpha(type)),
				color: color(type),
				textShadow: textShadow(type),
				boxShadow:
					backgroundColorType == BackgroundColorType.Dark
						? "0px 0px 10px rgba(255, 255, 255, 0.14)"
						: "0px 0px 10px rgba(0, 0, 0, 0.14)",

				padding: "20px 30px 20px 30px",
				width: "fit-content",
				fontSize: fontSize(type),
				fontWeight: font(type),

				borderTopLeftRadius: "40px 38px",
				borderTopRightRadius: "40px 38px",
				borderBottomLeftRadius: "40px 38px",
				borderBottomRightRadius: "40px 38px",

				// Blur
				backdropFilter: "blur(200px)",
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
			<TypeAnimation sequence={[text]} speed={60} wrapper="p" cursor={false} />
		</div>
	)
}

export default ChatMessage
