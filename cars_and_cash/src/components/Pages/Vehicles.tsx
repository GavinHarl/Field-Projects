'use client';
import React, { useState, useEffect } from "react";
import VehicleCards from "../VehicleStuff/VehicleCards.tsx";
import "../VehicleStuff/Vehicles.css";

interface aVehicle {
  Pictures: string[];
  Make: string;
  Model: string;
  Year: string;
  Price: string;
  Engine: string;
  Transmission: string;
  MPG: string;
  Usage: string;
  Miles: string;
  Drive: string;
  InteriorColor: string;
  ExteriorColor: string;
  StockNumber: string;
  Description: string;
}

function Vehicles() {
  const [data, setData] = useState<aVehicle[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/VehicleAPI.json");

      if (response.ok) {
        const theData: aVehicle[] = await response.json();
        setData(theData);
      } else {
        return <h1>Failed to retrieve data, try reloading the page.</h1>;
      }

    } catch (error) {
      console.log(error);
      return (
        <div className="error">
          <h2>Sorry, we encountered an error.</h2>
        </div>
      );
    };
  };

  return (
    <div className="body">
      {data.map((aVehicle) => (
        <VehicleCards 
          pics={aVehicle.Pictures}
          make={aVehicle.Make}
          model={aVehicle.Model}
          year={aVehicle.Year}
          price={aVehicle.Price}
          engine={aVehicle.Engine}
          transmission={aVehicle.Transmission}
          mpg={aVehicle.MPG}
          usage={aVehicle.Usage}
          miles={aVehicle.Miles}
          drive={aVehicle.Drive}
          intColor={aVehicle.InteriorColor}
          extColor={aVehicle.ExteriorColor}
          stockNum={aVehicle.StockNumber}
          desc={aVehicle.Description}
        />
      ))}
    </div>
  );
}

export default Vehicles;
