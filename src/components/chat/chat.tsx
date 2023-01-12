import { FunctionComponent, useEffect, useState } from "react"
import ChatMessage, { Message } from "../message/message"

import "@/styles/message.css"

export enum ChatOrientation {
	Left,
	Right,
}
export enum BackgroundColorType {
	Bright,
	Dark,
}

interface ChatProps {
	messages: Message[]
	orientation?: ChatOrientation
	backgroundColorType?: BackgroundColorType
}

const Chat: FunctionComponent<ChatProps> = ({
	messages,
	orientation = ChatOrientation.Left,
	backgroundColorType = BackgroundColorType.Bright,
}) => {
	const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
	const [messageTimeouts, setMessageTimeout] = useState<NodeJS.Timeout[]>([])
	const [messagesDidChange, setMessagesDidChange] = useState<boolean>(false)

	useEffect(() => {
		setMessagesDidChange(true)
	}, [messages])

	useEffect(() => {
		if (messagesDidChange) {
			// Clear timeouts
			messageTimeouts.forEach((timeout) => {
				clearTimeout(timeout)
			})

			let commultativeDelay = 0
			let timeouts: NodeJS.Timeout[] = []
			for (var i = 0; i < messages.length; i++) {
				const message = messages[i]
				commultativeDelay += message.delay
				const messagesSlice = messages.slice(0, i + 1)
				const timeout = setTimeout(() => {
					setDisplayedMessages(messagesSlice)
				}, commultativeDelay)
				timeouts.push(timeout)
			}

			setMessageTimeout(timeouts)
			setMessagesDidChange(false)
		}
	}, [messages, messagesDidChange, messageTimeouts])

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					position: "absolute",
					alignItems: orientation === ChatOrientation.Left ? "flex-start" : "flex-end",
					bottom: 0,
					width: "700px",
					gap: "30px",
					gridGap: "30px",
				}}
			>
				{Object.values(displayedMessages).map(({ id, author, text, delay, type }) => {
					return (
						<ChatMessage
							key={id}
							id={id}
							author={author}
							text={text}
							type={type}
							backgroundColorType={backgroundColorType}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Chat
