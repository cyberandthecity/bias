import { Dataset as DS } from "@/stores/gameStore"
import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useState } from "react"
import Chat, { BackgroundColorType, ChatOrientation } from "../chat/chat"
import Dataset from "../dataset/dataset"
import Hint from "../hint/hint"
import { Message, MessageType } from "../message/message"
import PointingBar from "../pointingBar/pointingBar"

import SelectionButton from "../selectionButton/selectionButton"

interface DatasetSelectorProps {
	title: string
	datasets: DS[]
	hintPrompt: string
	isInEvaluatingMode: boolean
	correctDataset: number
	confirmDataset: (index: number) => void
	nextLevel: () => void
	didCompleteGame: boolean
	showPointerBar: boolean
}

const DatasetSelector: FunctionComponent<DatasetSelectorProps> = ({
	title,
	datasets,
	nextLevel,
	isInEvaluatingMode,
	confirmDataset,
	correctDataset,
	hintPrompt,
	didCompleteGame,
	showPointerBar,
}) => {
	const [selectedDataset, setSelectedDataset] = useState<number | undefined>(undefined)
	const [isFirstSelection, setIsFirstSelection] = useState<boolean>(true)

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
						height: "100px",
					}}
				>
					<p style={{ fontSize: "42px", fontWeight: 600, color: InterfaceColor }}>{title}</p>

					<Hint hintPrompt={hintPrompt} isInEvaluatingMode={isInEvaluatingMode} />
				</div>

				<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					{datasets.map((dataset, index) => (
						<Dataset
							id={dataset.id}
							index={index}
							key={dataset.id}
							title={dataset.title}
							images={dataset.images}
							resultDelay={isInEvaluatingMode ? (selectedDataset == index ? 200 : dataset.resultDelays) : undefined}
							selected={!isInEvaluatingMode && selectedDataset == index}
							correct={isInEvaluatingMode && correctDataset == index}
							notcorrect={isInEvaluatingMode && selectedDataset == index && correctDataset != index}
							backgroundColor={isFirstSelection ? "#A1A8BE" : InterfaceColor}
							onClick={(index) => {
								if (!isInEvaluatingMode) {
									setSelectedDataset(index)
									if (isFirstSelection) {
										setIsFirstSelection(false)
									}
								}
							}}
						/>
					))}
				</div>
			</div>
			<div
				style={{
					height: "120px",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{showPointerBar && isFirstSelection && (
					<PointingBar
						cycleTime={2000}
						updateIndex={(index) => {
							setSelectedDataset(index)
						}}
					/>
				)}
			</div>
			<div
				style={{
					height: "150px",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",

					background: BackgroundColor,
				}}
			>
				<SelectionButton
					shine={!isFirstSelection}
					activated={!isInEvaluatingMode ? !isFirstSelection : true}
					onClick={() => {
						if (!isInEvaluatingMode && selectedDataset != undefined) {
							confirmDataset(selectedDataset)
						} else {
							nextLevel()
							setSelectedDataset(undefined)
							setIsFirstSelection(true)
						}
					}}
				>
					{isInEvaluatingMode ? (didCompleteGame ? "Zur Auswertung" : "Nächstes Level") : "Überprüfen"}
				</SelectionButton>
			</div>
		</div>
	)
}

export default DatasetSelector
