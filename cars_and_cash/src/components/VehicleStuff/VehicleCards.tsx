'use client';
import React from "react";
import VehiclePictures from "./VehiclePicture.tsx";
import VehicleBody from "./VehicleBody.tsx"
import "./Vehicles.css";


const VehicleCards = ({item, isEnlarged, clicked}) => {
  return (
    <div className="vehicleCard" onClick={clicked}>
      <VehiclePictures pics={item.pics}/>
      <VehicleBody 
        make={item.make}
        model={item.model}
        year={item.year}
        price={item.price}
        engine={item.engine}
        transmission={item.transmission}
        mpg={item.mpg}
        usage={item.usage}
        miles={item.miles}
        drive={item.drive}
        intColor={item.intColor}
        extColor={item.extColor}
        stockNum={item.stockNum}
        desc={item.desc}
      />
    </div>
  );
}

export default VehicleCards;
