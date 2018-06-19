import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import ResultList from "./pages/Search/ResultList";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/articles" component={Saved} />
        <Route exact path="/results" component={ResultList} />
        <Route component={Search} />
      </Switch>
    </div>
  </Router>
);

export default App;
