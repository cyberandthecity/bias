import { Session } from "@/pages/analytics"
import { FunctionComponent, useEffect, useState } from "react"

interface SessionProps extends Session {}

export const SessionComponent: FunctionComponent<SessionProps> = ({ sessionId, timestamp, domain, interactions }) => {
	const date = new Date(timestamp)

	// Make the format to DD:MM:YY HH:MM:SS but fill with 0 such that it is always 19 characters long
	const formatedDate = date.toISOString().substr(0, 19).replace("T", " ")

	const totalPlaytime =
		new Date(interactions[interactions.length - 1].timestamp).getTime() - new Date(interactions[0].timestamp).getTime()

	// Make the format to MM:SS but fill with 0 such that it is always 5 characters long
	const totalPlaytimeFormated = new Date(totalPlaytime).toISOString().substr(14, 5)

	// Find the first interaction of type "game_0" but "game_0" is only a substring of the actual type
	const game_0 = interactions.find((interaction) => interaction.type.includes("game_0"))
	const game_1 = interactions.find((interaction) => interaction.type.includes("game_1"))
	const game_2 = interactions.find((interaction) => interaction.type.includes("game_2"))

	const completedGame = game_0 && game_1 && game_2

	// Game Results
	let gameResults = [false, false, false]
	if (game_0) {
		gameResults[0] = game_0.type.split("_")[2] == "2"
	}
	if (game_1) {
		gameResults[1] = game_1.type.split("_")[2] == "0"
	}
	if (game_2) {
		gameResults[2] = game_2.type.split("_")[2] == "0"
	}

	let lastInteraction = interactions[interactions.length - 1]
	let reset = false
	if (lastInteraction.type == "reset") {
		reset = true
		lastInteraction = interactions[interactions.length - 2]
	}

	return (
		<tr>
			<td>{sessionId}</td>
			<td>{formatedDate}</td>
			<td>{domain}</td>
			<td>{totalPlaytimeFormated}min</td>
			<td style={{ background: completedGame ? "green" : "red", color: "white" }}>{completedGame ? "Yes" : "No"}</td>
			<td>
				{" "}
				{gameResults[0] ? "O" : "X"} {gameResults[1] ? "O" : "X"} {gameResults[2] ? "O" : "X"}{" "}
			</td>
			<td>{lastInteraction.type}</td>
			<td>{reset ? "Yes" : "No"}</td>
		</tr>
	)
}

export default SessionComponent
