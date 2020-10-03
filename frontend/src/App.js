import React from "react";

//todo importa reactBoostrap
import { Container } from "react-bootstrap";

//*components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main ClassName='py-3'>
        <Container>
          <h1>proshop MERN</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
