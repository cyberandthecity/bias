import { BackgroundColor, CorrectColor, InterfaceColor, WrongColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useRef, useState } from "react"
import ImageTile from "../imageTile/imageTile"

interface EvalFeedbackProps {
	title: string
	text: string
	orientation: "left" | "right"
}

const EvalFeedback: FunctionComponent<EvalFeedbackProps> = ({ title, text, orientation }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				paddingTop: "20px",
				justifyContent: orientation,
				alignItems: orientation == "left" ? "flex-start" : "flex-end",
				gap: "20px",
				maxWidth: "600px",
			}}
		>
			<p style={{ fontSize: "40px", fontWeight: "bold", color: InterfaceColor }}> {title} </p>
			<p
				style={{
					color: InterfaceColor,
					fontSize: "35px",
					display: "block",
					textAlign: "justify",
				}}
			>
				{" "}
				{text}{" "}
			</p>
		</div>
	)
}

export default EvalFeedback
