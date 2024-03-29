import "@/styles/message.css"
import { hexToRGB } from "@/utils/hexToRGB"
import { HighlightColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useState, memo } from "react"
import { TypeAnimation } from "react-type-animation"
import { BackgroundColorType, ChatOrientation } from "../chat/chat"
import "@/styles/stamp.css"

export enum MessageType {
	Normal,
	Warning,
	Instruction,
	Typing,
	Lesson,
	Complaint,
	Explanation,
}

export interface Message {
	id: string
	author: string
	text: string
	delay: number
	decay: number
	type: MessageType
	emoji?: string
}

interface MessageProps {
	id: string
	author: string
	text: string
	delay: number
	orientation?: ChatOrientation
	type?: MessageType
	emoji?: string
	backgroundColorType: BackgroundColorType
	textAnimationFinished?: (id: string) => void
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

const ChatMessage: FunctionComponent<MessageProps> = memo(
	({ id, author, text, delay, emoji, backgroundColorType, textAnimationFinished, type = MessageType.Normal }) => {
		const [textAnimationDone, setTextAnimationDone] = useState(false)
		const [textAnimationDoneWithDelay, setTextAnimationDoneWithDelay] = useState(false)
		const [callbackTimeout, setCallbackTimeout] = useState<NodeJS.Timeout | null>(null)

		useEffect(() => {
			return () => {
				if (callbackTimeout) {
					clearTimeout(callbackTimeout)
				}
			}
		}, [callbackTimeout])

		const width = (messageType: MessageType) => {
			switch (messageType){
				case MessageType.Explanation:
					return "900px"
				default:
					return "fit-content"
			}
		}

		const color = (messageType: MessageType) => {
			switch (messageType) {
				case MessageType.Explanation:
					return "white"
				case MessageType.Normal:
					return "white"
				case MessageType.Warning:
					return "#FFA78A"
				case MessageType.Instruction:
					return "white" //InterfaceColor

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
				case MessageType.Explanation:
					return "0 0 0px black"
				case MessageType.Normal:
					return "0 0 0px black"
				case MessageType.Warning:
					return "0 0 0px black"
				case MessageType.Instruction:
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
				case MessageType.Explanation:
					if (backgroundColorType === BackgroundColorType.Dark) return "#FFFFFF"
					else return InterfaceColor
				case MessageType.Normal:
					if (backgroundColorType === BackgroundColorType.Dark) return "#FFFFFF"
					else return InterfaceColor
				case MessageType.Warning:
					return "#F6F8FF"
				case MessageType.Instruction:
					return HighlightColor

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
				case MessageType.Explanation:
					return backgroundColorType == BackgroundColorType.Dark ? 0.3 : 0.6
				case MessageType.Normal:
					return backgroundColorType == BackgroundColorType.Dark ? 0.3 : 0.6
				case MessageType.Warning:
					return 1
				case MessageType.Instruction:
					return backgroundColorType == BackgroundColorType.Dark ? 0.3 : 0.75
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
				case MessageType.Explanation:
					return "40px"
				case MessageType.Normal:
					return "40px"
				case MessageType.Warning:
					return "34px"
				case MessageType.Instruction:
					return "40px"

				case MessageType.Typing:
					return "50px"
				case MessageType.Lesson:
					return "40px"
				case MessageType.Complaint:
					return "40px"
			}
		}

		const font = (messageType: MessageType) => {
			switch (messageType) {
				case MessageType.Explanation:
					return "500"
				case MessageType.Normal:
					return "500"
				case MessageType.Warning:
					return "500"
				case MessageType.Instruction:
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
				case MessageType.Explanation:
					return "relative"
				case MessageType.Normal:
					return "relative"
				case MessageType.Warning:
					return "relative"
				case MessageType.Instruction:
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
					width: width(type),
					fontSize: fontSize(type),
					fontWeight: font(type),

					borderTopLeftRadius: "40px 38px",
					borderTopRightRadius: "40px 38px",
					borderBottomLeftRadius: "40px 38px",
					borderBottomRightRadius: "40px 38px",

					// Blur
					backdropFilter: "blur(200px)",

					marginBottom: emoji ? "40px" : "0px",
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

				{(type == MessageType.Normal ||
					type == MessageType.Warning ||
					type == MessageType.Instruction ||
					type == MessageType.Lesson ||
					type == MessageType.Explanation) &&
				!textAnimationDoneWithDelay ? (
					<TypeAnimation
						sequence={[
							text,
							() => {
								setTextAnimationDone(true)

								const timeout = setTimeout(() => {
									setTextAnimationDoneWithDelay(true)
									if (textAnimationFinished) textAnimationFinished(id)
								}, delay)
								setCallbackTimeout(timeout)
							},
						]}
						speed={50}
						wrapper="p"
						cursor={true}
					/>
				) : (
					<p>{text}</p>
				)}
				{emoji && textAnimationDone && (
					<div
						className="stamp"
						style={{
							bottom: "-50px",
							right: "-40px",
							position: "absolute",
							width: "80px",
							height: "80px",
							background: "white",
							borderRadius: "50%",

							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
						}}
					>
						<img src={"/emojis/" + emoji + ".png"} style={{ width: "50px" }} />
					</div>
				)}
			</div>
		)
	}
)

export default ChatMessage
