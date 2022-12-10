import { Dataset as DS } from "@/stores/gameStore"
import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Dataset from "../dataset/dataset"
import HINT from "../hint/hint"
import { Message } from "../message/message"
import Slider from "../slider/slider"

interface DatasetSelectorProps {
	title: string
	datasets: DS[]
	hintMessages: Message[]
	isChecking: boolean
	correctDataset: number
	confirmDataset: (index: number) => void
	nextLevel: () => void
	done: boolean
}

const DatasetSelector: FunctionComponent<DatasetSelectorProps> = ({
	title,
	datasets,
	nextLevel,
	isChecking,
	confirmDataset,
	correctDataset,
	hintMessages,
	done,
}) => {
	const [selectedDataset, setSelectedDataset] = useState<number>(0)

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
					background: BackgroundColor,
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<p style={{ fontSize: "42px", fontWeight: 600, color: InterfaceColor }}>{title}</p>
					<HINT messages={hintMessages} isChecking={isChecking} />
				</div>

				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					{datasets.map((dataset, index) => (
						<Dataset
							index={index}
							key={"dataset_" + index}
							title={dataset.title}
							images={dataset.images}
							selected={!isChecking && selectedDataset == index}
							correct={isChecking && correctDataset == index}
							notcorrect={isChecking && selectedDataset == index && correctDataset != index}
							onClick={(index) => {
								if (!isChecking) {
									setSelectedDataset(index)
								}
							}}
						/>
					))}
				</div>
			</div>
			<div
				style={{
					height: isChecking ? "60px" : "180px",
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
					}}
				>
					<p style={{ fontSize: "32px", fontWeight: 500, color: "black", opacity: 0.3 }}>
						{!isChecking && "Wähle einen Datensatz aus"}
					</p>
				</div>
				{!isChecking && (
					<Slider
						startIndex={selectedDataset}
						onSelection={(index) => {
							setSelectedDataset(index)
						}}
						confirmDataset={() => {
							confirmDataset(selectedDataset)
						}}
					/>
				)}
			</div>
			<div
				style={{
					height: "100px",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					paddingTop: "25px",
					background: BackgroundColor,
				}}
			>
				{isChecking && (
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
							setSelectedDataset(0)
							nextLevel()
						}}
					>
						{done ? "Training Beenden" : "Nächstes Level"}
					</div>
				)}
			</div>
		</div>
	)
}

export default DatasetSelector
