import React, { useState, useRef, FunctionComponent } from "react"
import Image, { ImageProps as ImageData } from "@/components/image/image"
import ImageTile from "../imageTile/imageTile"

// TODO: Add a restart button
// TODO: Create space free from images in the middle and add explanation text

interface ImageAdder2Props {}

const ImageAdder2: FunctionComponent<ImageAdder2Props> = ({}) => {
	const [images, setImages] = useState<ImageData[]>([])

	// Declare a state variable to store the time delay between images
	const [timeDelay, setTimeDelay] = useState(1000)
	//const [imageSize, setImageSize] = useState(500);

	// Create a ref to track the index of the current image
	//const divRef = useRef(null);
	const index = useRef(0)
	const width = 2160
	const height = 3840

	// Function to add an image at a random position on the webpage
	const addImage = () => {
		// Generate random coordinates for the image
		const x = Math.floor(Math.random() * width)
		const y = Math.floor(Math.random() * height)
		const imagesize = Math.floor(Math.random() * 400)

		const centerX = width / 2
		const centerY = height / 2

		const dx = x - centerX
		const dy = y - centerY
		const distance = Math.sqrt(dx * dx + dy * dy)
		const radius = Math.min(width, height) / 4

		//if (x < 535 || x > 1423 || y < 1037 || y > 2803) {
		const image: ImageData = {
			id: index.current,
			x: x,
			y: y,
			width: imagesize,
			height: imagesize,
			src: `/datasets/evaluation/${Math.floor(Math.random() * 47) + 1}.png`,
		}

		// Add the image to the page
		if (index.current < 1500) {
			setImages([...images, image])
		}
		// Increment the index of the current image
		index.current++
		//if index.current > 1000 {
		//}
		// Reduce the time delay between images by a bit
		setTimeDelay(0.65 * timeDelay)
		//setImageSize(Math.max(imageSize * 0.9, 100));
	}

	// Call the addImage function after a time delay
	setTimeout(addImage, timeDelay)

	return (
		<>
			{" "}
			{images.map((image) => (
				<div
					style={{
						position: "absolute",
						left: `${image.x}px`,
						top: `${image.y}px`,
						zIndex: 90,
					}}
				>
					<ImageTile key={image.id} url={image.src} scale={300} />
				</div>
			))}{" "}
		</>
	)
}

export default ImageAdder2
