 import React from "react";
 import { useState } from "react";
 import { NavLink } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
 import Button from "react-bootstrap/Button";
 import Form from "react-bootstrap/Form";
 import NavBar from "./NavBar";
 
 function Register() {
   const navigate = useNavigate();
 
   const nameRegex = /^[A-Za-z]+$/;
   const emailRegex = /^[0-9a-zA-Z._-]+@[0-9a-zA-Z._-]+\.[(0-9a-zA-Z._)]+$/;
   const passwordRegex = /^.{8,}$/;
 
   const [errorMessage, setErrorMessage] = useState("");
 
   const [data, setData] = useState({
     firstName: "",
     lastName: "",
     email: "",
     password: "",
   });
 
   const handleChange = ({ target: { name, value } }) => {
     setData((prev) => ({ ...prev, [name]: value }));
   };
 
   const handleSubmit = async (e) => {
     
   };
 
   return (
       <div>
           <NavBar />
       
     <Form onSubmit={handleSubmit}>
       <div className="outer">
         <div className="inner">
           <h3>Register</h3>
           <br />
           <div className="form-group">
             <input
               type="text"
               className="form-control inside-textbox form-field-color"
               placeholder="First name"
               name="firstName"
               value={data.firstName}
               onChange={handleChange}
             />
           </div>
           <br />
           <div className="form-group">
             <input
               type="text"
               className="form-control inside-textbox form-field-color"
               placeholder="Last name"
               name="lastName"
               value={data.lastName}
               onChange={handleChange}
             />
           </div>
           <br />
           <div className="form-group">
             <input
               type="email"
               className="form-control inside-textbox form-field-color"
               placeholder="Enter email"
               name="email"
               value={data.email}
               onChange={handleChange}
             />
           </div>
           <br />
           <div className="form-group">
             <input
               type="password"
               className="form-control inside-textbox form-field-color"
               placeholder="Enter password"
               name="password"
               value={data.password}
               onChange={handleChange}
             />
           </div>
           <br />
           {errorMessage.length > 0 ? (
             <p className="button-center" style={{ color: "red" }}>
               {errorMessage}
             </p>
           ) : null}
           <div className="button-center">
             <Button variant="primary" type="submit">
               Register
             </Button>
           </div>
           <div>
             <hr className="simple-line" />
           </div>
           <div className="button-center forgot-password text-right">
             <p className="forgot-password text-right">
               Already registered ? <NavLink to="/login">log in</NavLink>
             </p>
           </div>
         </div>
       </div>
     </Form>
     </div>
   );
 }
 
 export default Register;
 