// eslint-disable-next-line
import boxes from "./boxes.css";
// eslint-disable-next-line
import { useState } from "react";

// eslint-disable-next-line
export default function (props) {
  let symbol = props.symbol;

  let background = "backgroundBefore";
  if (symbol === 1) {
    background = "backgroundAfter";
  }

  return (
    <div
      onClick={() => {
        const a = props.a;
        const b = props.b;
        const gridState = props.gridState;
        if (symbol === 1) {
          gridState[a][b] = 0;
        } else {
          gridState[a][b] = 1;
        }
        props.onClick([...gridState]);
      }}
      id="box"
      class={background}
    ></div>
  );
}
