import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import { Dashboard, Quiz, Result, Login, Signup } from "./pages";
import NavBar from "./components/ui/NavBar/NavBar";

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>

          <Route path="/quiz" exact>
            <Quiz />
          </Route>

          <Route path="/result" exact>
            <Result />
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
