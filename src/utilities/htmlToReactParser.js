import React from "react";
import HtmlToReact from "html-to-react";

var htmlToReactParser = HtmlToReact.Parser;

const htmlToReactParserUtilities__ = (rawData) => {
  var parser = new htmlToReactParser();

  return parser.parse(rawData);
};

export default htmlToReactParserUtilities__;
