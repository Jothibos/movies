 import React, { useState } from "react";
 import { Container, Form, Button } from "react-bootstrap";
 import { useNavigate } from "react-router-dom"; // Import useNavigate

 const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate(); // Get the navigate function from react-router-dom

   const handleLogin = (e) => {
     e.preventDefault();

     console.log("Logged in with:", email, password);

     // Redirect to home page
     navigate("/");
   };

   return (
     <Container className="centered-form">
       <h2>Login</h2>
       <Form onSubmit={handleLogin}>
         <Form.Group controlId="email">
           <Form.Label>Email</Form.Label>
           <Form.Control
             type="email"
             placeholder="Enter email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
         </Form.Group>

         <Form.Group controlId="password">
           <Form.Label>Password</Form.Label>
           <Form.Control
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
           />
         </Form.Group>

         <Button variant="primary" type="submit">
           Login
         </Button>
       </Form>
     </Container>
   );
 };

 export default Login;