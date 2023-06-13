import { FunctionComponent, useEffect, useState } from "react"
import ChatMessage, { Message } from "../message/message"

import { useNavigate } from "react-router-dom"
import { useGame } from "@/stores/gameStore"

interface RestartProps {}

const Restart: FunctionComponent<RestartProps> = ({}) => {
	let navigate = useNavigate()
	const resetLevel = useGame((state) => state.actions.resetLevel)

	return (
		<>
			<div
				style={{
					position: "absolute",
					background: "white",
					width: "120px",
					height: "120px",
					left: "1000px",
					bottom: "20px",

					zIndex: 1000,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "20px",
					borderRadius: "10px",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
					cursor: "pointer",
				}}
				onClick={() => {
					const sessionId = useGame.getState().sessionId
					try {
						fetch(process.env.ANALYTICS_URL + "/session/" + sessionId, {
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								type: "reset",
								timestamp: Date.now(),
							}),
						})
					} catch (e) {
						console.log("Could not send analytics request")
					}

					resetLevel()
					navigate("/")
				}}
			>
				<img src="/images/restart.svg" style={{ width: "50%", height: "50%" }} />
			</div>
		</>
	)
}

export default Restart
