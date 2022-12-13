import { FunctionComponent, memo } from "react"

export interface ImageProps {
	id: number
	src: string
	x: number
	y: number
	width: number
	height: number
}

const Image: FunctionComponent<ImageProps> = memo(({ id, src, x, y, width, height }) => {
	return (
		<img
			src={src}
			style={{
				position: "absolute",
				left: `${x}px`,
				top: `${y}px`,
				width: `${width}px`,
				height: `${height}px`,
				overflow: "hidden",
			}}
		/>
	)
})

export default Image
