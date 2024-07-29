"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactFormComponent.module.scss';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  doctor: string;
  message: string;
  callbackDate: string;
  callbackTime: string;
  services: string[];
}

const ContactFormComponent = () => {
  const [formData, setFormData] = useState<FormData>({
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
    <div className={styles.contactForm}>
      <h2 className={styles.formTitle}>HOW CAN WE HELP YOU</h2>
      <div className={styles.servicesContainer}>
        <h3>Select Services</h3>
        <div className={styles.servicesList}>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Dental Implants") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Dental Implants")}
          >
            Dental Implants
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Teeth Whitening") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Teeth Whitening")}
          >
            Teeth Whitening
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Veneers") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Veneers")}
          >
            Veneers
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Teeth Cleaning") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Teeth Cleaning")}
          >
            Teeth Cleaning
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Oral Exams") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Oral Exams")}
          >
            Oral Exams
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("X-Rays") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("X-Rays")}
          >
            X-Rays
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Fillings") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Fillings")}
          >
            Fillings
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Crowns") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Crowns")}
          >
            Crowns
          </button>
          <button
            type="button"
            className={`${styles.serviceButton} ${formData.services.includes("Bridges") ? styles.selected : ''}`}
            onClick={() => handleServiceToggle("Bridges")}
          >
            Bridges
          </button>
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
        {success && <p className={styles.success}>Your message has been sent successfully!</p>}
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default ContactFormComponent;
