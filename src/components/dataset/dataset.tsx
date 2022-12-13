import { BackgroundColor, CorrectColor, InterfaceColor, WrongColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useState } from "react"
import ImageTile from "../imageTile/imageTile"

interface DatasetProps {
	index: number
	title: string
	images: string[][]
	selected?: boolean
	onClick: (index: number) => void
	correct: boolean
	notcorrect: boolean
}

const showImages = true

const shuffleImages = (images: string[][]) => {
	const rowLength = images[0].length
	const columnLength = images.length
	const totalImages = rowLength * columnLength

	// Create array with count from 0 to totalImages
	const countArray = Array.from(Array(totalImages).keys())
	const shuffledCountArray = countArray.sort(() => Math.random() - 0.5)
	console.log(shuffledCountArray)

	const imagesCloneArray = images.map(function (arr) {
		return arr.slice()
	})

	for (let i = 0; i < totalImages; i++) {
		const randomIndex = shuffledCountArray[i]
		const randomRow = Math.floor(randomIndex / rowLength)
		const randomColumn = randomIndex % rowLength

		const currentRow = Math.floor(i / rowLength)
		const currentColumn = i % rowLength

		images[currentRow][currentColumn] = imagesCloneArray[randomRow][randomColumn]
	}

	return images
}

const Dataset: FunctionComponent<DatasetProps> = ({
	index,
	title,
	images,
	onClick,
	correct,
	notcorrect,
	selected = true,
}) => {
	const [shuffledImages, setShuffledImages] = useState(shuffleImages(images))

	useEffect(() => {
		setShuffledImages(shuffleImages(images))
	}, [images])

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
					background: correct ? CorrectColor : notcorrect ? WrongColor : selected ? InterfaceColor : "white",
					cursor: "pointer",
				}}
			>
				<p
					style={{
						fontSize: "32px",
						fontWeight: 500,
						color: selected || correct || notcorrect ? "white" : InterfaceColor,
					}}
				>
					{title}
				</p>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					background: correct ? CorrectColor : notcorrect ? WrongColor : selected ? InterfaceColor : "white",
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
				{shuffledImages.map((imagesRow, index) => (
					<div
						key={"column_" + index}
						style={{ display: "flex", flexDirection: "column", padding: "0px", gap: "10px" }}
					>
						{imagesRow.map((image) => (
							<ImageTile key={image} url={image} show={showImages} scale={600 / shuffledImages.length} />
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default Dataset
