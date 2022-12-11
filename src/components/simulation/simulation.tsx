import { Dataset as DS } from "@/stores/gameStore"
import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import BlinkText from "../blinkText/blinkText"
import Dataset from "../dataset/dataset"
import HINT from "../hint/hint"
import { Message } from "../message/message"
import Slider from "../slider/slider"

interface SimulationProps {
	title: string
	nextLevel: () => void
}

const Simulation: FunctionComponent<SimulationProps> = ({ title, nextLevel }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				style={{
					display: "flex",

					padding: "65px 65px 25px 65px",
					gap: "65px",
					flexDirection: "column",
				}}
			>
				<BlinkText title={title} interval={1000} />
				<div style={{ display: "flex", gap: "65px", flexDirection: "row" }}>
					<div
						style={{ height: "500px", background: "rgba(246, 248, 255, 0.8)", flexGrow: 1, borderRadius: "10px" }}
					></div>
					<div
						style={{
							width: "300px",
							height: "500px",
							background: "rgba(246, 248, 255, 0.8)",
							flexGrow: 0,
							borderRadius: "10px",
						}}
					></div>
					<div
						style={{ height: "500px", background: "rgba(246, 248, 255, 0.8)", flexGrow: 1, borderRadius: "10px" }}
					></div>
				</div>
			</div>
			<div
				style={{
					height: "180px",
					paddingLeft: "65px",
					paddingRight: "65px",
					paddingTop: "25px",
					backdropFilter: "blur(20px)",
				}}
			>
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",

						marginLeft: "-65px",
						marginTop: "-25px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "rgba(0, 0, 0, 0.2)",
					}}
				>
					<div style={{ width: "100%", height: "2px", borderBottom: "8px dashed white", letterSpacing: "100px" }}></div>
					{
						// Bus
					}
				</div>
			</div>
			<div
				style={{
					height: "100px",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					paddingTop: "25px",
					background: "rgba(246, 248, 255, 0.8)",
				}}
			>
				<div
					style={{
						background: InterfaceColor,
						height: "45px",
						padding: "18px 30px 8px 30px",
						borderRadius: "10px",
						width: "fit-content",
						fontSize: "32px",
						fontWeight: 500,
						color: "white",
						boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
						cursor: "pointer",
					}}
					onClick={() => {
						nextLevel()
					}}
				>
					Weiter zum Trainieren
				</div>
			</div>
		</div>
	)
}

export default Simulation
