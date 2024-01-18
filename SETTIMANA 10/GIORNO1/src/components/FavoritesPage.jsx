// components/FavoritesPage.jsx
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { fetchCompanyJobs, setJobs } from "../store/actions";

const FavoritesPage = ({ favorites, fetchCompanyJobs, setJobs }) => {
  useEffect(() => {
    // Aggiorna i jobs quando la pagina dei preferiti viene montata
    const fetchData = async () => {
      const jobs = await Promise.all(
        favorites.map(async (companyName) => {
          const response = await fetchCompanyJobs(companyName);
          return response.data;
        })
      );
      setJobs(jobs);
    };

    fetchData();
  }, [favorites, fetchCompanyJobs, setJobs]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favorite Companies</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favorites.length > 0 ? (
            // Visualizza l'elenco dei preferiti
            favorites.map((companyName) => (
              <div key={companyName}>{companyName}</div>
            ))
          ) : (
            <p>Nessuna azienda nei preferiti</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = {
  fetchCompanyJobs,
  setJobs,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
