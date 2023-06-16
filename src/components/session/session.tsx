import { Session } from "@/pages/analytics"
import { FunctionComponent, useEffect, useState } from "react"

interface SessionProps extends Session {
	isColored: boolean
}

export const SessionComponent: FunctionComponent<SessionProps> = ({
	sessionId,
	timestamp,
	domain,
	interactions,
	isColored,
}) => {
	const date = new Date(timestamp)

	// Make the format to DD:MM:YY HH:MM:SS but fill with 0 such that it is always 19 characters long
	const formatedDate = date.toLocaleTimeString("de-DE", {
		hour12: false,
		hour: "2-digit",
		minute: "2-digit",
		month: "2-digit",
		day: "2-digit",
		year: "2-digit",
	})

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
		<tr style={{ background: isColored ? "rgba(0, 0, 0, 0.1)" : "white" }}>
			<td style={{ paddingRight: "10px" }}>{sessionId}</td>
			<td style={{ paddingRight: "10px" }}>{formatedDate}</td>
			<td style={{ paddingRight: "10px" }}>{domain == "home" ? "🛠️" : domain == "museum" ? "🏛️" : "🌐"}</td>
			<td style={{ paddingRight: "10px" }}>{totalPlaytimeFormated}</td>
			<td style={{ background: completedGame ? "green" : "red", color: "white", paddingRight: "10px" }}>
				{completedGame ? "Yes" : "No"}
			</td>
			<td style={{ paddingRight: "10px" }}>
				{gameResults[0] ? "✅" : game_0 == undefined ? "-" : "❌"}{" "}
				{gameResults[1] ? "✅" : game_1 == undefined ? "-" : "❌"}{" "}
				{gameResults[2] ? "✅" : game_2 == undefined ? "-" : "❌"}{" "}
			</td>
			<td style={{ paddingRight: "10px" }}>{lastInteraction.type}</td>
			<td>{reset ? "🔄" : "-"}</td>
		</tr>
	)
}

export default SessionComponent
