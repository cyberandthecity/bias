import { FunctionComponent, useEffect, useState } from "react"
import ChatMessage, { Message } from "../message/message"

import { useNavigate } from "react-router-dom"

interface RestartProps {}

const Restart: FunctionComponent<RestartProps> = ({}) => {
	let navigate = useNavigate()

	return (
		<>
			<div
				style={{
					position: "absolute",
					background: "red",
					width: "40px",
					height: "40px",
					right: "40px",
					top: "10px",
					zIndex: 1000,
				}}
				onClick={() => navigate("/")}
			></div>
		</>
	)
}

export default Restart
