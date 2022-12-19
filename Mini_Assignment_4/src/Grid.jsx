import Boxes from "./Boxes";
// eslint-disable-next-line
import grid from "./grid.css";
import React, { useState } from "react";

// eslint-disable-next-line
export default function () {
  const [gridState, setGrid] = useState([
    [0, 0],
    [0, 0],
  ]);

  const component = [];

  for (let i = 0; i < gridState.length; i++) {
    let row = gridState[i];
    for (let j = 0; j < row.length; j++) {
      component.push(
        <Boxes
          symbol={gridState[i][j]}
          onClick={setGrid}
          gridState={gridState}
          a={i}
          b={j}
        />
      );
    }
  }

  return (
    <div>
      <div>
        <h2>
          NUMBER OF BOXES SELECTED ={" "}
          {gridState[0][0] +
            gridState[0][1] +
            gridState[1][0] +
            gridState[1][1]}
        </h2>
      </div>
      <div id="style">{component}</div>
    </div>
  );
}
