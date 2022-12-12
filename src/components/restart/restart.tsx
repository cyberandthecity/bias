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
					background: "white",
					width: "80px",
					height: "80px",
					right: 110,

					zIndex: 1000,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "20px",
					borderRadius: "10px",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
					cursor: "pointer",
				}}
				onClick={() => navigate("/")}
			>
				<img src="/images/restart.svg" style={{ width: "50%", height: "50%" }} />
			</div>
		</>
	)
}

export default Restart
