import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "@/styles/progressBar.css"
import { Interface } from "readline"
import { produceWithPatches } from "immer"
import Arc from "../arc/arc"

export interface ProgressProps {
	percentage: number
}

const ProgressBar: FunctionComponent<ProgressProps> = ({ percentage }) => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<svg
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						position: "absolute",
						height: "1800px",
						width: "80%",
						top: "85%",
						stroke: InterfaceColor,
						fill: "none",
						strokeWidth: "3px",
						strokeDasharray: 450,
						strokeDashoffset: 300, // 293 -450
						transform: "rotate(-180deg)",

						opacity: 0.2,
					}}
				>
					<circle cx="50" cy="50" r="50" strokeLinecap="round" />
				</svg>

				<svg
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						position: "absolute",
						height: "1800px",
						width: "80%",

						top: "85%",
						stroke: "white",
						fill: "none",
						strokeWidth: "1px",
						strokeDasharray: 450,
						strokeDashoffset: 431 - (431 - 312) * percentage, // 431 - 312
						transform: "rotate(-180deg)",
						transition: "stroke-dashoffset 0.3s ease-in-out",
					}}
				>
					<circle cx="50" cy="50" r="50" strokeLinecap="round" />
				</svg>
				<div
					// Fortschritt Text
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						top: "90%",
					}}
				>
					<p style={{ fontSize: "82px", fontWeight: 600, color: InterfaceColor, opacity: 0.5 }}>
						{Math.round(percentage * 100)}%
					</p>
					<p style={{ fontSize: "34px", fontWeight: 600, color: InterfaceColor, opacity: 1 }}>{"Fortschritt"}</p>
				</div>
			</div>
		</div>
	)
}

export default ProgressBar
