import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
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
    </Fragment>
  );
};

export default App;
