import React from "react";
import ContentLoader from "react-content-loader";

const GridLoader__ = ({
  width = 1360,
  height = 1500,
  heading = { width: 0, height: 0 },
  row = 3,
  column = 3,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  let x = 0;

  let y = 20;

  let list = [];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      list.push(
        <>
          {/* Author */}
          <circle cx={x + 20} cy={y} r="20" />
          <rect x={x + 50} y={y - 14} rx="8" ry="8" width="200" height="25" />

          <rect x={x} y={y + 30} rx="8" ry="8" width="380" height="200" />
          <rect x={x} y={y + 250} rx="0" ry="0" width="200" height="30" />
          <rect x={x} y={y + 300} rx="0" ry="0" width="380" height="20" />
          <rect x={x} y={y + 330} rx="0" ry="0" width="270" height="20" />
          <rect x={x} y={y + 380} rx="10" ry="10" width="150" height="50" />
        </>
      );

      x += 450;
    }

    x = 0;

    y += 500;
  }

  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#787878"
      foregroundColor="#ffffff"
      {...props}
    >
      {list}
      {/* <circle cx="20" cy="20" r="20" />
      <rect x="50" y="6" rx="8" ry="8" width="200" height="25" />
      <rect x="0" y="50" rx="8" ry="8" width="380" height="200" />
      <rect x="0" y="280" rx="0" ry="0" width="300" height="30" />
      <rect x="0" y="325" rx="0" ry="0" width="380" height="20" />
      <rect x="0" y="350" rx="0" ry="0" width="270" height="20" />
      <rect x="0" y="380" rx="10" ry="10" width="100" height="50" />

      <circle cx="470" cy="20" r="20" />
      <rect x="500" y="6" rx="8" ry="8" width="200" height="25" />
      <rect x="450" y="50" rx="8" ry="8" width="380" height="200" />
      <rect x="450" y="280" rx="0" ry="0" width="300" height="30" />
      <rect x="450" y="325" rx="0" ry="0" width="380" height="20" />
      <rect x="450" y="350" rx="0" ry="0" width="270" height="20" />
      <rect x="450" y="380" rx="10" ry="10" width="100" height="50" />

      <circle cx="920" cy="20" r="20" />
      <rect x="950" y="6" rx="8" ry="8" width="200" height="25" />
      <rect x="900" y="50" rx="8" ry="8" width="380" height="200" />
      <rect x="900" y="280" rx="0" ry="0" width="300" height="30" />
      <rect x="900" y="325" rx="0" ry="0" width="380" height="20" />
      <rect x="900" y="350" rx="0" ry="0" width="270" height="20" />
      <rect x="900" y="380" rx="10" ry="10" width="100" height="50" /> */}

      {/* Second Row */}
      {/* <circle cx="20" cy="520" r="20" />
      <rect x="50" y="506" rx="8" ry="8" width="200" height="25" />
      <rect x="0" y="550" rx="8" ry="8" width="380" height="200" /> */}
      {/* Plus 50 each time */}
      {/* <rect x="0" y="770" rx="0" ry="0" width="200" height="30" />
      <rect x="0" y="820" rx="0" ry="0" width="380" height="25" />
      <rect x="0" y="850" rx="0" ry="0" width="270" height="25" />
      <rect x="0" y="900" rx="10" ry="10" width="150" height="50" /> */}
      {/* <rect x="0" y="230" rx="0" ry="0" width="300" height="30" />
      <rect x="0" y="275" rx="0" ry="0" width="380" height="20" />

      <rect x="450" y="0" rx="8" ry="8" width="380" height="200" />
      <rect x="450" y="230" rx="0" ry="0" width="300" height="30" />
      <rect x="450" y="275" rx="0" ry="0" width="380" height="20" />

      <rect x="900" y="0" rx="8" ry="8" width="380" height="200" />
      <rect x="900" y="230" rx="0" ry="0" width="300" height="30" />
      <rect x="900" y="275" rx="0" ry="0" width="380" height="20" /> */}
    </ContentLoader>
  );
};

GridLoader__.metadata = {
  name: "I am Doong - I come from Việt Nam",
  github: "toiladoong",
  description: "CatalogMagic",
  filename: "CatalogMagic",
};

export default GridLoader__;
