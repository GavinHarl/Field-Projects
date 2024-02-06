'use client';
import React from "react";
import { PatternFormat } from "react-number-format";
import "./Vehicles.css";

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
    <div className="cardBody">
      <h1>{props.year} {props.make} {props.model}</h1>
      <h2><PatternFormat format="$#,##0" value={props.price} displayType="text"/></h2>
      <p>{props.usage} - <PatternFormat format="###,##0" value={props.miles} displayType="text"/> mi.</p>
      <p>{props.mpg} MPG, {props.engine} litre engine.</p>
      <p>{props.drive} drive</p>
      <p hidden={true}>{props.drive}</p>
      <p hidden={true}>Exterior Color: {props.extColor}</p>
      <p hidden={true}>Interior Color: {props.intColor}</p>
      <p hidden={true}>{props.desc}</p>
      <p hidden={true}>Stock Number: {props.stockNum}</p>
    </div>
  );
}

export default VehicleBody;
