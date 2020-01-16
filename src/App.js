import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header>
          <h1>BendJS</h1>
        </Header>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
