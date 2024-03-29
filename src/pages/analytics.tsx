import SessionComponent from "@/components/session/session"
import { FunctionComponent, useEffect, useState } from "react"
import Chart from "react-apexcharts"

interface AnalyticsProps {}

interface Interaction {
	type: string
	timestamp: Date
}

export interface Session {
	sessionId: string
	timestamp: Date
	domain: string
	interactions: Interaction[]
}

const Analytics: FunctionComponent<AnalyticsProps> = ({}) => {
	const [sessions, setSessions] = useState<Session[]>([])

	const sessionCountAll = sessions.length
	let sessionCountToday = 0

	let sessionCountCompletedAll = 0
	let sessionCountCompletedToday = 0

	let playtimeAll = 0
	let playtimeToday = 0

	let playtimeCompletedAll = 0
	let playtimeCompletedToday = 0

	let level0CorrectAll = 0
	let level0CorrectToday = 0
	let level0CompletedAll = 0
	let level0CompletedToday = 0

	let level1CorrectAll = 0
	let level1CorrectToday = 0
	let level1CompletedAll = 0
	let level1CompletedToday = 0

	let level2CorrectAll = 0
	let level2CorrectToday = 0
	let level2CompletedAll = 0
	let level2CompletedToday = 0

	const sessionsCountPerDay: Record<string, number> = {}
	const sessionsCountCompletedPerDay: Record<string, number> = {}

	sessions.forEach((session) => {
		const date = new Date(session.interactions[0].timestamp)
		const day = date.toISOString().substr(0, 10)
		const isToday = day === new Date().toISOString().substr(0, 10)
		if (sessionsCountPerDay[day]) {
			sessionsCountPerDay[day] += 1
		} else {
			if (Object.keys(sessionsCountPerDay).length > 0) {
				const lastDay = new Date(Object.keys(sessionsCountPerDay).pop() || "").getTime()

				// fill in missing days (but it is reversed)
				for (let i = lastDay - 24 * 60 * 60 * 1000; i > date.getTime(); i -= 24 * 60 * 60 * 1000) {
					const day = new Date(i).toISOString().substr(0, 10)
					sessionsCountPerDay[day] = 0
				}
			}

			sessionsCountPerDay[day] = 1
		}

		const interactions = session.interactions
		const playtimeSession =
			new Date(interactions[interactions.length - 1].timestamp).getTime() -
			new Date(interactions[0].timestamp).getTime()
		playtimeAll += playtimeSession

		const game_0 = interactions.find((interaction) => interaction.type.includes("game_0"))
		const game_1 = interactions.find((interaction) => interaction.type.includes("game_1"))
		const game_2 = interactions.find((interaction) => interaction.type.includes("game_2"))

		const completedGame = game_0 != undefined && game_1 != undefined && game_2 != undefined

		if (completedGame) {
			playtimeCompletedAll += playtimeSession
			if (sessionsCountCompletedPerDay[day]) {
				sessionsCountCompletedPerDay[day] += 1
			} else {
				sessionsCountCompletedPerDay[day] = 1
			}
			sessionCountCompletedAll += 1

			if (isToday) {
				sessionCountCompletedToday += 1
				playtimeCompletedToday += playtimeSession
			}
		}

		if (game_0 != undefined) {
			const answer = game_0.type.split("_")[2]
			const correct = answer == "2"
			if (correct) {
				level0CorrectAll += 1
				if (isToday) {
					level0CorrectToday += 1
				}
			}
			level0CompletedAll += 1
			if (isToday) {
				level0CompletedToday += 1
			}
		}

		if (game_1 != undefined) {
			const answer = game_1.type.split("_")[2]
			const correct = answer == "0"
			if (correct) {
				level1CorrectAll += 1
				if (isToday) {
					level1CorrectToday += 1
				}
			}
			level1CompletedAll += 1
			if (isToday) {
				level1CompletedToday += 1
			}
		}

		if (game_2 != undefined) {
			const answer = game_2.type.split("_")[2]
			const correct = answer == "0"
			if (correct) {
				level2CorrectAll += 1
				if (isToday) {
					level2CorrectToday += 1
				}
			}
			level2CompletedAll += 1
			if (isToday) {
				level2CompletedToday += 1
			}
		}

		if (isToday) {
			sessionCountToday += 1
			playtimeToday += playtimeSession
		}
	})

	const series = [
		{
			name: "Sessions Count",
			data: Object.entries(sessionsCountPerDay).map(([day, sessionCount]) => {
				return {
					x: new Date(day).getTime(),
					y: sessionCount,
				}
			}),
		},
	]

	const options: ApexCharts.ApexOptions = {
		chart: {
			type: "area" as const, // to force type assertion in TypeScript
			height: 350,
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "straight",
		},
		title: {
			text: "",
			align: "left",
		},
		subtitle: {
			text: "",
			align: "left",
		},
		xaxis: {
			type: "datetime",
		},
		yaxis: {
			opposite: true,
		},
		legend: {
			horizontalAlign: "left",
		},
	}

	useEffect(() => {
		try {
			fetch(process.env.ANALYTICS_URL + "/session/all", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((data) => {
					data = data.filter((session: Session) => {
						// Filter data to exclude session where interactions only contain entrance
						const containsMoreThanEntrance = session.interactions.length > 1
						if (!containsMoreThanEntrance) {
							return false
						}
						const containsOnlyEntranceAndReset =
							session.interactions[1].type == "reset" && session.interactions[0].type == "entrance"

						if (containsOnlyEntranceAndReset) {
							return false
						}

						// Filter data to exclude session where the timestamp is before the 15.06.23
						const date_14_06_23 = new Date("2023-06-15").getTime()
						const isAfter14_06_23 = new Date(session.interactions[0].timestamp).getTime() > date_14_06_23
						return isAfter14_06_23
					})

					// Sort data by timestamp from newes to oldest
					data = data.sort((a: Session, b: Session) => {
						return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
					})

					setSessions(data)
				})
		} catch (e) {
			console.log("Could not send analytics request")
		}
	}, [])

	return (
		<div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<h1>Analytics</h1>

				<div style={{ display: "flex", flexDirection: "row" }}>
					<table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
						<thead style={{ textAlign: "left" }}>
							<tr>
								<th>General </th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>#Sessions: </td>
								<td>{sessionCountAll}</td>
							</tr>
							<tr>
								<td>#Sessions (completed): </td>
								<td>{sessionCountCompletedAll}</td>
							</tr>
							<tr>
								<td> Ø Playtime: </td>
								<td>
									{sessionCountAll == 0 ? 0 : new Date(playtimeAll / sessionCountAll).toISOString().substr(14, 5)}min
								</td>
							</tr>
							<tr>
								<td> Ø Playtime (completed): </td>

								<td>
									{sessionCountCompletedAll == 0
										? 0
										: new Date(playtimeCompletedAll / sessionCountCompletedAll).toISOString().substr(14, 5)}
									min
								</td>
							</tr>
							<tr>
								<td> Ø Accuracy Level 1: </td>
								<td> {Math.round((level0CorrectAll / level0CompletedAll) * 100)}%</td>
							</tr>
							<tr>
								<td> Ø Accuracy Level 2: </td>
								<td> {Math.round((level1CorrectAll / level1CompletedAll) * 100)}%</td>
							</tr>
							<tr>
								<td> Ø Accuracy Level 3: </td>
								<td> {Math.round((level2CorrectAll / level2CompletedAll) * 100)}%</td>
							</tr>
						</tbody>
					</table>

					<Chart options={options} series={series} type="area" height={350} width={500} />

					<table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
						<thead style={{ textAlign: "left" }}>
							<tr>
								<th>Today </th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>#Sessions: </td>
								<td>{sessionCountToday}</td>
							</tr>
							<tr>
								<td>#Sessions (completed): </td>
								<td>{sessionCountCompletedToday}</td>
							</tr>
							<tr>
								<td> Ø Playtime: </td>
								<td>
									{playtimeToday == 0 ? 0 : new Date(playtimeToday / sessionCountToday).toISOString().substr(14, 5)}min
								</td>
							</tr>
							<tr>
								<td> Ø Playtime (completed): </td>
								<td>
									{sessionCountCompletedToday == 0
										? 0
										: new Date(playtimeCompletedToday / sessionCountCompletedToday).toISOString().substr(14, 5)}
									min
								</td>
							</tr>
							<tr>
								<td> Ø Accuracy Level 1: </td>
								<td> {Math.round((level0CorrectToday / level0CompletedToday) * 100)}%</td>
							</tr>
							<tr>
								<td> Ø Accuracy Level 2: </td>
								<td> {Math.round((level1CorrectToday / level1CompletedToday) * 100)}%</td>
							</tr>
							<tr>
								<td> Ø Accuracy Level 3: </td>
								<td> {Math.round((level2CorrectToday / level2CompletedToday) * 100)}%</td>
							</tr>
						</tbody>
					</table>
				</div>

				<table style={{ marginTop: "20px", borderCollapse: "separate", borderSpacing: "0px", overflow: "scroll" }}>
					<thead style={{ textAlign: "left" }}>
						<tr>
							<th style={{ paddingRight: "10px" }}>Session ID</th>
							<th style={{ paddingRight: "10px" }}>Timestamp</th>
							<th style={{ paddingRight: "10px" }}>Domain</th>
							<th style={{ paddingRight: "10px" }}>Total Playtime (min)</th>
							<th style={{ paddingRight: "10px" }}>Completed Game</th>
							<th style={{ paddingRight: "10px" }}>Game Results</th>
							<th style={{ paddingRight: "10px" }}>Last Level</th>
							<th>Reset</th>
						</tr>
					</thead>
					<tbody>
						{sessions.map((session) => {
							// Color backgorund differently according to date of session
							const date = new Date(session.interactions[0].timestamp)
							const day = date.toISOString().substr(0, 10)

							// Get index in sessionsCountPerDay array
							// @ts-ignore
							const index = Object.keys(sessionsCountPerDay).indexOf(day)
							const isColored = (index + 1) % 2 == 0

							return (
								<SessionComponent
									key={session.sessionId}
									sessionId={session.sessionId}
									timestamp={session.interactions[0].timestamp}
									domain={session.domain}
									interactions={session.interactions}
									isColored={isColored}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Analytics
