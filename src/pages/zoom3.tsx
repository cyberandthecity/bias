import React from "react"
import ImageGrid from "@/components/ImageGrid/ImageGrid"
import AI from "@/components/ai/ai"
import HINT from "@/components/hint/hint"
import Background from "@/components/background/background"
import { Message } from "@/components/message/message"
import Title from "@/components/title/title"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"

interface ZoomProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Zoom2: FunctionComponent<ZoomProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
	const level = useGame((state) => state.levels[state.currentLevel])
	const datasets = useGame((state) => state.actions.datasetsForLevel(level))
	const progressLevel = useGame((state) => state.actions.progressLevel)

	const [isInEvaluatingMode, setisInEvaluatingMode] = useState(false)
	const [messages, setMessages] = useState<Message[]>(level.aiPrompt.prompt)
	// Generate an array of random image URLs
	const imageUrls = Array.from(
		{ length: 10000 },
		() => `/datasets/tech_5x4/set01/image_${Math.floor(Math.random() * 7)}.png`
	)

	useEffect(() => {
		setisInEvaluatingMode(false)
		setMessages(level.aiPrompt.prompt)
	}, [level])
	return (
		<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
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
				<AI messages={messages} position={{ x: 0, y: 0 }} />
				<ImageGrid imageUrls={imageUrls} />
			</div>
		</Background>
	)
}

export default Zoom2
