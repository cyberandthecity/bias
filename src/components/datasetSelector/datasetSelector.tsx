import { Dataset as DS } from "@/stores/gameStore"
import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Dataset from "../dataset/dataset"
import Slider from "../slider/slider"

interface DatasetSelectorProps {
	title: string
	datasets: DS[]
	confirmDataset: (index: number) => void
	isChecking: boolean
	correctDataset: number
}

const DatasetSelector: FunctionComponent<DatasetSelectorProps> = ({
	title,
	datasets,
	confirmDataset,
	isChecking,
	correctDataset,
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
				<p style={{ fontSize: "42px", fontWeight: 600, color: InterfaceColor }}>{title}</p>

				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					{datasets.map((dataset, index) => (
						<Dataset
							index={index}
							key={"dataset_" + index}
							title={dataset.title}
							images={dataset.images}
							selected={!isChecking && selectedDataset == index}
							correct={isChecking && correctDataset == index}
							notcorrect={isChecking && correctDataset != index}
							onClick={(index) => {
								setSelectedDataset(index)
							}}
						/>
					))}
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
					}}
				>
					<p style={{ fontSize: "32px", fontWeight: 500, color: "black", opacity: 0.3 }}>Wähle einen Datensatz aus</p>
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
					paddingLeft: "65px",
					paddingRight: "65px",
					paddingTop: "25px",
					background: BackgroundColor,
				}}
			/>
		</div>
	)
}

export default DatasetSelector
