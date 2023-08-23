 import React from "react";
 import { Container, Row, Col } from "react-bootstrap";
 import MovieCard from "./MovieCard";
 import sampleMoviesData from "../data/sampleMoviesData";

 const MovieList = ({ movies }) => {
   return (
     <Container className="mt-4">
       <Row>
         {movies.map((movie) => (
           <Col key={movie.Id} xs={12} sm={6} md={4} lg={3} className="mb-4">
             <MovieCard movie={movie} />
           </Col>
         ))}
       </Row>
     </Container>
   );
 };

 export default MovieList;
