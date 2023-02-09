import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/employee');
  }, 2000);

  return (
    <>
      <h2>Contact us:</h2>
      <p>Name: Alex</p>
      <p>Email: admin@gmail.com</p>
      <p>Contact Number: 999999999</p>
      <p>Address: Street 101, USA</p>
    </>
  );
};

export default Contact;

// 1000ms = 1s