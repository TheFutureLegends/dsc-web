import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "reactstrap";
import Swal from "sweetalert2";

const PostListAction__ = ({ ...props }) => {
  const [alert, setAlert] = useState(null);
  /**
   * De-construct neccessary data and function from props
   */
  const { data, history } = props;

  const hideAlert = () => {
    setAlert(null);
  };

  const handleEdit = (id) => {
    props.getPostForEditing(id, history);
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Do you want to delete this post?",
      showCancelButton: true,
      confirmButtonText: `Yes, I do`,
      cancelButtonText: `No, I don't`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        console.log(item);
      } else if (result.isDismissed) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="actions-right">
      {/* use this button to add a edit kind of action */}
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleEdit(data._id);
        }}
        color="info"
        size="sm"
        className={classNames("btn-icon btn-link like")}
      >
        <i className="tim-icons icon-pencil" />
      </Button>{" "}
      {/* use this button to remove the data row */}
      <Button
        onClick={(e) => {
          e.preventDefault();

          handleDelete(data);
        }}
        // onClick={() => {
        // console.log(props);
        //     var newdata = data;
        //     newdata.find((o, i) => {
        //       if (o.id === key) {
        //         // here you should add some custom code so you can delete the data
        //         // from this component and from your server as well
        //         data.splice(i, 1);
        //         console.log(data);
        //         return true;
        //       }
        //       return false;
        //     });
        //     setDataRows(newdata);
        // }}
        color="danger"
        size="sm"
        className={classNames("btn-icon btn-link like")}
      >
        <i className="tim-icons icon-simple-remove" />
      </Button>{" "}
    </div>
  );
};

export default PostListAction__;
