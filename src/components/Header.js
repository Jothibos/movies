 import React from "react";
 import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
 import SearchBar from "./SearchBar";
 import { Carousel } from "react-responsive-carousel";
 import "react-responsive-carousel/lib/styles/carousel.min.css";
 import sampleMoviesData from "../data/sampleMoviesData";
 import { useLocation } from "react-router-dom"; // Import useLocation

 const Header = ({ onSearch }) => {
   const location = useLocation(); // Get the current location from react-router-dom
   const isHomePage = location.pathname === "/"; // Check if the current page is the home page

   const sliderImages = sampleMoviesData
     .slice(0, 10)
     .map((movie) => movie.movieDetails.poster);

   return (
     <div className="header">
       <Navbar bg="dark" variant="dark" expand="lg">
         <Container>
           <Navbar.Brand href="/">Movie Search</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbar-nav" />
           <Navbar.Collapse id="navbar-nav">
             <Nav className="ml-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/about">About</Nav.Link>
               <NavDropdown title="Account" id="account-dropdown">
                 <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                 <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                 {/* Add the profile link here */}
                 <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
               </NavDropdown>
               <SearchBar onSearch={onSearch} />
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>

       {isHomePage && (
         <Carousel className="carousel" showThumbs={false} autoPlay={true}>
           {sliderImages.map((image, index) => (
             <div key={index}>
               <img src={image} alt={`Movie ${index + 1}`} />
             </div>
           ))}
         </Carousel>
       )}
     </div>
   );
 };

 export default Header;
