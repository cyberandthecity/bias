import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { ChatOrientation } from "../chat/chat"
import { motion, AnimatePresence } from "framer-motion"
import "@/styles/message.css"

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

const ChatMessage: FunctionComponent<MessageProps> = ({
	id,
	author,
	text,
	orientation = ChatOrientation.Right,
	type = MessageType.Normal,
}) => {
	return (
		<motion.div key={id} initial="initial" animate="enter" variants={variants} layout>
			<div
				className={"tailBreakdown"}
				style={{
					position: "relative",
					background: type == MessageType.Normal ? "rgba(68, 81,126, 0.8)" : "rgba(255,255,255,0.4)",
					color: type == MessageType.Normal ? "white" : InterfaceColor,
					boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.14)",

					padding: "20px 30px 20px 30px",
					width: "fit-content",
					fontSize: "32px",
					fontWeight: 500,
					borderTopLeftRadius: "40px 38px",
					borderTopRightRadius: "40px 38px",
					borderBottomLeftRadius: "40px 38px",
					borderBottomRightRadius: "40px 38px",
					backdropFilter: "blur(20px)",
				}}
			>
				<pre
				style={{
					color: "Aqua"
				}}>
					{author}
				</pre>
				{text}
			</div>
		</motion.div>
	)
}

export default ChatMessage
