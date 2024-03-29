import { BackgroundColor, CorrectColor, InterfaceColor, WrongColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useRef, useState } from "react"
import ImageTile from "../imageTile/imageTile"

interface DatasetProps {
	id: string
	index: number
	title: string
	images: string[][]
	selected?: boolean
	onClick: (index: number) => void
	correct: boolean
	notcorrect: boolean
	shuffle?: boolean
	resultDelay?: number
	backgroundColor?: string
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
	id,
	index,
	title,
	images,
	onClick,
	correct,
	notcorrect,
	selected = true,
	shuffle = false,
	resultDelay = undefined,
	backgroundColor = InterfaceColor,
}) => {
	const [shuffledImages, setShuffledImages] = useState(shuffle ? shuffleImages(images) : images)
	const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | undefined>(undefined)
	const [datasetChanged, setDatasetChanged] = useState(false)

	const backgroundDIV = useRef<HTMLDivElement>(null)
	const titleDIV = useRef<HTMLDivElement>(null)
	const titleP = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		setShuffledImages(shuffle ? shuffleImages(images) : images)
	}, [images])

	useEffect(() => {
		setDatasetChanged(true)
	}, [images])

	useEffect(() => {
		if (resultDelay != undefined && datasetChanged) {
			clearTimeout(delayTimeout)
			setDatasetChanged(false)
			setDelayTimeout(undefined)

			const timeout = setTimeout(() => {
				if (backgroundDIV.current && titleDIV.current && titleP.current) {
					backgroundDIV.current.style.transition = "all 1s ease"
					titleDIV.current.style.transition = "all 1s ease"
					titleP.current.style.transition = "all 1s ease"

					console.log("called")

					setTimeout(() => {
						if (backgroundDIV.current && titleDIV.current && titleP.current) {
							backgroundDIV.current.style.transition = "None"
							titleDIV.current.style.transition = "None"
							titleP.current.style.transition = "None"
						}
					}, 1000)

					backgroundDIV.current.style.background = correct
						? CorrectColor
						: notcorrect
						? WrongColor
						: selected
						? InterfaceColor
						: "white"
					titleDIV.current.style.background = correct
						? CorrectColor
						: notcorrect
						? WrongColor
						: selected
						? InterfaceColor
						: "white"
					titleP.current.style.color = correct || notcorrect ? "white" : selected ? "white" : InterfaceColor
				}
			}, resultDelay)
			setDelayTimeout(timeout)
		}
	}, [correct, notcorrect, resultDelay, datasetChanged, setDelayTimeout, delayTimeout, selected])

	return (
		<div
			style={{
				width: "640px",
				display: "flex",
				flexDirection: "column",
			}}
			onClick={() => {
				console.log("clicked")
				onClick(index)
			}}
		>
			<div
				ref={titleDIV}
				style={{
					width: "fit-content",
					padding: "10px 40px 5px 15px",
					flexDirection: "column",
					borderRadius: "20px 20px 0px 0px",
					background: selected ? backgroundColor : "white",
					cursor: "pointer",
				}}
			>
				<p
					ref={titleP}
					style={{
						fontSize: "32px",
						fontWeight: 500,
						color: selected ? "white" : InterfaceColor,
					}}
				>
					{title}
				</p>
			</div>

			<div
				ref={backgroundDIV}
				style={{
					display: "flex",
					flexDirection: "row",
					background: selected ? backgroundColor : "white",
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
