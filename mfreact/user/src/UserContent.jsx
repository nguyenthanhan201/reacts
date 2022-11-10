import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const UserContent = () => {
  // const history = useHistory();
  // const location = useLocation();

  const handleClick = () => {
    // history.push("/");
    location.pathname = "/";
    window.location.reload();
  };

  return (
    <Router>
      <Link
        to={"/"}
        className="bg-red-500"
        // onClick={() => {
        //   window.location.reload();
        // }}
      >
        go to Home
      </Link>
      {/* <button onClick={handleClick}>go to home</button> */}
      <br />
      UserContent: thanh an
    </Router>
  );
};

export default UserContent;
