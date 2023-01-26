import { FunctionComponent, useState, useEffect } from "react"
import "@/styles/pointer.css"

interface PointingBarProps {
	cycleTime: number
	updateIndex?: (index: number) => void
}

const PointingBar: FunctionComponent<PointingBarProps> = ({ cycleTime, updateIndex }) => {
	const [index, setIndex] = useState<number | undefined>(undefined)
	const positions = [392, 1087, 1786]

	useEffect(() => {
		if (index == undefined) {
			setIndex(0)
			if (updateIndex) {
				updateIndex(0)
			}
		}

		const interval = setInterval(() => {
			if (index != undefined) {
				const newIndex = (index + 1) % positions.length

				setIndex(newIndex)
				if (updateIndex) {
					updateIndex(newIndex)
				}
			}
		}, cycleTime)
		return () => clearInterval(interval)
	}, [cycleTime, positions, setIndex, index])

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<p
				style={{
					fontSize: "32px",
					fontWeight: 500,
					color: "black",
					opacity: 0.3,
				}}
			>
				Tippe auf einen Datensatz um ihn auszuwählen
			</p>
			{index != undefined && (
				<div
					style={{
						width: "120px",
						height: "120px",
						transform: "translate(-50%, 0)",
						position: "absolute",
						left: positions[index],
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img className={"bounce"} src={"/emojis/pointingUp.png"} style={{ width: "200px" }} />
				</div>
			)}
		</div>
	)
}

export default PointingBar
