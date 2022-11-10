import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { showAlert } from "home/utils";
import "./index.scss";
import UserContent from "./UserContent";
const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {show && (
        <Suspense fallback={<div>Wait ...</div>}>
          <Header />
        </Suspense>
      )}
      <UserContent />
      {/* <CustomButton />
    <div>Name: user</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div> */}
      <button
        onClick={() => {
          setShow(!show);
          showAlert;
        }}
      >
        Click me
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
