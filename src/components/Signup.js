 import React, { useState } from "react";
 import { Container, Form, Button } from "react-bootstrap";
 import { Link, useNavigate } from "react-router-dom";
 import { createUserWithEmailAndPassword } from "firebase/auth";
 import { collection, addDoc } from "firebase/firestore";
 import { auth, firestore } from "../firebase"; // Import auth and firestore from your firebase.js file

 const Signup = () => {
   const navigate = useNavigate();

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSignup = async (e) => {
     e.preventDefault();

     try {
       // Create user with email and password using Firebase Authentication
       await createUserWithEmailAndPassword(auth, email, password);

       // Save user details to Firestore
       const userRef = collection(firestore, "users");
       await addDoc(userRef, {
         firstName,
         lastName,
         email,
       });

       console.log("Signed up with:", firstName, lastName, email);

       window.alert("Signup successful! You can now log in.");
       navigate("/login");
     } catch (error) {
       console.error("Error signing up:", error);
       // Handle error scenario
     }
   };

   return (
     <Container className="centered-form">
       <h2>Signup</h2>
       <Form onSubmit={handleSignup}>
         <Form.Group controlId="firstName">
           <Form.Label>First Name</Form.Label>
           <Form.Control
             type="text"
             placeholder="Enter first name"
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
             required
           />
         </Form.Group>

         <Form.Group controlId="lastName">
           <Form.Label>Last Name</Form.Label>
           <Form.Control
             type="text"
             placeholder="Enter last name"
             value={lastName}
             onChange={(e) => setLastName(e.target.value)}
             required
           />
         </Form.Group>

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
           Signup
         </Button>
       </Form>
       <p className="mt-2">
         Already have an account? <Link to="/login">Login</Link>
       </p>
     </Container>
   );
 };

 export default Signup;
