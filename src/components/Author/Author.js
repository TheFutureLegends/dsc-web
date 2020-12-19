import React from "react";
import Avatar from "react-avatar";

const Author__ = (props) => {
  return (
    <>
      <Avatar src={props.src} size={props.size} round={true} />
      &nbsp;&nbsp;{props.author} in {props.category}
    </>
  );
};

export default Author__;
