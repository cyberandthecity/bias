import AI from "@/components/ai/ai"
import HINT from "@/components/hint/hint"
import Background from "@/components/background/background"
import ProgressBar from "@/components/progressBar/progressBar"
import DatasetSelector from "@/components/datasetSelector/datasetSelector"
import { Message, MessageType } from "@/components/message/message"
import Title from "@/components/title/title"
import { AIPrompt, evaluationText } from "@/data/aiPrompt"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import ImageWithBubble from "@/components/complaints/complaints"
import Complaints from "@/components/complaints/complaints"
import { ComplaintType } from "@/components/complaint/complaint"
import Eval from "@/components/eval/eval"

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
	
	const evaluationText = useGame((state) => state.evaluationInfo.aiMessages)
	const [aiMessages, aiSetMessages] = useState<Message[]>(evaluationText)
	


	useEffect(() => {
		aiSetMessages(evaluationText)
		
	}, [level])

	

	return (
		<>
			<Background offset={800} isInAI scale={scale} rotate={rotate} translate={translate}>
				<Restart />
				<Fullscreen propagateFullscreenToggle={toggleFullscreen} />
				<Title title="Daten & KI" isInAI /> 
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
                    <Eval toggleFullscreen={function (isFullscreen: boolean): void {
                        throw new Error("Function not implemented.")
                    } } />

					
					

					
				</div>
                
			</Background>
		</>
	)
}

export default Game
