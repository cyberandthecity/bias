import AI from "@/components/ai/ai"
import HINT from "@/components/hint/hint"
import Background from "@/components/background/background"
import ProgressBar from "@/components/progressBar/progressBar"
import DatasetSelector from "@/components/datasetSelector/datasetSelector"
import { Message, MessageType } from "@/components/message/message"
import Title from "@/components/title/title"
import { AIPrompt } from "@/data/aiPrompt"
import { HintPrompt } from "@/data/hintPrompt"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import ImageWithBubble from "@/components/complaints/complaints"
import Complaints from "@/components/complaints/complaints"
import { ComplaintType } from "@/components/complaint/complaint"

interface GameProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Game: FunctionComponent<GameProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
	const currentLevel = useGame((state) => state.currentLevel)
	const level = useGame((state) => state.levels[state.currentLevel])
	const datasets = useGame((state) => state.actions.datasetsForLevel(level))
	const progressLevel = useGame((state) => state.actions.progressLevel)

	let navigate = useNavigate()
	const [isInEvaluatingMode, setisInEvaluatingMode] = useState(false)
	const [aiMessages, aiSetMessages] = useState<Message[]>(level.aiPrompt.prompt)
	const [hintMessages, setHintMessages] = useState<Message[]>(level.hintPrompt.hint)
	const [complaints, setComplaints] = useState<ComplaintType[]>(level.complaints)
	//const [complaints, setComplaints] = useState<[ComplaintType[]]>(level.complaints)
	const [progressPercentage, setProgressPercentage] = useState(0)

	useEffect(() => {
		setisInEvaluatingMode(false)
		aiSetMessages(level.aiPrompt.prompt)
		setHintMessages(level.hintPrompt.hint)
		setComplaints(level.complaints)
	}, [level])

	useEffect(() => {
		if (isInEvaluatingMode) {
			setProgressPercentage(((currentLevel + 1) * 2 + 1) / 7)
		} else {
			setProgressPercentage(((currentLevel + 1) * 2) / 7)
		}
	}, [level, isInEvaluatingMode])

	return (
		<>
			<Background offset={800} isInAI scale={scale} rotate={rotate} translate={translate}>
				<Restart />
				<Fullscreen propagateFullscreenToggle={toggleFullscreen} />
				<Title title="Bias & KI" isInAI />
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
					<AI messages={aiMessages} position={{ x: 100, y: 800 }} chatOffset={{ x: 300, y: 140 }} />
					<Complaints complaints={complaints}></Complaints>
					<ProgressBar
						percentage={progressPercentage} //TODO: Change into useful percentage measure
					/>

					<DatasetSelector
						title={level.title}
						datasets={datasets}
						hintMessages={hintMessages}
						confirmDataset={(index) => {
							setisInEvaluatingMode(true)

							let response =
								index == 0
									? level.aiPrompt.responseSelectedDataset_0
									: index == 1
									? level.aiPrompt.responseSelectedDataset_1
									: level.aiPrompt.responseSelectedDataset_2

							aiSetMessages(response)
						}}
						nextLevel={() => {
							if (currentLevel == 2 && isInEvaluatingMode) {
								navigate("/zoom")
							} else {
								progressLevel()
							}
						}}
						isInEvaluatingMode={isInEvaluatingMode}
						correctDataset={level.correctDataset}
						didCompleteGame={currentLevel == 2 && isInEvaluatingMode}
					/>
	
					
				</div>
			</Background>
		</>
	)
}

export default Game

/*  <Complaints {(index) => {
									let complaints =
										index == 0
											? level.complaints[0]
											: level.complaints[1]
								setComplaints(complaints)
								}}
					/>
					*/
