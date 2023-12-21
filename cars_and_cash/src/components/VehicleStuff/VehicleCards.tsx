'use client';
import React from "react";
import VehiclePictures from "./VehiclePicture.tsx";
import VehicleBody from "./VehicleBody.tsx"
import "./Vehicles.css";

interface Props {
  pics: string[];
  make: string;
  model: string;
  year: string;
  price: string;
  engine: string;
  transmission: string;
  mpg: string;
  usage: string;
  miles: string;
  drive: string;
  intColor: string;
  extColor: string;
  stockNum: string;
  desc: string;
}

function VehicleCards(props: Props) {
  return (
    <div className="vehicleCard">
      <VehiclePictures pics={props.pics}/>
      <VehicleBody 
        make={props.make}
        model={props.model}
        year={props.year}
        price={props.price}
        engine={props.engine}
        transmission={props.transmission}
        mpg={props.mpg}
        usage={props.usage}
        miles={props.miles}
        drive={props.drive}
        intColor={props.intColor}
        extColor={props.extColor}
        stockNum={props.stockNum}
        desc={props.desc}
      />
    </div>
  );
}

export default VehicleCards;
