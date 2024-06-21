"use client";
import { useState } from "react";
import styles from "./contact.module.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    doctor: "",
    message: "",
    callbackDate: "",
    callbackTime: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          doctor: "",
          message: "",
          callbackDate: "",
          callbackTime: "",
        });
      } else {
        setError('Error sending message. Please try again later.');
      }
    } catch (error) {
      setError('Error sending message. Please try again later.');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.contactInfo}>
          <p>Miami Location</p>
          <p>Ramon Bana, DDS</p>
          <p>2461 Coral Way, Suite 100</p>
          <p>Miami, FL 33145</p>
          <p>(786) 625-5550</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label>
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
          <label>
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
          <label>
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
          <label>
            Select a Doctor (Required):
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Select a Doctor for your Exam</option>
              <option value="Dr. Ramon Bana">Dr. Ramon Bana</option>
              <option value="Dr. Andrew Brattain">Dr. Andrew Brattain</option>
            </select>
          </label>
          <label>
            Message (Required):
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </label>
          <label>
            Request a Call Back (Required):
            <fieldset className={styles.fieldset}>
              <label>
                Date:
                <input
                  type="date"
                  name="callbackDate"
                  value={formData.callbackDate}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
            </fieldset>
          </label>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
        {success && <p>Your message has been sent successfully!</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default ContactForm;