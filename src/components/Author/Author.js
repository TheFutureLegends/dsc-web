import React from "react";
// import {Row, Col} from "reactstrap";
import Avatar from "react-avatar";
import { capitalizeFirstLetter } from "../../utilities/index.js";

const Author__ = (props) => {
  return (
    <>
      <Avatar src={props.src} size={props.avatarSize} round={true} />
      <span style={{ fontSize: `${props.fontSize}` }}>
        &nbsp;&nbsp;{capitalizeFirstLetter(props.author)} in {props.category}
      </span>
    </>
  );
};

export default Author__;
