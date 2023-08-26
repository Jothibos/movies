 import React from "react";
 import { Container, Row, Col, Image } from "react-bootstrap";

 const Profile = () => {
   // Dummy user data for testing
   const dummyUser = {
     firstName: "Jothi boss",
     lastName: "M",
     email: "jothibos14@gmail.com",
     profilePhoto: "/images/profile.jpg",
   };

   return (
     <Container className="profile">
       <h2>Your Profile</h2>
       <Row>
         <Col md={4}>
           {dummyUser.profilePhoto && (
             <div className="profile-photo">
               <Image src={dummyUser.profilePhoto} alt="Profile" fluid />
             </div>
           )}
         </Col>
         <Col md={8}>
           <p>
             <strong>Name:</strong> {dummyUser.firstName} {dummyUser.lastName}
           </p>
           <p>
             <strong>Email:</strong> {dummyUser.email}
           </p>
         </Col>
       </Row>
     </Container>
   );
 };

 export default Profile;
