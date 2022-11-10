import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import UserContent from "user/User";
import CustomButton from "./CustomButton";
import Header from "./Header";
import HomeContent from "./HomeContent";

import "./index.scss";

const App = () => (
  <Router>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <CustomButton />
      <br />
      <Link to={"/user"} className="bg-red-400">
        go to UserContent
      </Link>
      <div>
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/user" component={UserContent} />
        </Switch>
      </div>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
