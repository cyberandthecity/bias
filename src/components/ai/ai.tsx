import { FunctionComponent, useState } from "react"
import Chat from "../chat/chat"
import { Message, MessageType } from "../message/message"

interface AIProps {}

const messages: Message[] = [
	{
		id: "1",
		text: "Hilf mir einen Datensatz auszuwählen!",
		delay: 0,
		decay: 0,
		type: MessageType.Normal,
	},
	{
		id: "2",
		text: "Der Datensatz soll am besten zwischen Professoren von Studenten unterscheiden und gleichzeitg nicht diskreminieren.",
		delay: 2000,
		decay: 0,
		type: MessageType.Normal,
	},
	{
		id: "3",
		text: "Wähle einen der unteren Datensatz aus!",
		delay: 2000,
		decay: 0,
		type: MessageType.Instruction,
	},
]

const AI: FunctionComponent<AIProps> = ({}) => {
	return (
		<div
			style={{
				position: "absolute",
				top: "900px",
				left: "100px",
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
				<video autoPlay loop muted playsInline src="/videos/ai.mp4" style={{ transform: "scale(1.65)" }} />
			</div>

			<div style={{ position: "absolute", background: "red", bottom: "140px", left: "300px", height: "1000px" }}>
				<Chat messages={messages} />
			</div>
		</div>
	)
}

export default AI
