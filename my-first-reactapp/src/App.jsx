import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextArea from "./components/TextArea";
import React, { useState } from "react";

function App() {
  // functions to change the theme of the web
  const [mode, setMode] = useState(false);
  const toogleMode = () => {
    if (mode) setMode(false);
    else setMode(true);
  };
  // ----------------------------------------
  return (
    <Router>
      <Navbar mode={mode} toogleMode={toogleMode}></Navbar>
      <Switch>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/">
          <TextArea></TextArea>
        </Route>
      </Switch>
      {/* <>
      <TextArea></TextArea>
    </> */}
    </Router>
  );
}

export default App;
