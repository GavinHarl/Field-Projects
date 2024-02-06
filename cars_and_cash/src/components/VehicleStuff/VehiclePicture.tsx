'use client';
import React, { useState } from "react";
import "./Vehicles.css";

interface Props {
  pics: string[];
}

function VehiclePictures(props: Props) {
  const [images, setImages] = useState<string[]>(props.pics);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const img = document.getElementById("currentImage");
  const exitBttn = document.getElementById("exit");
  
  const imageBlowup = () => {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";

    exitBttn.hidden = false;
  };

  const imageReset = () => {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";

    exitBttn.hidden = true;
  };

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
        <img src={images[currentImageIndex]} alt="Vehicles" id="currentImage" onClick={imageBlowup}/>
      )}
      <button id="exit" onClick={imageReset} hidden={true}>
        &#10060;
      </button>
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
