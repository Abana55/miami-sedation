"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './contact.module.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    doctor: "",
    message: "",
    callbackDate: "",
    callbackTime: "",
    services: [],
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    "Dental Implants",
    "Teeth Whitening",
    "Veneers",
    "Teeth Cleaning",
    "Oral Exams",
    "X-Rays",
    "Fillings",
    "Crowns",
    "Bridges"
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prevState) => {
      const services = prevState.services.includes(service)
        ? prevState.services.filter(s => s !== service)
        : [...prevState.services, service];
      return { ...prevState, services };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('../pages/api/sendEmail.js', {
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
          services: [],
        });
      } else {
        setError('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error sending message. Please try again later.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.infoSection}>
        <h2 className={styles.headerText}>We're so glad you're here!</h2>
        {/* Placeholder for social media links */}
        <div className={styles.socialMediaLinks}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </section>
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>HOW CAN WE HELP YOU</h2>
          <div className={styles.servicesContainer}>
            <h3>Select Services</h3>
            <div className={styles.servicesList}>
              {servicesList.map(service => (
                <button
                  type="button"
                  key={service}
                  className={`${styles.serviceButton} ${formData.services.includes(service) ? styles.selected : ''}`}
                  onClick={() => handleServiceToggle(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
              />
              <label className={styles.label}>First + Last Name (Required)</label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
              />
              <label className={styles.label}>Email (Required)</label>
            </div>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder=" "
              />
              <label className={styles.label}>Phone Number (Required)</label>
            </div>
            <div className={styles.inputGroup}>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="" disabled>Select a Doctor for your Exam</option>
                <option value="Dr. Ramon Bana">Dr. Ramon Bana</option>
                <option value="Dr. Andrew Brattain">Dr. Andrew Brattain</option>
              </select>
              <label className={styles.label}>Select a Doctor (Required)</label>
            </div>
            <div className={styles.inputGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textarea}
                placeholder=" "
              />
              <label className={styles.label}>Message (Required)</label>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Request a Call Back (Required)</label>
              <fieldset className={styles.fieldset}>
                <div className={styles.inputGroup}>
                  <input
                    type="date"
                    name="callbackDate"
                    value={formData.callbackDate}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Date</label>
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="time"
                    name="callbackTime"
                    value={formData.callbackTime}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                  <label className={styles.label}>Time</label>
                </div>
              </fieldset>
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
          {success && <p>Your message has been sent successfully!</p>}
          {error && <p>{error}</p>}
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
