"use client";
import { useState } from 'react';
import styles from "./contact.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    doctor: '',
    message: '',
    callbackDate: '',
    callbackTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here or send to an API
    console.log(formData);
    alert('Form submitted. Thank you!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First + Last Name (Required):
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email (Required):
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Phone Number (Required):
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </label>
      <label>
        Select a Doctor (Required):
        <select name="doctor" value={formData.doctor} onChange={handleChange} required>
          <option value="">Select a Doctor</option>
          <option value="Dr. Ramon Bana">Dr. Ramon Bana</option>
          <option value="Dr. Andrew Brattain">Dr. Andrew Brattain</option>
          <option value="Dr. Michael Apa">Dr. Michael Apa</option>
        </select>
      </label>
      <label>
        Message (Required):
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <label>
        Request a Call Back (Required):
        <fieldset>
          <label>
            Date:
            <input type="date" name="callbackDate" value={formData.callbackDate} onChange={handleChange} required />
          </label>
          <label>
            Time:
            <input type="time" name="callbackTime" value={formData.callbackTime} onChange={handleChange} required />
          </label>
        </fieldset>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;