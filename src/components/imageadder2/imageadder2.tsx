import React, { useState, useRef, FunctionComponent, useEffect } from "react"
import Image, { ImageProps as ImageData } from "@/components/image/image"
import ImageTile from "../imageTile/imageTile"

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
	"/datasets/evaluation/46.png", "/datasets/evaluation/47.png",
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
		const x = Math.floor(Math.random() * 2160); //inner width of screen
		const y = Math.floor(Math.random() * 3840); //inner height of screen
  
		setImages(prevImages => [...prevImages, <div style={{ position: "absolute", left: x, top: y, zIndex: 90,}}> <ImageTile key={imageCount} url={randomImagePath} scale={300} /> </div>]);
		setImageCount(prevCount => prevCount + 1);
	  }, 50); //set time between images here
  
	  return () => clearInterval(intervalId);
	}, [evalImages, imageCount]);
  
	return <div>{images}</div>;
  };
  
 

export default ImageAdder2

