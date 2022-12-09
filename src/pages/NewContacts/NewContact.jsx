import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { signUp } from "../../utilities/contact/contact";
import styled from 'styled-components';


export default function NewContact() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // firstName: user.firstName,
    // lastName: user.lastName,
    // email: user.email,
    // company: user.company,
    // role: user.company

    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      
      const user = await signUp(formData);
      console.log(user)
      this.props.setUser(user);
    } catch (error){
      // An error occurred, like a dup email address
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
    console.log(formData)
  }
  function handleCancel() {
    navigate("../App/App");
  }

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1>Create new contact</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form">
          <label>Company</label>
          <input
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form">
          <label>role</label>
          <input
            name="role"
            type="text"
            required
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form">
          <label>email</label>
          <input
            name="email"
            type="text"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
