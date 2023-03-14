import React from "react";
import { Jumbotron, Button} from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>Image Gallery</h1>
      <p>
        This is a simple application using Unplash API. Please enter the searching key words for retrieving images.
      </p>
      <p>
        <Button bsStyle="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
