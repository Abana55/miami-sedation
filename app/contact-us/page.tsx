"use client";
import { useState } from "react";
import styles from "./contact.module.scss";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
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
        console.log(formData); // Logging form data to the console
        // Here, you would normally handle form submission to your backend
      };
    
      return (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            First + Last Name (Required):
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Email (Required):
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Phone Number (Required):
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Message (Required):
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
  );
}

export default ContactForm;
