import React from "react";
import ContentLoader from "react-content-loader";

const ArticleLoader = (props) => (
  <ContentLoader
    width="100%"
    height={1500}
    viewBox="0 0 850 1500"
    backgroundColor="#eaeced"
    foregroundColor="#ffffff"
    {...props}
  >
    {/* Title */}
    <rect x="120" y="0" rx="4" ry="4" width="600" height="30" />
    {/* Image */}
    <rect x="0" y="50" rx="4" ry="4" width="1200" height="400" />
    {/* Author */}
    <circle cx="40" cy="530" r="40" />
    <rect x="100" y="515" rx="4" ry="4" width="200" height="25" />
    {/* Created At */}
    <rect x="600" y="515" rx="4" ry="4" width="250" height="25" />
    {/* hr tag */}
    <rect x="0" y="470" rx="5" ry="5" width="1200" height="10" />
    {/* hr tag */}
    <rect x="0" y="580" rx="5" ry="5" width="1200" height="10" />
    {/* Content */}
    <rect x="0" y="630" rx="4" ry="4" width="800" height="15" />
    <rect x="0" y="660" rx="4" ry="4" width="600" height="15" />
    <rect x="0" y="690" rx="4" ry="4" width="520" height="15" />
    <rect x="0" y="7290" rx="4" ry="4" width="720" height="15" />
    <rect x="0" y="750" rx="4" ry="4" width="800" height="15" />
    <rect x="0" y="780" rx="4" ry="4" width="500" height="15" />
    <rect x="0" y="810" rx="4" ry="4" width="720" height="15" />
    <rect x="0" y="840" rx="4" ry="4" width="800" height="15" />
    {/* hr tag */}
    <rect x="0" y="890" rx="5" ry="5" width="1200" height="10" />
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

ArticleLoader.metadata = {
  name: "Leo Nguyen",
  github: "leonguyen0202",
  description: "Article or News",
  filename: "ArticleLoader",
};

export default ArticleLoader;
