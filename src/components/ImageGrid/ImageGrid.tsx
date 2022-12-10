import React, { useState, useEffect } from 'react';


interface ImageGridProps {
    imageUrls: string[];
  }

const ImageGrid = ({ imageUrls }: ImageGridProps) => {
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    // Start a timer to gradually increase the zoom level over time
    const timer = setInterval(() => {
      setZoom((zoom) => (zoom - 0.04));
    }, 5);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(40, 1fr)`,
        gridTemplateRows: `repeat(50, 1fr)`,
        transform: `scale(${zoom})`,
        transformOrigin: 'center',
        //overflow: 'hidden',
      }}
    >
      {imageUrls.map((url) => (
        <img src={url} />
      ))}
    </div>
  );
};

export default ImageGrid;
