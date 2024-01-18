import React from "react";
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import Job from "./Job";
import { connect } from "react-redux";
import { setJobs, addToFavorites, removeFromFavorites } from "../store/actions";
import { Link } from "react-router-dom";

const MainSearch = ({ jobs, setJobs, addToFavorites, removeFromFavorites, favorites }) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setJobs([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + e.target.elements.search.value + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Remote Jobs Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Form onSubmit={handleSubmit} inline={true.toString()}>
            <Form.Control type="search" name="search" placeholder="type and press Enter" onChange={handleChange} />
            </Form>
          </Navbar>
        </Col>
        <Col xs={12} className="my-3">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favorites={favorites} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  favorites: state.favorites,
});

const mapDispatchToProps = {
  setJobs,
  addToFavorites,
  removeFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
