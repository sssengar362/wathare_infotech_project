import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";

import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Header from "./components/Header";
import PieChart from "./PieChart";

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            <Col md={2}>
              <Menus />
            </Col>
            <Col md={10}>
              <Routes>
                <Route path="/" Component={Home} exact />

                <Route path="/about" Component={About} exact />
                <Route path="/contact-us" Component={Contactus} exact />
                <Route path="/Chart" Component={PieChart} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
};

export default App;
