import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";

const TableLoader = ({
  width = 1300,
  height = 990,
  heading = { width: 0, height: 0 },
  totalRow = 10,
  itemPerRow = 4,
  padding = 20,
  borderRadius = 3,
  ...props
}) => {
  let y = Math.floor(height / totalRow) + 150 + padding;

  let list = [];

  for (let index = 0; index < totalRow; index++) {
    list.push(
      <Fragment key={index}>
        <rect
          x="20"
          y={y}
          rx={borderRadius}
          ry={borderRadius}
          width="230"
          height="20"
        />
        <rect
          x="340"
          y={y}
          rx={borderRadius}
          ry={borderRadius}
          width="230"
          height="20"
        />
        <rect
          x="660"
          y={y}
          rx={borderRadius}
          ry={borderRadius}
          width="230"
          height="20"
        />
        <circle cx="1200" cy={y + 12} r="15" />
        <circle cx="1250" cy={y + 12} r="15" />
        <rect
          x="0"
          y={y + 40}
          rx={borderRadius}
          ry={borderRadius}
          width={width - 23}
          height="2"
        />
      </Fragment>
    );

    y += 60;
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
      {/* Border Top */}
      <rect x="0" y="45" rx="0" ry="0" width={width - 23} height="4" />
      {/* Border Left */}
      <rect x="0" y="45" rx="0" ry="0" width="2" height={y - 63} />
      {/* Border Right */}
      <rect x="1275" y="45" rx="0" ry="0" width="2" height={y - 63} />
      {/* Previous Button */}
      <rect x="15" y="65" rx="10" ry="10" width="350" height="50" />
      {/* Select Page Button */}
      <rect x="420" y="65" rx="10" ry="10" width="180" height="50" />
      {/* Select Row Per Page Button */}
      <rect x="680" y="65" rx="10" ry="10" width="180" height="50" />
      {/* Next Button */}
      <rect x="910" y="65" rx="10" ry="10" width="350" height="50" />

      {/* Heading */}
      <rect x="20" y="140" rx="0" ry="0" width="150" height="20" />
      <rect x="340" y="140" rx="0" ry="0" width="150" height="20" />
      <rect x="660" y="140" rx="0" ry="0" width="150" height="20" />
      <rect x="1170" y="140" rx="0" ry="0" width="100" height="20" />

      <rect x="0" y="170" rx="3" ry="3" width={width - 23} height="17" />
      <rect x="0" y="185" rx="3" ry="3" width="20" height="33" />
      <rect x="320" y="185" rx="3" ry="3" width="20" height="33" />
      <rect x="640" y="185" rx="3" ry="3" width="20" height="33" />
      <rect x="960" y="185" rx="3" ry="3" width="315" height="33" />
      <rect x="0" y="215" rx="3" ry="3" width={width - 23} height="17" />

      {/* Divider between heading and data rows */}
      <rect x="0" y="240" rx="3" ry="3" width={width - 23} height="2" />
      {list}

      {/* Data rows */}
      {/* <rect x="20" y="220" rx="3" ry="3" width="230" height="20" />
      <rect x="340" y="220" rx="3" ry="3" width="230" height="20" />
      <rect x="660" y="220" rx="3" ry="3" width="230" height="20" />
      <circle cx="1200" cy="230" r="15" />
      <circle cx="1250" cy="230" r="15" />
      <rect x="0" y="260" rx="3" ry="3" width={width - 23} height="2" /> */}

      {/* <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
      <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
      <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
      <circle cx="879" cy="123" r="11" />
      <circle cx="914" cy="123" r="11" />
      <rect x="0" y="155" rx="3" ry="3" width="897" height="2" /> */}

      {/* <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
      <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
      <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
      <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
      <circle cx="880" cy="184" r="11" />
      <circle cx="915" cy="184" r="11" />

      <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
      <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
      <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
      <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
      <circle cx="881" cy="242" r="11" />
      <circle cx="916" cy="242" r="11" />

      <circle cx="882" cy="303" r="11" />
      <circle cx="917" cy="303" r="11" />
      <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
      <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
      <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
      <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
      <circle cx="881" cy="363" r="11" />
      <circle cx="916" cy="363" r="11" />
      <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
      <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
      <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
      <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />

      <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
      <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
      <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
      <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
      <circle cx="882" cy="424" r="11" />
      <circle cx="917" cy="424" r="11" />

      <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
      <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
      <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
      <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
      <circle cx="882" cy="484" r="11" />
      <circle cx="917" cy="484" r="11" /> */}
    </ContentLoader>
  );
};

TableLoader.metadata = {
  name: "Leo Nguyen",
  github: "leonguyen0202",
  description: "Loader for Tables",
  filename: "TableLoader",
};

export default TableLoader;
