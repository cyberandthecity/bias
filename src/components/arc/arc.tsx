import React from "react"
import "@/styles/progressBar.css"
type ProgressBarProps = {
	percentage: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
	const [progress, setProgress] = React.useState(percentage)

	React.useEffect(() => {
		setProgress(percentage)
	}, [percentage])

	return (
		<div className="progress-bar">
			<div
				className="progress-line"
				style={{
					width: `${progress}%`,
					borderTopRightRadius: progress === 100 ? "5px" : 0,
					borderBottomRightRadius: progress === 100 ? "5px" : 0,
				}}
			/>
		</div>
	)
}

export default ProgressBar
