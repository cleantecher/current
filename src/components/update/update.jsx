import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import { signUp } from "../../utilities/contact/contact";
import styled from 'styled-components';
import { Form } from "react-bootstrap";


export default function Update() {
    const navigate=useNavigate()
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [company, setCompany]=useState("");
    const [role, setRole]=useState("");
    const [email, setEmail]=useState("");
    const[ID,setID]=useState(null);

    const sendDataToAPI = () => {
        // address might be wrong. check routes to make sure
        axios.put(`http://localhost:3001/${ID}`, {
            firstName,
            lastName,
            company,
            role,
            email,
        }).then(() => {
            navigate("/read")
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setCompany(localStorage.getItem('company'));
        setRole(localStorage.getItem('role'));
        setEmail(localStorage.getItem('email'));
        setID(localStorage.getItem('ID'))
    }, [])


  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1>Update Contact</h1>
      <hr />

      <form>
        <div className="contact-form">
          <label>First Name</label>
          <input
            name="firstName"
            value={firstName}
            required
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div className="contact-form">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />
        </div>

        <div className="contact-form">
          <label>Company</label>
          <input
            name="company"
            type="text"
            required
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
          />
        </div>
        <div className="contact-form">
          <label>role</label>
          <input
            name="role"
            type="text"
            required
            value={role}
            onChange={(e)=>setRole(e.target.value)}
          />
        </div>
        <div className="contact-form">
          <label>email</label>
          <input
            name="email"
            type="text"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <input type="update" value="Update" className="btn btn-primary" />
          <button
            type="button"
            onClick={sendDataToAPI}
            className="btn btn-secondary"
          >
          </button>
        </div>
      </form>
    </div>
  );
}