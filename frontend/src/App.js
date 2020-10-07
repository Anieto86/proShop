import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"

//todo importa reactBoostrap
import { Container } from "react-bootstrap";

//*components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/ProductScreen/:id" component={ProductScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
