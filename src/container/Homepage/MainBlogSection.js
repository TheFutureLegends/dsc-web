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

const MainBlogSection__ = ({ posts, ...props }) => {
  const handleReadMore = () => {
    console.log(posts);
  };

  return (
    <Row>
      {posts.map((post) => (
        <Col md="6" xs="12" key={post.slug}>
          <Card style={{ width: "100%" }}>
            <CardHeader style={{ marginBottom: "10px" }}>
              <Author
                src={post.author.avatar}
                avatarSize={30}
                fontSize={"15px"}
                author={post.author.username}
                category={post.category.title}
              />
            </CardHeader>
            <CardImg top src={post.image} alt="..." />
            <CardBody>
              <CardTitle tag="h3">{getSubString(post.title, 0, 30)}</CardTitle>
              <CardText>{getSubString(post.description, 0, 95)}</CardText>
              <Button
                color="success"
                className="animation-on-hover"
                onClick={handleReadMore}
              >
                Read More
              </Button>
            </CardBody>
            <CardFooter>
              <hr />
              <Row>
                <Col xs="8">Views: {post.visit}</Col>
                <Col lg="4" md="4" xs="4" className="text-right">
                  {post.createdAt}
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MainBlogSection__;
