import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"
import ImageTile from "../imageTile/imageTile"

interface DatasetProps {
	index: number
	title: string
	images: string[][]
	selected?: boolean
	onClick: (index: number) => void
}

const showImages = true

const Dataset: FunctionComponent<DatasetProps> = ({ index, title, images, onClick, selected = true }) => {
	return (
		<div
			style={{
				width: "640px",
				display: "flex",
				flexDirection: "column",
			}}
			onClick={() => {
				onClick(index)
			}}
		>
			<div
				style={{
					width: "fit-content",
					padding: "10px 40px 5px 15px",
					flexDirection: "column",
					borderRadius: "20px 20px 0px 0px",
					background: selected ? InterfaceColor : "white",
					cursor: "pointer",
				}}
			>
				<p
					style={{
						fontSize: "32px",
						fontWeight: 500,
						color: selected ? "white" : InterfaceColor,
						opacity: selected ? 1 : 0.8,
					}}
				>
					{title}
				</p>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					background: selected ? InterfaceColor : "white",
					padding: "10px",
					borderRadius: "0px 20px 20px 20px",
					overflow: "hidden",
					justifyContent: "center",
					alignItems: "flex-start",
					gap: "10px",
					cursor: "pointer",
				}}
			>
				{images.map((images, index) => (
					<div
						key={"column_" + index}
						style={{ display: "flex", flexDirection: "column", padding: "0px", gap: "10px" }}
					>
						{images.map((image) => (
							<ImageTile key={image} url={image} show={showImages} scale={600 / images.length} />
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Dataset
