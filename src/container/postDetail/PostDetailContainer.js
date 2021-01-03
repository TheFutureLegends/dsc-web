import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "reactstrap";
import PostLoaderDesktop from "../../components/ContentLoader/Posts/PostLoaderDesktop.js";
import Author from "../../components/Author/Author.js";
import htmlToReactParserUtilities from "../../utilities/htmlToReactParser.js";
import PostCard from "../../components/Card/PostCard.js";
import { isEmptyObject } from "../../utilities/index.js";

const PostDetailContainer__ = ({ ...props }) => {
  let timer;

  const data = props.postDetail;

  const [isLoading, setIsLoading] = useState(true);

  const [count, setCount] = useState(3000);

  const handleReadMore = (slug) => {
    console.log(props);
    // props.getPostDetail(slug);

    // setIsLoading(true);

    setCount(3000);

    // props.history.push(`/post/${slug}`);
  };

  if (!props.loading && count === 3000 && !isEmptyObject(props.postDetail)) {
    timer = setTimeout(() => {
      setCount(0);
    }, 3000);
  }

  if (isLoading && !isEmptyObject(props.postDetail)) {
    props.getMorePostsWithSameCategory(data._id, data.category.slug);

    setIsLoading(false);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [count, isLoading]);
  return (
    <>
      {count === 3000 ? (
        <PostLoaderDesktop></PostLoaderDesktop>
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
                {props.morePostsWithSameCategory.map((post) => (
                  <Col md="4" key={post.slug}>
                    <PostCard
                      post={post}
                      avatar={{ fontSize: "12px", avatarSize: 30 }}
                      handleReadMore={handleReadMore}
                      {...props}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
};

export default PostDetailContainer__;

// export default connect(mapStateToProps, null)(PostDetailContainer__);

// connect(mapStateToProps, null)(PostDetailContainer__)
