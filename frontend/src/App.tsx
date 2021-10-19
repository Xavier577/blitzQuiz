import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("./pages/Auth/Login"));
const Signup = React.lazy(() => import("./pages/Auth/Signup"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Result = React.lazy(() => import("./pages/Result/Result"));

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/result" exact>
            Result
          </Route>
          <Route exact path="/auth">
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
