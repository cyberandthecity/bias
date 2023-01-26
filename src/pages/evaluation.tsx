import AI from "@/components/ai/ai"
import Background from "@/components/background/background"
import { Message, MessageType } from "@/components/message/message"
import Title from "@/components/title/title"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import Eval from "@/components/eval/eval"

interface EvaluationProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Evaluation: FunctionComponent<EvaluationProps> = ({
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
			<Background offset={1200} isInAI scale={scale} rotate={rotate} translate={translate}>
				<Restart />
				<Fullscreen propagateFullscreenToggle={toggleFullscreen} />
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
					<AI messages={aiMessages} position={{ x: 100, y: 500 }} chatOffset={{ x: 300, y: 140 }} />
					<Eval
						toggleFullscreen={function (isFullscreen: boolean): void {
							throw new Error("Function not implemented.")
						}}
					/>
				</div>
			</Background>
		</>
	)
}

export default Evaluation
