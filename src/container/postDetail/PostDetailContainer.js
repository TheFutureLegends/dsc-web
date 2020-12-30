import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import ContentLoader from "../../components/ContentLoader/ContentLoader.js";
import Author from "../../components/Author/Author.js";
import htmlToReactParserUtilities from "../../utilities/htmlToReactParser.js";
import PostCard from "../../components/Card/PostCard.js";
import { isEmptyObject } from "../../utilities/index.js";

const PostDetailContainer__ = ({ ...props }) => {
  let timer;

  const data = props.postDetail;

  const [count, setCount] = useState(3000);

  const handleReadMore = (slug) => {
    // props.history.push(`/post/${slug}`);
    console.log(props);
  };

  if (!props.loading && count === 3000 && isEmptyObject(props.postDetail)) {
    timer = setTimeout(() => {
      setCount(0);

      props.getMorePostsWithSameCategory(data.category.slug);

      console.log(props.morePostsWithSameCategory);
    }, 3000);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <>
      {count === 3000 ? (
        <ContentLoader></ContentLoader>
      ) : (
        <>
          {isEmptyObject(data) ? (
            <Redirect to="/" />
          ) : (
            <>
              <Row className="justify-content-center text-center">
                <h1>{data.title}</h1>
              </Row>
              <Row>
                <Col md="12">
                  <img src={data.image} alt={data.slug} width="100%" />
                </Col>
              </Row>
              <hr
                style={{ height: "5px", background: "#cbbcb1", border: "none" }}
              />
              <Row>
                <Col md="8">
                  <Author
                    src={data.author.avatar}
                    avatarSize={50}
                    fontSize={"15px"}
                    author={data.author.username}
                    category={data.category.title}
                  />
                </Col>
                <Col md="4" className="d-none d-md-block text-right mt-3">
                  <span style={{ fontSize: "15px" }}>
                    Published At: {data.createdAt}
                  </span>
                </Col>
              </Row>
              <hr
                style={{ height: "5px", background: "#cbbcb1", border: "none" }}
              />
              <Row>
                <Col md="12">
                  {htmlToReactParserUtilities(data.description)}
                </Col>
              </Row>
              <hr
                style={{ height: "5px", background: "#cbbcb1", border: "none" }}
              />
              <Row>
                <Col md="12">
                  <h1 className="d-block mx-auto mx-md-0">
                    More Posts From {data.category.title}
                  </h1>
                </Col>
                <Col md="4">
                  <PostCard
                    post={props.postDetail}
                    avatar={{ fontSize: "13px", avatarSize: 20 }}
                    handleReadMore={handleReadMore}
                    {...props}
                  />
                </Col>
                <Col md="4">
                  <PostCard
                    post={props.postDetail}
                    avatar={{ fontSize: "13px", avatarSize: 20 }}
                    handleReadMore={handleReadMore}
                    {...props}
                  />
                </Col>
                <Col md="4">
                  <PostCard
                    post={props.postDetail}
                    avatar={{ fontSize: "13px", avatarSize: 20 }}
                    handleReadMore={handleReadMore}
                    {...props}
                  />
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.post.loading,
  postDetail: state.post.postDetail,
});

export default PostDetailContainer__;

// export default connect(mapStateToProps, null)(PostDetailContainer__);

// connect(mapStateToProps, null)(PostDetailContainer__)
