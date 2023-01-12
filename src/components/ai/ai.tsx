import { WrongColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Chat, { BackgroundColorType } from "../chat/chat"
import { Message, MessageType } from "../message/message"
import AICanvas from "./aiCanvas"

interface AIProps {
	messages: Message[]
	position: { x: number; y: number }
	chatOffset?: { x: number; y: number }
	scale?: number
	wearsGlasses?: boolean
	backgroundColorType?: BackgroundColorType
}

const AI: FunctionComponent<AIProps> = ({
	messages,
	position,
	chatOffset = { x: 0, y: 0 },
	scale = 1.0,
	wearsGlasses = false,
	backgroundColorType = BackgroundColorType.Bright,
}) => {
	return (
		<div
			style={{
				position: "absolute",
				top: position.y + "px",
				left: position.x + "px",
				display: "flex",
				flexDirection: "row",
				zIndex: 1,
			}}
		>
			<div
				style={{
					transform: "scale(" + scale + ")",
					WebkitTransform: "scale(" + scale + ")",
				}}
			>
				<div
					style={{
						width: "250px",
						height: "250px",
						borderRadius: "1000px",
						display: "flex",
						justifyContent: "center",
						overflow: "hidden",
						boxShadow: " 0px 0px 50px rgba(246, 223, 232, 1)",
					}}
				>
					<video autoPlay loop muted playsInline src="/videos/ai.mp4" style={{ transform: "scale(1.65)" }} />
					{/* <AICanvas /> */}
				</div>

				{wearsGlasses && (
					<img
						src={"/images/glasses.svg"}
						alt="glasses"
						style={{ position: "absolute", transform: "scale(1.1)", top: "60px", left: "26px", opacity: 0.8 }}
					/>
				)}
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
				<Chat messages={messages} backgroundColorType={backgroundColorType} />
			</div>
		</div>
	)
}

export default AI
