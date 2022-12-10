import { WrongColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Chat from "../chat/chat"
import { Message, MessageType } from "../message/message"

interface HintProps {
    messages: Message[]
}


const HINT: FunctionComponent<HintProps> = ({ messages }) => {
    return (
        // TODO: Fix design of hint + timing + position of message
		<div
			style={{
				position: "absolute",
				top: "1200px",
				right: "50px",
				//display: "flex",
				//flexDirection: "row",
			}}
		>
			<div
				style={{
					width: "120px",
					height: "120px",
					borderRadius: "100px",
					overflow: "hidden",
					display: "flex",
					justifyContent: "center",
					filter: "drop-shadow(0px 0px 50px rgba(246, 223, 232, 1))",
				}}
			>
                <video autoPlay loop muted playsInline src="/videos/idee.mp4" style={{}} />
			</div>
            

			<div style={{ position: "absolute", background: WrongColor, bottom: "140px", left: "300px", height: "1000px" }}>
				<Chat messages={messages} />
			</div>
		</div>
	)
}

export default HINT
