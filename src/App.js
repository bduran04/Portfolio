import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./Projects";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import { MuiThemeProvider } from '@material-ui/core';
import theme from './themes/theme'
import './App.css';
import About from "./About";

const padding = {
  paddingBottom: 50,
  paddingTop: 30
}


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router basename="/Portfolio">
        <Header />
        <Switch>
          <>
            <Route exact path="/">
              <Intro />
              <div className="colored">
                <div className="section-about-me">
                  <AboutMe />
                </div>
              </div>
              <div className="dark">
                <div className="section-contact-me">
                  <ContactMe />
                </div>
              </div>
            </Route>
            <div className="normal" style={padding}>
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/about" component={About} />
            </div>
          </>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
