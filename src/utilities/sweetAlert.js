const basicAlert = () => {
  setAlert(
    <ReactBSAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="Here's a message!"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
    />
  );
};
const titleAndTextAlert = () => {
  setAlert(
    <ReactBSAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="Here's a message!"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
    >
      It's pretty, isn't it?
    </ReactBSAlert>
  );
};
const successAlert = () => {
  setAlert(
    <ReactBSAlert
      success
      style={{ display: "block", marginTop: "-100px" }}
      title="Good job!"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
    >
      You clicked the button!
    </ReactBSAlert>
  );
};
const htmlAlert = () => {
  setAlert(
    <ReactBSAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="HTML example"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
    >
      You can use <b>bold</b> text,{" "}
      <a href="https://www.creative-tim.com/">links</a> and other HTML tags
    </ReactBSAlert>
  );
};
const warningWithConfirmMessage = () => {
  setAlert(
    <ReactBSAlert
      warning
      style={{ display: "block", marginTop: "-100px" }}
      title="Are you sure?"
      onConfirm={() => successDelete()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      cancelBtnBsStyle="danger"
      confirmBtnText="Yes, delete it!"
      cancelBtnText="Cancel"
      showCancel
      btnSize=""
    >
      You will not be able to recover this imaginary file!
    </ReactBSAlert>
  );
};
const warningWithConfirmAndCancelMessage = () => {
  setAlert(
    <ReactBSAlert
      warning
      style={{ display: "block", marginTop: "-100px" }}
      title="Are you sure?"
      onConfirm={() => successDelete()}
      onCancel={() => cancelDetele()}
      confirmBtnBsStyle="success"
      cancelBtnBsStyle="danger"
      confirmBtnText="Yes, delete it!"
      cancelBtnText="Cancel"
      showCancel
      btnSize=""
    >
      You will not be able to recover this imaginary file!
    </ReactBSAlert>
  );
};
const autoCloseAlert = () => {
  setAlert(
    <ReactBSAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="Auto close alert!"
      onConfirm={() => hideAlert()}
      showConfirm={false}
      timer={2000}
    >
      I will close in 2 seconds.
    </ReactBSAlert>
  );
  setTimeout(() => {
    setAlert(null);
  }, 2000);
};
const inputAlert = () => {
  setAlert(
    <ReactBSAlert
      input
      showCancel
      style={{ display: "block", marginTop: "-100px" }}
      title="Input something"
      onConfirm={(e) => inputConfirmAlert(e)}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      cancelBtnBsStyle="danger"
      btnSize=""
    />
  );
};
const inputConfirmAlert = (e) => {
  setAlert(
    <ReactBSAlert
      success
      style={{ display: "block", marginTop: "-100px" }}
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
      title="You entered: "
    >
      <b>{e}</b>
    </ReactBSAlert>
  );
};
const successDelete = () => {
  setAlert(
    <ReactBSAlert
      success
      style={{ display: "block", marginTop: "-100px" }}
      title="Deleted!"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
    >
      Your imaginary file has been deleted.
    </ReactBSAlert>
  );
};
const cancelDetele = () => {
  setAlert(
    <ReactBSAlert
      danger
      style={{ display: "block", marginTop: "-100px" }}
      title="Cancelled"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnBsStyle="success"
      btnSize=""
    >
      Your imaginary file is safe :)
    </ReactBSAlert>
  );
};
const hideAlert = () => {
  setAlert(null);
};
