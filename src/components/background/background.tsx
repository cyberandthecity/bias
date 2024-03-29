import React, { FunctionComponent } from "react"
import { AIDarkGradient, AILightGradient, InterfaceColor } from "@/utils/theme"
import "@/styles/animation.css"

interface BackgroundProps {
	offset: number
	children?: React.ReactNode
	isInAI?: boolean
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
}

const Background: FunctionComponent<BackgroundProps> = ({
	offset,
	children,
	isInAI = false,
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
}) => {
	return (
		<div
			style={{
				position: "absolute",
				width: "2160px",
				height: "3840px",
				background: isInAI ? AILightGradient : AIDarkGradient,
				overflow: "hidden",
				zIndex: 0,
				transform:
					"scale(" + scale + ") rotate(" + rotate + "deg) translate(" + translate.x + "px, " + translate.y + "px)",
				transformOrigin: "left top",
				WebkitTransform:
					"scale(" + scale + ") rotate(" + rotate + "deg) translate(" + translate.x + "px, " + translate.y + "px)",
				WebkitTransformOrigin: "left top",
			}}
		>
			{isInAI && (
				<img
					className="animated-background"
					style={{ position: "absolute", top: `-${offset}px`, transform: "scale(-1, -1)", zIndex: -1, opacity: 0.3 }}
					src="/images/circuits.png"
					alt="background"
				/>
			)}

			{isInAI && (
				<img
					className="animated-background"
					style={{ position: "absolute", bottom: `-${offset}px`, zIndex: -1, opacity: 0.3 }}
					src="/images/circuits.png"
					alt="background"
				/>
			)}

			{!isInAI && (
				<img
					className="animated-background-dark"
					style={{ position: "absolute", zIndex: -1, opacity: 0.3, top: "-100px" }}
					src="/images/grid.png"
					alt="background"
				/>
			)}
			{children}
		</div>
	)
}

export default Background
