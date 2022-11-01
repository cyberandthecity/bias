import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent } from "react"

interface ImageTile {
	url: string
	scale: number
	show?: boolean
}

const ImageTile: FunctionComponent<ImageTile> = ({ url, scale, show = true }) => {
	return (
		<div
			style={{
				boxSizing: "border-box",
				width: `${scale}px`,
				height: `${scale}px`,
				background: show ? "url(" + url + ")" : "#f0f0f0",
				border: "3px solid #FFFFFF",
				filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1))",
				borderRadius: "20px",
				backgroundSize: "cover",
			}}
		/>
	)
}

export default ImageTile
