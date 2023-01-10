import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import BlinkText from "../blinkText/blinkText"

import "@/styles/globals.css"
import "@/styles/shining.css"

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
					gridGap: "65px",
					flexDirection: "column",
				}}
			>
				{/* <BlinkText title={title} interval={1000} /> */}
				<div style={{ display: "flex", gap: "65px", flexDirection: "row" }}>
					<div
						style={{
							height: "500px",
							background: "rgba(246, 248, 255, 0.8)",
							flexGrow: 1,
							borderRadius: "10px",
							overflow: "hidden",
						}}
					>
						<img src={"/images/entrance.png"} alt="entrance" style={{}} />
					</div>
					<div
						style={{
							width: "300px",
							height: "500px",
							background: "rgba(246, 248, 255, 0.8)",
							flexGrow: 0,
							borderRadius: "10px",
							overflow: "hidden",
						}}
					>
						<img src={"/images/decission.png"} alt="decission" style={{}} />
					</div>
					<div
						style={{
							height: "500px",
							background: "rgba(246, 248, 255, 0.8)",
							flexGrow: 1,
							borderRadius: "10px",
							overflow: "hidden",
						}}
					>
						<img src={"/images/club.png"} alt="club" style={{}} />
					</div>
				</div>
			</div>

			<div
				style={{
					width: "100%",
					height: "300px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "rgba(0, 0, 0, 0.2)",
					borderTop: "10px solid rgba(255,255,255,0.6)",
					borderBottom: "10px solid rgba(255,255,255,0.6)",
					marginTop: "50px",
					marginBottom: "50px",
				}}
			>
				<img src={"/images/line.svg"} alt="line" style={{ opacity: 0.8, marginLeft: "50px", marginBottom: "60px" }} />
				<div
					style={{
						position: "absolute",
						marginRight: "900px",
						marginBottom: "550px",
					}}
				>
					<img src={"/images/bus.png"} alt="bus" style={{ position: "absolute" }} />
				</div>
			</div>

			<div
				style={{
					height: "100px",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					background: "rgba(246, 248, 255, 0.8)",
				}}
			>
				<div
					className="shine"
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
						overflow: "hidden",
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
