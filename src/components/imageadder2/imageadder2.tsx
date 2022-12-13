import React, { useState, useRef, FunctionComponent } from "react"
import Image, { ImageProps as ImageData } from "@/components/image/image"
import { Center } from "@react-three/drei"

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
		const imagesize = Math.floor(Math.random() * 200)

		const centerX = width / 2
		const centerY = height / 2

		const dx = x - centerX
		const dy = y - centerY
		const distance = Math.sqrt(dx * dx + dy * dy)
		const radius = Math.min(width, height) / 4

		if (distance > radius) {
			const image: ImageData = {
				id: index.current,
				x: x,
				y: y,
				width: imagesize,
				height: imagesize,
				src: `/datasets/tech_5x4/set01/image_${Math.floor(Math.random() * 7)}.png`,
			}

			// Add the image to the page
			if (index.current < 1500) {
				setImages([...images, image])
			}
			// Increment the index of the current image
			index.current++
			//if index.current > 1000 {
		}
		// Reduce the time delay between images by a bit
		setTimeDelay(timeDelay * 0.9)
		//setImageSize(Math.max(imageSize * 0.9, 100));
	}

	// Call the addImage function after a time delay
	setTimeout(addImage, timeDelay)

	return (
		<>
			{" "}
			{images.map((image) => (
				<Image key={image.id} {...image} />
			))}
			<div style={{ position: 'relative', fontSize: 60 }}>
     		<p style={{ position: 'absolute', left: width/2 - 310, top: height/2, textAlign: 'center', color: 'white'}}>Um zu lernen brauche ich <br></br> sehr viele Daten!</p>
    		</div>
			{" "}
		</>
	)
}

export default ImageAdder2
