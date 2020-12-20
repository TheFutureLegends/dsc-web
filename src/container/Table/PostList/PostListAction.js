import React from "react";
import classNames from "classnames";
import { Button } from "reactstrap";

const PostListAction__ = ({ ...props }) => {
  return (
    <div className="actions-right">
      {/* use this button to add a edit kind of action */}
      <Button
        //   onClick={() => {
        //     let obj = dataRows.find((o) => o.id === key);
        //     alert(
        //       "You've clicked EDIT button on \n{ \nName: " +
        //         obj.name +
        //         ", \nposition: " +
        //         obj.position +
        //         ", \noffice: " +
        //         obj.office +
        //         ", \nage: " +
        //         obj.age +
        //         "\n}."
        //     );
        //   }}
        color="info"
        size="sm"
        className={classNames("btn-icon btn-link like")}
      >
        <i className="tim-icons icon-pencil" />
      </Button>{" "}
      {/* use this button to remove the data row */}
      <Button
        //   onClick={() => {
        //     console.log(props);
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
        //   }}
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
