import React from "react";
import { Row, Col } from "reactstrap";
import PostCard from "../../components/Card/PostCard.js";

const MainBlogSection__ = ({ posts, ...props }) => {
  const handleReadMore = (slug) => {
    props.history.push(`/post/${slug}`);
  };

  return (
    <Row>
      {posts.map((post) => (
        <Col md="4" xs="6" key={post.slug}>
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
