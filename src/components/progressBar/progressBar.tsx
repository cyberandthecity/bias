import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "@/styles/progressBar.css"
import { Interface } from "readline"
import { produceWithPatches } from "immer"
import Arc from "../arc/arc"

export interface ProgressProps {
	percentage: number
	level: number
}

const steps = [
	{ x: 420, y: 235 },
	{ x: 650, y: 420 },
	{ x: 922, y: 518 },
]

const ProgressBar: FunctionComponent<ProgressProps> = ({ percentage, level }) => {
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
						strokeWidth: "2.2px",
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
					<p style={{ fontSize: "54px", fontWeight: 600, color: InterfaceColor, opacity: 0.5 }}>{level + 1} / 3</p>
					<p style={{ fontSize: "44px", fontWeight: 600, color: InterfaceColor, opacity: 1 }}>{"Level"}</p>
				</div>

				{steps.map((step, index) => (
					<div
						key={index + "left"}
						style={{
							width: "20px",
							height: "20px",
							position: "absolute",
							borderRadius: "50%",
							left: step.x,
							bottom: step.y,
							backgroundColor: "white",
							opacity: 0.4,
							zIndex: 100,
						}}
					></div>
				))}

				{steps.map((step, index) => (
					<div
						key={index + "right"}
						style={{
							width: "20px",
							height: "20px",
							position: "absolute",
							borderRadius: "50%",
							right: step.x,
							bottom: step.y,
							backgroundColor: "white",
							opacity: 0.4,
							zIndex: 100,
						}}
					></div>
				))}
			</div>
		</div>
	)
}

export default ProgressBar
