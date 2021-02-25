import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/articles/:name" component={ArticlePage} />
            <Route path="/articles" component={ArticlesList} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
