import React from "react";
import ContentLoader from "react-content-loader";

const GridLoader__ = ({
  width = 1360,
  height = 900,
  heading = { width: 0, height: 0 },
  row = 2,
  column = 2,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  return (
    <ContentLoader
      width={1360}
      height={900}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#787878"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="30" y="20" rx="8" ry="8" width="430" height="200" />
      <rect x="30" y="230" rx="0" ry="0" width="300" height="30" />
      <rect x="30" y="275" rx="0" ry="0" width="430" height="20" />

      <rect x="500" y="20" rx="8" ry="8" width="430" height="200" />
      <rect x="500" y="230" rx="0" ry="0" width="300" height="30" />
      <rect x="500" y="275" rx="0" ry="0" width="430" height="20" />

      <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />

      <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
      <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
      <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
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
