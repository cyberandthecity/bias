import { useGame } from "@/stores/gameStore"

import "@/styles/imageMoveEntrance.css"
import { FunctionComponent, useEffect, useState } from "react"

interface ImageCyclerProps {
	position?: { x: number; y: number }
}

const ImageCycler: FunctionComponent<ImageCyclerProps> = ({ position }) => {
	const second_level = useGame((state) => state.levels[1])
	const images = useGame((state) => state.actions.datasetsForLevel(second_level)[0].images).flat()

	const [displayedImages, setDisplayedImages] = useState<string[]>([images[0]])

	useEffect(() => {
		const timeout = setTimeout(() => {
			const previousImage = displayedImages[1] ?? displayedImages[0]
			const randomImage = images[Math.floor(Math.random() * images.length)]
			if (previousImage != undefined) {
				setDisplayedImages([previousImage, randomImage])
			} else {
				setDisplayedImages([randomImage])
			}
		}, 3000)

		return () => {
			clearTimeout(timeout)
		}
	}, [displayedImages])

	return (
		<div
			style={{
				zIndex: 0,
				position: "absolute",
				top: position?.y ?? 0 + "px",
				left: position?.x ?? 0 + "px",
			}}
		>
			{displayedImages.map((image) => (
				<img
					key={image}
					className="slideLeftToPosition"
					src={image}
					style={{ borderRadius: "40px", width: "250px", height: "250px", position: "absolute" }}
				/>
			))}
		</div>
	)
}

export default ImageCycler
