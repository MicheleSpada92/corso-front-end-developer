// components/Job.jsx
import React from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/actions";

const Job = ({ data, addToFavorites, removeFromFavorites, favorites }) => {
  const isFavorite = favorites.includes(data.company_name);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(data.company_name);
    } else {
      addToFavorites(data.company_name);
    }
  };

  console.log("Job - isFavorite:", isFavorite);

  return (
    <Col xs={12} className="my-3">
      <div className="job-container">
        <Link to={`/${data.company_name}`}>
          <h4>{data.title}</h4>
        </Link>
        <p>Company: {data.company_name}</p>
        <p>Category: {data.category}</p>
        <p>Location: {data.city}</p>
        <p>Type: {data.job_type}</p>
        <p>Apply: <a href={data.url} target="_blank" rel="noopener noreferrer">Apply Here</a></p>
        <Button onClick={toggleFavorite} variant={isFavorite ? 'danger' : 'primary'}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </div>
    </Col>
  );
};

const mapStateToPropsJob = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToPropsJob = {
  addToFavorites,
  removeFromFavorites,
};

export default connect(mapStateToPropsJob, mapDispatchToPropsJob)(Job);
