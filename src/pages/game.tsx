import AI from "@/components/ai/ai"
import Background from "@/components/background/background"
import DatasetSelector from "@/components/datasetSelector/datasetSelector"
import { Message } from "@/components/message/message"
import Title from "@/components/title/title"
import { AIPrompt } from "@/data/aiPrompt"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"

interface GameProps {}

const Game: FunctionComponent<GameProps> = ({}) => {
	const level = useGame((state) => state.levels[state.currentLevel])
	const datasets = useGame((state) => state.actions.datasetsForLevel(level))
	const progressLevel = useGame((state) => state.actions.progressLevel)

	const [isChecking, setIsChecking] = useState(false)
	const [messages, setMessages] = useState<Message[]>(level.aiPrompt.prompt)

	useEffect(() => {
		setIsChecking(false)
		setMessages(level.aiPrompt.prompt)
	}, [level])

	return (
		<Background offset={800}>
			<Title title="Bias & KI" />
			<div
				style={{
					position: "absolute",
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100%",
					justifyContent: "center",
				}}
			>
				<AI messages={messages} />
				<DatasetSelector
					title={level.title}
					datasets={datasets}
					confirmDataset={(index) => {
						setIsChecking(true)
						if (index == level.correctDataset) {
							setMessages(level.aiPrompt.correctAnswer)
						} else {
							setMessages(level.aiPrompt.wrongAnswers)
						}
					}}
					nextLevel={() => {
						progressLevel()
					}}
					isChecking={isChecking}
					correctDataset={level.correctDataset}
				/>
			</div>
		</Background>
	)
}

export default Game
