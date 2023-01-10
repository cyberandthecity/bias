import React, { FunctionComponent, useState } from 'react';
import Chat from '../chat/chat';
import { Message } from '../message/message';
import "@/styles/bounceComplaint.css"


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
}


const Complaint: FunctionComponent<ComplaintProps> = ({
	messages,
    imageUrl,
	position,
    chatOffset = { x: 0, y: 0},
	scale = 1.0,
	tear = false,
}) => {  
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
    <div
        className= "slideRightToPosition"//"bouncing-complaint"
        style={{
            width: "300px",
            height: "300px",
            borderRadius: "1000px",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            filter: "drop-shadow(0px 0px 50px rgba(246, 223, 232, 1))",
        }}
    >
        <img src= {imageUrl}/>
            

    </div>
    {tear && (
        <img
            className = "slideRightToPosition"//className="bouncing-complaint"
            src={"/datasets/complaints/tear.png"} 
            alt="tear"
            style={{ width: "60px",
            height: "60px",
            position: "relative", top: "90px", left: "-110px", opacity: 0.8 }}
        />
    )}

    

    <div
        className="slideRightToPosition"
        style={{
            position: "absolute",
            bottom: chatOffset.y + "px",
            left: chatOffset.x + "px",
            height: "1000px",
        }}
    >
        <Chat messages={messages} />
    </div>
</div>
    
  )
}

export default Complaint;



    {/* <div className="image-with-bubble"
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
    </div> */ }
