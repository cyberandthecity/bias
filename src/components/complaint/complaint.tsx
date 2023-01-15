import React, { FunctionComponent, useState } from "react"
import Chat, { BackgroundColorType } from "../chat/chat"
import { Message } from "../message/message"
import "@/styles/bounceComplaint.css"
import { useEffect } from "react"

export interface ComplaintType {
	messages: Message[]
	imageUrl: string
	isChatLeft?: boolean
}

interface ComplaintProps {
	messages: Message[]
	imageUrl: string
	position: { x: number; y: number }
	chatOffset?: { x: number; y: number }
	scale?: number
	tear?: boolean
	customAnimation?: string
	customChatAnimation?: string
	messageDelay?: number
	backgroundColorType?: BackgroundColorType
}

const Complaint: FunctionComponent<ComplaintProps> = ({
	messages,
	imageUrl,
	position,
	chatOffset = { x: 0, y: 0 },
	scale = 1.0,
	tear = false,
	customAnimation,
	messageDelay,
	backgroundColorType = BackgroundColorType.Dark,
}) => {
	const [showMessages, setShowMessages] = useState(messageDelay == undefined ? true : false)

	useEffect(() => {
		if (messageDelay != undefined) {
			const messageTimeout = setTimeout(() => {
				setShowMessages(true)
			}, messageDelay)

			return () => {
				clearTimeout(messageTimeout)
			}
		}
	}, [])

	return (
		<div
			style={{
				position: "absolute",
				top: position.y + "px",
				left: position.x + "px",
				display: "flex",
				flexDirection: "row",
				transform: "scale(" + scale + ")",
				WebkitTransform: "scale(" + scale + ")",
				zIndex: 1,
			}}
		>
			<div className={customAnimation ? customAnimation : "slideRightToPosition"} style={{}}>
				<img
					src={imageUrl}
					style={{
						width: "300px",
						height: "300px",
						borderRadius: "1000px",
						overflow: "hidden",
						display: "flex",
						justifyContent: "center",
						background: "white",
						border: "3px solid white",
						filter: "drop-shadow(0px 0px 50px rgba(246, 223, 232, 1))",
					}}
				/>
				{showMessages && (
					<div
						style={{
							position: "absolute",
							bottom: chatOffset.y + "px",
							left: chatOffset.x + "px",
							height: "1000px",
						}}
					>
						{messages.length > 0 && <Chat messages={messages} backgroundColorType={backgroundColorType} />}
					</div>
				)}
			</div>
			{tear && (
				<img
					className={customAnimation ? customAnimation : "slideRightToPosition"}
					src={"/datasets/complaints/tear.png"}
					alt="tear"
					style={{ width: "60px", height: "60px", position: "relative", top: "90px", left: "-110px", opacity: 0.8 }}
				/>
			)}
		</div>
	)
}

export default Complaint

{
	/* <div className="image-with-bubble"
        style={{ 
            left: "80%",
            top: "30%"
         }} 
    >
    
      <img src={imageUrl} />
       <div 
        className="bubble"
        style={{
            width: "200px",
            height: "200px",
            background: "url(" + imageUrl + ")" ,
            // backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "100px",
            boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            padding: "10px",
            position: "absolute",
            left: "80%",
            top: "20%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            filter: "drop-shadow(0px 0px 50px rgba(246, 223, 232, 1))",
        }}>
        {message.text}
      </div>
    </div> */
}
