import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
            <h1>Home</h1>
          </Route>
          <Route path="/about" exact>
            <h1>About</h1>
          </Route>
        </Switch>
      </Router>

      <style>
        {`
    a {
      margin: 10px;
    }
        `}
      </style>
    </div>
  );
};

export default App;
