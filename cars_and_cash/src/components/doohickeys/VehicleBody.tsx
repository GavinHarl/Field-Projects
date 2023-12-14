import React from "react";

interface Props {
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

function VehicleBody(props: Props) {
  
  
  return (
    <>
      <p>Filler</p>
    </>
  );
}

export default VehicleBody;
