 import React from "react";
 import { Card } from "react-bootstrap";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
 import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

 const MovieCard = ({ movie }) => {
   const { name, genre, poster, duration, rating } = movie.movieDetails;

   const renderStars = () => {
     const fullStars = Math.floor(rating);
     const halfStar = rating - fullStars >= 0.5;

     const starIcons = [];
     for (let i = 1; i <= 5; i++) {
       if (i <= fullStars) {
         starIcons.push(<FontAwesomeIcon key={i} icon={faStar} color="gold" />);
       } else if (i === fullStars + 1 && halfStar) {
         starIcons.push(
           <FontAwesomeIcon key={i} icon={faStarHalf} color="gold" />
         );
       } else {
         starIcons.push(
           <FontAwesomeIcon key={i} icon={faStarRegular} color="gold" />
         );
       }
     }

     return starIcons;
   };

   return (
     <Card className="movie-card">
       <Card.Img variant="top" src={poster} alt={`${name} Poster`} />
       <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text>Genre: {genre.join(", ")}</Card.Text>
         <Card.Text>Duration: {duration} mins</Card.Text>
         <Card.Text>
           Rating: {renderStars()} ({rating.toFixed(1)})
         </Card.Text>
       </Card.Body>
     </Card>
   );
 };

 export default MovieCard;
