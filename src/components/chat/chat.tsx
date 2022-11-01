import { FunctionComponent, useEffect, useState } from "react"
import ChatMessage, { Message } from "../message/message"
import { motion, AnimatePresence } from "framer-motion"
import "@/styles/message.css"

export enum ChatOrientation {
	Left,
	Right,
}

interface ChatProps {
	messages: Message[]
	orientation?: ChatOrientation
}

const Chat: FunctionComponent<ChatProps> = ({ messages, orientation = ChatOrientation.Right }) => {
	const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])

	useEffect(() => {
		let commultativeDelay = 0
		for (var i = 0; i < messages.length; i++) {
			const message = messages[i]
			commultativeDelay += message.delay
			const messagesSlice = messages.slice(0, i + 1)
			setTimeout(() => {
				setDisplayedMessages(messagesSlice)
			}, commultativeDelay)
		}
	}, [messages])

	return (
		<AnimatePresence>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					position: "absolute",
					bottom: 0,
					width: "700px",
					gap: "30px",
				}}
			>
				{Object.values(displayedMessages).map(({ id, text, delay, type }) => {
					return <ChatMessage key={id} id={id} text={text} orientation={orientation} type={type} />
				})}
			</div>
		</AnimatePresence>
	)
}

export default Chat
