import React, { FunctionComponent } from "react"
import { InterfaceColor } from "@/utils/theme"
import "@/styles/animation.css"

interface BackgroundProps {
	offset: number
	children?: React.ReactNode
}

const Background: FunctionComponent<BackgroundProps> = ({ offset, children }) => {
	return (
		<div
			style={{
				position: "absolute",
				width: "2160px",
				height: "3840px",
				background:
					"linear-gradient(97.73deg, rgba(233, 236, 244, 0.3) 0%, #DDE2F3 100%),  linear-gradient(180deg, #F4F1F4 0%, #F0E8F1 100%)",
				overflow: "hidden",
				zIndex: 0,
			}}
		>
			<img
				className="animated-background"
				style={{ position: "absolute", top: `-${offset}px`, transform: "scale(-1, -1)", zIndex: -1 }}
				src="/images/circuits.png"
				alt="background"
			/>

			<img
				className="animated-background"
				style={{ position: "absolute", bottom: `-${offset}px`, zIndex: -1 }}
				src="/images/circuits.png"
				alt="background"
			/>
			{children}
		</div>
	)
}

export default Background
