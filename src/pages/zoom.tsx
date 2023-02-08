import React from "react"
import ImageAdder2 from "@/components/imageadder2/imageadder2"
import Background from "@/components/background/background"
import Title from "@/components/title/title"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"

interface ZoomProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Zoom: FunctionComponent<ZoomProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
	const level = useGame((state) => state.levels[state.currentLevel])

	return (
		<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
			<Restart />
			{/* <Fullscreen propagateFullscreenToggle={toggleFullscreen} /> */}
			<Title title="Bias & KI" />

			<ImageAdder2/>
		</Background>
	)
}

export default Zoom
