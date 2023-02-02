import React from "react"
import Background from "@/components/background/background"
import Title from "@/components/title/title"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import SelectionButton from "@/components/selectionButton/selectionButton"
import { InterfaceColor } from "@/utils/theme"
import { useNavigate } from "react-router-dom"
import ExplanationText from "@/components/explanation/explanationText" 
import AI from "@/components/ai/ai"
import { Message, MessageType } from "@/components/message/message"


interface ExplanationProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Explanation: FunctionComponent<ExplanationProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
    let navigate = useNavigate()
    const resetlevel = useGame((state) => state.actions.resetLevel)
	const level = useGame((state) => state.levels[state.currentLevel])

	const additionalText = useGame((state) => state.additionalInfo.aiMessages)
	const [aiMessages, aiSetMessages] = useState<Message[]>(additionalText)

	useEffect(() => {
		aiSetMessages(additionalText)
	}, [level])


	return (
		<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
        	<Fullscreen propagateFullscreenToggle={toggleFullscreen} />    
			<Title title="Mehr zu Bias und KI" />
			<AI messages={aiMessages} position={{ x: 1810, y: 615 }} chatOffset={{ x: -750, y: 140 }} />
			<ExplanationText />

            <div
				style={{
                    position: "absolute",
                    bottom: "1000px",
					height: "150px",
					width: "2000px",
                    left: "80px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",

					//background: BackgroundColor,
				}}
			>
				<SelectionButton
					onClick={() => {
						resetlevel()
						navigate("/")
					}}
					shine={true}
					background="white"
					color={InterfaceColor}
				>
					Neustart
				</SelectionButton>
			</div>
		</Background>
	)
}

export default Explanation