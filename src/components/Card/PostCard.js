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

const PostCard__ = ({ post, avatar, ...props }) => {
  return (
    <Card style={{ width: "100%" }}>
      <CardHeader style={{ marginBottom: "10px" }}>
        <Author
          src={post.author.avatar}
          avatarSize={30}
          fontSize={avatar.fontSize}
          author={post.author.username}
          category={post.category.title}
        />
      </CardHeader>
      <CardImg top src={post.image} alt={post.slug} />
      <CardBody>
        <CardTitle tag="h3" className="font-weight-bold">
          {getSubString(post.title, 0, 25)}
        </CardTitle>
        <CardText>{getSubString(post.description, 0, 70)}</CardText>
        <Button
          color="success"
          className="animation-on-hover mt-4"
          onClick={() => {
            props.handleReadMore(post.slug);
          }}
        >
          Read More
        </Button>
      </CardBody>
      <CardFooter>
        <hr />
        <Row>
          <Col md="6" xs="6">
            Views: {post.visit}
          </Col>
          <Col md="6" xs="6" className="text-right">
            {post.createdAt}
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default PostCard__;
