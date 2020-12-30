import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardText,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import Author from "../../components/Author/Author.js";
import { getSubString } from "../../utilities/index.js";
import PostCard from "../../components/Card/PostCard.js";

const MainBlogSection__ = ({ posts, ...props }) => {
  const handleReadMore = (slug) => {
    props.history.push(`/post/${slug}`);
  };

  return (
    <Row>
      {posts.map((post) => (
        <Col md="6" xs="12" key={post.slug}>
          <PostCard
            post={post}
            avatar={{ fontSize: "15px", avatarSize: 30 }}
            handleReadMore={handleReadMore}
            {...props}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MainBlogSection__;
