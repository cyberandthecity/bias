import { FunctionComponent, useEffect, useRef, useState } from "react"
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
	onLastMessage?: (id: string) => void
}

const Chat: FunctionComponent<ChatProps> = ({
	messages,
	onLastMessage,
	orientation = ChatOrientation.Left,
	backgroundColorType = BackgroundColorType.Bright,
}) => {
	const [displayedMessages, setDisplayedMessages] = useState<Message[]>([messages[0]])
	const [messagesIndex, setMessagesIndex] = useState<number>(0)

	const messagesRef = useRef<Message[]>(messages)

	const addNewMessage = (id: string) => {
		if (messagesIndex + 1 < messages.length && messagesRef.current[messagesIndex].id === id) {
			setMessagesIndex(messagesIndex + 1)
			setDisplayedMessages([...displayedMessages, messages[messagesIndex + 1]])
		}
	}
	useEffect(() => {
		messagesRef.current = messages
		setDisplayedMessages([messages[0]])
		setMessagesIndex(0)
	}, [messages])

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
				{Object.values(displayedMessages).map(({ id, author, text, delay, type, emoji }) => {
					return (
						<ChatMessage
							key={id}
							id={id}
							author={author}
							text={text}
							type={type}
							delay={delay}
							emoji={emoji}
							backgroundColorType={backgroundColorType}
							textAnimationFinished={(id) => {
								addNewMessage(id)
								if (messages.length <= messagesIndex + 1 && onLastMessage) {
									onLastMessage(id)
								}
							}}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Chat
