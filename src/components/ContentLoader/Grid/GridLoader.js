import React from "react";
import ContentLoader from "react-content-loader";

const GridLoader__ = ({
  width = 1360,
  height = 1500,
  heading = { width: 0, height: 0 },
  totalRow = 2,
  itemPerRow = 3,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  let key = 1;

  let x = 15;

  let y = 20;

  let list = [];

  for (let r = 0; r < totalRow; r++) {
    for (let c = 0; c < itemPerRow; c++) {
      list.push(
        <React.Fragment key={key}>
          {/* Author */}
          <circle cx={x + 20} cy={y} r="20" />
          <rect x={x + 50} y={y - 14} rx="8" ry="8" width="200" height="25" />

          <rect x={x} y={y + 30} rx="8" ry="8" width="430" height="200" />
          <rect x={x} y={y + 250} rx="0" ry="0" width="200" height="30" />
          <rect x={x} y={y + 300} rx="0" ry="0" width="430" height="20" />
          <rect x={x} y={y + 330} rx="0" ry="0" width="300" height="20" />
          <rect x={x} y={y + 380} rx="10" ry="10" width="150" height="50" />
        </React.Fragment>
      );

      x += 450;
      key++;
    }

    x = 15;

    y += 500;
  }

  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#787878"
      foregroundColor="#ffffff"
      // {...props}
    >
      {list}
    </ContentLoader>
  );
};

GridLoader__.metadata = {
  name: "Leo Nguyen",
  github: "leonguyen020",
  description: "GridLoader",
  filename: "GridLoader",
};

export default GridLoader__;
