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
			<Arc percentage={20} />
			<div
				// circle background bar
				style={{
					position: "absolute",
					height: "1800px",
					width: "80%",
					left: "9%",
					top: "85%",

					opacity: "0.2",
					border: "20px solid #4C5985",
					borderRadius: "5000px",
					// color: InterfaceColor
				}}
			></div>
			<div
				// Fortschritt Text
				style={{
					position: "absolute",
					width: "500px",
					height: "250px",
					left: "45%",
					top: "90%",
				}}
			>
				<p style={{ fontSize: "42px", fontWeight: 600, color: InterfaceColor, opacity: 1 }}>{"Fortschritt"}</p>
			</div>
			<div
				// bar for relative positioning of dot
				style={{
					position: "absolute",
					height: "1800px",
					width: "80%",
					left: "9%",
					top: "85%",
					//border: "20px solid #4C5985",
					borderRadius: "5000px",
					//shapeOutside: ellipse(40% 50% at left),
				}}
			>
				<div
					// progress dot
					style={{
						boxSizing: "border-box",
						position: "relative",
						width: "43px",
						height: "43px",
						left: "23%",
						top: "7%",
						background: InterfaceColor,
						border: "5px solid #FFFFFF",
						borderRadius: "2000px",
					}}
				>
					{" "}
					<div style={{ fontSize: "42px", fontWeight: 500, color: InterfaceColor, opacity: 1 }}>
						{" "}
						{Math.round(percentage * 100)}%
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProgressBar
