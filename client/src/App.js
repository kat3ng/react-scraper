import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved"

import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {

  return (
    <Router>
      <div>

        <Wrapper>
          <Route exact path="/" component={Search} />

          <Route exact path="/saved" component={Saved} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
