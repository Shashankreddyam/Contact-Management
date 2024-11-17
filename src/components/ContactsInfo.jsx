// src/components/ExampleForm.js
import React, { useState } from "react";
import axios from "axios";
import { Button, Stack, TextField } from "@mui/material";

const ContactsInfo = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    jobtitle: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/contacts", formData)
      .then((response) => {
        setResponseMessage("Form submitted successfully!");
      })
      .catch((err) => {
        setResponseMessage("Error: " + err.message);
      });
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} action=".">
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            name="firstname"
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={handleChange}
            fullWidth
            required
            value={formData.firstname}
          />
          <TextField
            name="lastname"
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={handleChange}
            fullWidth
            required
            value={formData.lastname}
          />
        </Stack>
        <TextField
          name="email"
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={handleChange}
          fullWidth
          required
          value={formData.email}
          sx={{ mb: 4 }}
        />
        <TextField
          name="phone"
          type="number"
          variant="outlined"
          color="secondary"
          label="Phone No"
          onChange={handleChange}
          required
          fullWidth
          min={10}
          max={10}
          value={formData.phone}
          sx={{ mb: 4 }}
        />
        <TextField
          name="company"
          type="text"
          variant="outlined"
          color="secondary"
          label="Company"
          onChange={handleChange}
          fullWidth
          required
          value={formData.company}
          sx={{ mb: 4 }}
        />
        <TextField
          name="jobtitle"
          type="text"
          variant="outlined"
          color="secondary"
          label="Job Title"
          onChange={handleChange}
          fullWidth
          required
          value={formData.jobtitle}
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Submit
        </Button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ContactsInfo;
