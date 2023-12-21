'use client';
import React, { useState, useEffect } from "react";
import "./Vehicles.css";

interface Props {
  pics: string[];
}

function VehiclePictures(props: Props) {
  const [images, setImages] = useState<string[]>(props.pics);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const img = document.getElementById("currentImage");
  const imageBlowup = () => {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
  }
  const imageReset = () => {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="image-slider">
      {images.length > 0 && (
        <img src={images[currentImageIndex]} alt="Vehicles" onClick={imageBlowup} id="currentImage"/>
      )}
      <button className="arrow-button arrow-left" onClick={previousImage}>
        &lt;
      </button>
      <button className="arrow-button arrow-right" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
}

export default VehiclePictures;
