import React, { useState } from "react";
import axios from "axios";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      setResponse(res.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="register-form">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default RegisterForm;
