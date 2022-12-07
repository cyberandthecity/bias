import React, { FunctionComponent } from "react"
import { AIDarkGradient, AILightGradient, InterfaceColor } from "@/utils/theme"
import "@/styles/animation.css"

interface BackgroundProps {
	offset: number
	children?: React.ReactNode
	isInAI?: boolean
}

const Background: FunctionComponent<BackgroundProps> = ({ offset, children, isInAI = false }) => {
	return (
		<div
			style={{
				position: "absolute",
				width: "2160px",
				height: "3840px",
				background: isInAI ? AILightGradient : AIDarkGradient,
				overflow: "hidden",
				zIndex: 0,
			}}
		>
			{isInAI && (
				<img
					className="animated-background"
					style={{ position: "absolute", top: `-${offset}px`, transform: "scale(-1, -1)", zIndex: -1 }}
					src="/images/circuits.png"
					alt="background"
				/>
			)}

			{isInAI && (
				<img
					className="animated-background"
					style={{ position: "absolute", bottom: `-${offset}px`, zIndex: -1 }}
					src="/images/circuits.png"
					alt="background"
				/>
			)}
			{children}
		</div>
	)
}

export default Background
