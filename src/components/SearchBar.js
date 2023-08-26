  import React, { useState } from "react";
 import { FormControl, Button } from "react-bootstrap";

 const SearchBar = ({ onSearch }) => {
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = () => {
     onSearch(searchTerm);
   };

   return (
     <div className="search-bar-container">
       <FormControl
         type="text"
         placeholder="Search for movies..."
         className="search-input"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
       <Button variant="outline-primary" onClick={handleSearch}>
         Search
       </Button>
     </div>
   );
 };

 export default SearchBar;