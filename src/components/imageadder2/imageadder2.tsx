import React, { useState, useRef } from 'react';

// TODO: Add a restart button
// TODO: Create space free from images in the middle and add explanation text

const ImageAdder2 = () => {
  // Declare a state variable to store the time delay between images
  const [timeDelay, setTimeDelay] = useState(1000);
  //const [imageSize, setImageSize] = useState(500);

  // Create a ref to track the index of the current image
  const index = useRef(0);
  const width = 2160;
  const height = 3840;

  // Function to add an image at a random position on the webpage
  const addImage = () => {
    // Create an image element and set its source
    const img = document.createElement('img');
    img.src = `/datasets/tech_5x4/set01/image_${Math.floor(Math.random() * 7)}.png`;

    // Generate random coordinates for the image
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const imagesize = Math.floor(Math.random() * 300);

    const centerX = width / 2;
    const centerY = height / 2;

    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = Math.min(width, height) / 4;

    if (distance > radius) {
    // Set the position of the image using the random coordinates
        img.style.position = 'absolute';
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.width = `${imagesize}px`;
        img.style.height = `${imagesize}px`;
        img.style.overflow = 'hidden';

    
    
    // Add the image to the page
        if (index.current < 1000) {
            document.body.appendChild(img);
        }
    // Increment the index of the current image
        index.current++;
    //if index.current > 1000 {
        
    };
    // Reduce the time delay between images by a bit
    setTimeDelay(timeDelay * 0.9);
    //setImageSize(Math.max(imageSize * 0.9, 100));
  };

  // Call the addImage function after a time delay
  setTimeout(addImage, timeDelay);

  return null;
};

export default ImageAdder2;