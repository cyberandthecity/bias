import React from "react"
import AI from "@/components/ai/ai"
import ImageAdder2 from "@/components/imageadder2/imageadder2"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import SelectionButton from "@/components/selectionButton/selectionButton"
import { InterfaceColor, HighlightColor, BackgroundColor } from "@/utils/theme"
import { useNavigate } from "react-router-dom"
import "@/styles/fadeInButton.css"
import "@/styles/shining.css"
import ImageMatrix from "../imageMatrix/imageMatrix"
import EvalFeedback from "../evalFeedback/evalFeedback"

interface EmojiDotProps {
	emoji: string
	orientation: "left" | "right"
}

const EmojiDot: FunctionComponent<EmojiDotProps> = ({ emoji, orientation }) => {
	return (
		<div
			style={{
				width: "600px",
				height: "100%",
				zIndex: 1,
				display: "flex",
				justifyContent: orientation,
				alignItems: "center",
				flexDirection: "row",
				maxHeight: "400px",
			}}
		>
			<img
				src={"/emojis/" + emoji + ".png"}
				style={{
					width: "100px",
					background: "white",
					borderRadius: "200px",
					boxShadow: "0px 0px 10px rgba(0,0,0,0.16)",
					padding: "20px",
				}}
			/>
		</div>
	)
}
export default EmojiDot
