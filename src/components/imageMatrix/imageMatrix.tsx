import { BackgroundColor, CorrectColor, InterfaceColor, WrongColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useRef, useState } from "react"
import ImageTile from "../imageTile/imageTile"

interface ImageMatrixProps {
	imageArray: string[][]
	scale?: number
	backgroundColor?: string
}

const ImageMatrix: FunctionComponent<ImageMatrixProps> = ({ imageArray, scale = 200 }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: "10px",
				borderRadius: "0px 20px 20px 20px",
				overflow: "hidden",
				justifyContent: "center",
				alignItems: "flex-start",
				gap: "10px",
				gridGap: "10px",
				cursor: "pointer",
			}}
		>
			{imageArray.map((imageRow, index) => (
				<div key={"column_" + index} style={{ display: "flex", flexDirection: "column", padding: "0px", gap: "10px" }}>
					{imageRow.map((image) => (
						<ImageTile key={image} url={image} show={true} scale={scale} />
					))}
				</div>
			))}
		</div>
	)
}

export default ImageMatrix
