import React, { useState, useRef, FunctionComponent, useEffect } from "react"
import Image, { ImageProps as ImageData } from "@/components/image/image"
import ImageTile from "../imageTile/imageTile"
import { motion } from "framer-motion";

//declare array of image paths
const evalImages = [
	"/datasets/evaluation/1.png", "/datasets/evaluation/2.png", "/datasets/evaluation/3.png",
	"/datasets/evaluation/4.png", "/datasets/evaluation/5.png", "/datasets/evaluation/6.png",
	"/datasets/evaluation/7.png", "/datasets/evaluation/8.png", "/datasets/evaluation/9.png",
	"/datasets/evaluation/10.png", "/datasets/evaluation/11.png", "/datasets/evaluation/12.png",
	"/datasets/evaluation/13.png", "/datasets/evaluation/14.png", "/datasets/evaluation/15.png",
	"/datasets/evaluation/16.png", "/datasets/evaluation/17.png", "/datasets/evaluation/18.png",
	"/datasets/evaluation/19.png", "/datasets/evaluation/20.png", "/datasets/evaluation/21.png",
	"/datasets/evaluation/22.png", "/datasets/evaluation/23.png", "/datasets/evaluation/24.png",
	"/datasets/evaluation/25.png", "/datasets/evaluation/26.png", "/datasets/evaluation/27.png",
	"/datasets/evaluation/28.png", "/datasets/evaluation/29.png", "/datasets/evaluation/30.png",
	"/datasets/evaluation/31.png", "/datasets/evaluation/32.png", "/datasets/evaluation/33.png",
	"/datasets/evaluation/34.png", "/datasets/evaluation/35.png", "/datasets/evaluation/36.png",
	"/datasets/evaluation/37.png", "/datasets/evaluation/38.png", "/datasets/evaluation/39.png",
	"/datasets/evaluation/40.png", "/datasets/evaluation/41.png", "/datasets/evaluation/42.png",
	"/datasets/evaluation/43.png", "/datasets/evaluation/44.png", "/datasets/evaluation/45.png",
	"/datasets/evaluation/46.png", "/datasets/evaluation/47.png", "/datasets/evaluation/48.png",
	"/datasets/evaluation/49.png", "/datasets/evaluation/50.png", "/datasets/evaluation/51.png",
	"/datasets/evaluation/52.png", "/datasets/evaluation/53.png", "/datasets/evaluation/54.png",
	"/datasets/evaluation/55.png", "/datasets/evaluation/56.png", "/datasets/evaluation/57.png",
]


interface ImageAdder2Props {
	//imagePaths: string[];
  }
  
  const ImageAdder2: React.FC<ImageAdder2Props> = ({ }) => {
	const [images, setImages] = useState<JSX.Element[]>([]);
	const [imageCount, setImageCount] = useState(0);
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		if (imageCount >= 600) { //set number of added images here 
		  clearInterval(intervalId);
		  return;
		}
  
		const randomImagePath = evalImages[Math.floor(Math.random() * evalImages.length)];
		const x = Math.floor(Math.random() * 2160 -150); //inner width of screen
		const y = Math.floor(Math.random() * 3840 -150); //inner height of screen
		
		var grad = 0;
		if (Math.floor(Math.random() * 2) == 0) {
			grad = -5;
		} else {
			grad = 5;
		}

  
		setImages(prevImages => [...prevImages, 
		<motion.div
			initial={{rotate:grad,  scale: 0.6 }}
			animate={{rotate:0, scale: 1 }}
			transition={{
			  type: "spring",
			  stiffness: 260,
			  damping: 20
			}} 
			style={{ 
				position: "absolute", 
				left: x, 
				top: y, 
				zIndex: 90
			}}> 
			<ImageTile key={imageCount} url={randomImagePath} scale={300}/>
		</motion.div>]);
		setImageCount(prevCount => prevCount + 1);
	  }, 50); //set time between images here
  
	  return () => clearInterval(intervalId);
	}, [evalImages, imageCount]);
  
	return <div>{images}</div>;
  };
  
 

export default ImageAdder2

