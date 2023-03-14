import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Search = ({ handleSearch, word, setWord }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col xs={9}>
                <Form.Control
                  type="text"
                  value={word}
                  onChange={(event) => setWord(event.target.value)}
                  placeholder="Search for new images... "
                />
              </Col>
              <Col>
                <Button variant="success" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
