import React from "react";
import ContentLoader from "react-content-loader";
import { Row, Col } from "reactstrap";
import random from "../../../utilities/random.js";

const PostLoaderDesktop__ = ({
  width = "100%",
  height = 2000,
  heading = { width: 140, height: 24 },
  row = 1,
  column = 3,
  padding = 12,
  borderRadius = 4,
  ...props
}) => {
  const contenList = [];

  let y = 630;

  for (let index = 0; index < random.randomBetweenInclusive(8, 15); index++) {
    contenList.push(
      <rect
        x="0"
        y={y}
        rx="4"
        ry="4"
        width={random.randomBetweenInclusive(500, 810)}
        height="15"
      />
    );

    y += 30;
  }

  /**
   * More posts loader
   */

  return (
    /**
     * Desktop loader
     */
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 900 ${height}`}
      backgroundColor="#787878"
      foregroundColor="#ffffff"
      {...props}
    >
      {/* Title */}
      <rect x="25%" y="0" rx="4" ry="4" width="50%" height="30" />
      {/* Image */}
      <rect x="0" y="50" rx="4" ry="4" width={width} height="400" />
      {/* Author */}
      <circle cx="40" cy="530" r="40" />
      <rect x="100" y="515" rx="4" ry="4" width="200" height="25" />
      {/* Created At */}
      <rect x="73.5%" y="515" rx="4" ry="4" width="250" height="25" />
      {/* hr tag */}
      <rect x="0" y="470" rx="5" ry="5" width={width} height="10" />
      {/* hr tag */}
      <rect x="0" y="580" rx="5" ry="5" width={width} height="10" />
      {/* Content */}
      {/* {contenList} */}
      <rect x="0" y="630" rx="4" ry="4" width="800" height="15" />
      <rect x="0" y="660" rx="4" ry="4" width="600" height="15" />
      <rect x="0" y="690" rx="4" ry="4" width="520" height="15" />
      <rect x="0" y="750" rx="4" ry="4" width="800" height="15" />
      <rect x="0" y="780" rx="4" ry="4" width="500" height="15" />
      <rect x="0" y="810" rx="4" ry="4" width="720" height="15" />
      <rect x="0" y="840" rx="4" ry="4" width="800" height="15" />
      {/* hr tag */}
      <rect x="0" y="890" rx="5" ry="5" width={width} height="10" />
      {/* <rect x="0" y={y + 30} rx="5" ry="5" width={width} height="10" /> */}
      {/* More Posts Title */}
      <rect x="0" y="920" rx="4" ry="4" width="600" height="50" />

      {/* First post */}
      <circle cx="2.3%" cy="1010" r="20" />
      <rect x="5%" y="1000" rx="4" ry="4" width="200" height="20" />
      <rect x="0%" y="1050" rx="4" ry="4" width="300" height="150" />
      {/* Content of first post */}
      <rect x="0%" y="1210" rx="4" ry="4" width="250" height="25" />
      <rect x="0%" y="1250" rx="4" ry="4" width="250" height="15" />
      <rect x="0%" y="1270" rx="4" ry="4" width="300" height="15" />
      <rect x="0%" y="1290" rx="4" ry="4" width="200" height="15" />
      {/* Second post */}
      <circle cx="37%" cy="1010" r="20" />
      <rect x="40%" y="1000" rx="4" ry="4" width="200" height="20" />
      <rect x="35%" y="1050" rx="4" ry="4" width="300" height="150" />
      {/* Content of second post */}
      <rect x="35%" y="1210" rx="4" ry="4" width="250" height="25" />
      <rect x="35%" y="1250" rx="4" ry="4" width="250" height="15" />
      <rect x="35%" y="1270" rx="4" ry="4" width="300" height="15" />
      <rect x="35%" y="1290" rx="4" ry="4" width="200" height="15" />
      {/* Third post */}
      <circle cx="72%" cy="1010" r="20" />
      <rect x="75%" y="1000" rx="4" ry="4" width="200" height="20" />
      <rect x="70%" y="1050" rx="4" ry="4" width="300" height="150" />
      {/* Content of third post */}
      <rect x="70%" y="1210" rx="4" ry="4" width="250" height="25" />
      <rect x="70%" y="1250" rx="4" ry="4" width="250" height="15" />
      <rect x="70%" y="1270" rx="4" ry="4" width="300" height="15" />
      <rect x="70%" y="1290" rx="4" ry="4" width="200" height="15" />

      {/* <rect x="48" y="684" rx="4" ry="4" width="598" height="15" />
    <rect x="48" y="718" rx="4" ry="4" width="720" height="15" />
    <rect x="49" y="748" rx="4" ry="4" width="419" height="15" /> */}

      {/* <circle cx="713" cy="810" r="9" />
    <circle cx="739" cy="810" r="9" />
    <rect x="41" y="836" rx="4" ry="4" width="720" height="3" />
    <rect x="122" y="880" rx="4" ry="4" width="320" height="11" />
    <circle cx="79" cy="900" r="26" />
    <rect x="135" y="901" rx="4" ry="4" width="120" height="10" />
    <rect x="123" y="949" rx="4" ry="4" width="320" height="11" />
    <circle cx="80" cy="969" r="26" />
    <rect x="136" y="970" rx="4" ry="4" width="120" height="10" />
    <rect x="124" y="1021" rx="4" ry="4" width="320" height="11" />
    <circle cx="81" cy="1041" r="26" />
    <rect x="137" y="1042" rx="4" ry="4" width="120" height="10" />
    <rect x="125" y="1090" rx="4" ry="4" width="320" height="11" />
    <circle cx="82" cy="1110" r="26" />
    <rect x="138" y="1111" rx="4" ry="4" width="120" height="10" /> */}
    </ContentLoader>
  );
};

PostLoaderDesktop__.metadata = {
  name: "Leo Nguyen",
  github: "leonguyen0202",
  description: "Article or News",
  filename: "PostLoaderDesktop__",
};

export default PostLoaderDesktop__;
