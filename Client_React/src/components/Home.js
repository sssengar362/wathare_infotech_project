import { useEffect } from "react";
import React from "react";
import { jumbotron, Container, Button } from "reactstrap";
const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <jumbotron className="text-center">
        <h1>Welcome to Chart App</h1>
        <p>
          This application is for displaying a LineChart and connecting it to a
          backend Node.js server.
        </p>
        <Container>
          <Button color="primary" outline>
            Let's Start
          </Button>
        </Container>
      </jumbotron>
    </div>
  );
};
export default Home;
