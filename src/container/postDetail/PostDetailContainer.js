import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import ContentLoader from "../../components/ContentLoader/ContentLoader.js";
import Author from "../../components/Author/Author.js";
import { isEmptyObject } from "../../utilities/index.js";

const PostDetailContainer__ = ({ ...props }) => {
  const [count, setCount] = useState(3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(0);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <>
      {count == 3000 ? (
        <ContentLoader></ContentLoader>
      ) : (
        <>
          <Row className="justify-content-center">
            <h1>{props.postDetail.title}</h1>
          </Row>
          <Row>
            <img
              src={props.postDetail.image}
              alt={props.postDetail.slug}
              width="100%"
              height="500px"
            />
          </Row>
          <hr />
          <Row>
            <Col md="8">
              <Author
                src={props.postDetail.author.avatar}
                avatarSize={50}
                fontSize={"20px"}
                author={props.postDetail.author.username}
                category={props.postDetail.category.title}
              />
            </Col>
            <Col md="4">
              <span style={{ fontSize: "20px" }}>
                {props.postDetail.createdAt}
              </span>
            </Col>
          </Row>
        </>
      )}
    </>
    // <ContentLoader></ContentLoader>
    // <>
    //   {isEmptyObject(props.postDetail) ? (
    //     <ContentLoader></ContentLoader>
    //   ) : (
    //     <>
    //       <Row>
    //         <h1>{props.postDetail.title}</h1>
    //       </Row>
    //       <Row>
    //         <img
    //           src={props.postDetail.image}
    //           alt={props.postDetail.slug}
    //           width="100%"
    //         />
    //       </Row>
    //       <hr />
    //       <Row>
    //         <Col md="6">
    //           <Author
    //             src={props.postDetail.author.avatar}
    //             avatarSize={30}
    //             fontSize={"15px"}
    //             author={props.postDetail.author.username}
    //             category={props.postDetail.category.title}
    //           />
    //         </Col>
    //       </Row>
    //     </>
    //   )}
    // </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.post.loading,
  postDetail: state.post.postDetail,
});

export default connect(mapStateToProps, null)(PostDetailContainer__);

// connect(mapStateToProps, null)(PostDetailContainer__)
