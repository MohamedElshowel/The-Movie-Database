import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function VoteRate(props: { value: number }) {
  return (
    <CircularProgressbar
      value={props.value}
      text={`${props.value}%`}
      background
      styles={{
        path: {
          stroke: "#21d07a",
        },
        trail: {
          stroke: "gray",
        },
        text: {
          fill: "white",
          fontSize: "26px",
          fontWeight: "bold",
        },
        background: {
          fill: "black",
        },
      }}
    />
  );
}

export default VoteRate;
