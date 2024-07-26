"use client"

import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
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
    <div className={styles['contact-form']}>
      <div className={styles['contact-form__info']}>
        <h2 className={styles['contact-form__title']}>We're so glad you're here!</h2>
        <div className={styles['contact-form__social-media']}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles['contact-form__social-link']}>
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles['contact-form__social-link']}>
            Facebook
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles['contact-form__form']}>
        <h2 className={styles['contact-form__form-title']}>HOW CAN WE HELP YOU</h2>
        <div className={styles['contact-form__services']}>
          <h3>Select Services</h3>
          <div className={styles['contact-form__services-list']}>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Dental Implants") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Dental Implants")}
            >
              Dental Implants
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Teeth Whitening") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Teeth Whitening")}
            >
              Teeth Whitening
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Veneers") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Veneers")}
            >
              Veneers
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Teeth Cleaning") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Teeth Cleaning")}
            >
              Teeth Cleaning
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Oral Exams") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Oral Exams")}
            >
              Oral Exams
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("X-Rays") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("X-Rays")}
            >
              X-Rays
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Fillings") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Fillings")}
            >
              Fillings
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Crowns") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Crowns")}
            >
              Crowns
            </button>
            <button
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes("Bridges") ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle("Bridges")}
            >
              Bridges
            </button>
          </div>
        </div>
        <div className={styles['contact-form__input-group']}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles['contact-form__input']}
            placeholder=" "
          />
          <label className={styles['contact-form__label']}>First + Last Name (Required)</label>
        </div>
        <div className={styles['contact-form__input-group']}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles['contact-form__input']}
            placeholder=" "
          />
          <label className={styles['contact-form__label']}>Email (Required)</label>
        </div>
        <div className={styles['contact-form__input-group']}>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className={styles['contact-form__input']}
            placeholder=" "
          />
          <label className={styles['contact-form__label']}>Phone Number (Required)</label>
        </div>
        <div className={styles['contact-form__input-group']}>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className={styles['contact-form__select']}
          >
            <option value="" disabled>Select a Doctor for your Exam</option>
            <option value="Dr. Ramon Bana">Dr. Ramon Bana</option>
            <option value="Dr. Andrew Brattain">Dr. Andrew Brattain</option>
          </select>
          <label className={styles['contact-form__label']}>Select a Doctor (Required)</label>
        </div>
        <div className={styles['contact-form__input-group']}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles['contact-form__textarea']}
            placeholder=" "
          />
          <label className={styles['contact-form__label']}>Message (Required)</label>
        </div>
        <div className={styles['contact-form__input-group']}>
          <label className={styles['contact-form__label']}>Request a Call Back (Required)</label>
          <fieldset className={styles['contact-form__fieldset']}>
            <div className={styles['contact-form__input-group']}>
              <input
                type="date"
                name="callbackDate"
                value={formData.callbackDate}
                onChange={handleChange}
                required
                className={styles['contact-form__input']}
              />
              <label className={styles['contact-form__label']}>Date</label>
            </div>
            <div className={styles['contact-form__input-group']}>
              <input
                type="time"
                name="callbackTime"
                value={formData.callbackTime}
                onChange={handleChange}
                required
                className={styles['contact-form__input']}
              />
              <label className={styles['contact-form__label']}>Time</label>
            </div>
          </fieldset>
        </div>
        <button type="submit" className={styles['contact-form__button']}>
          Submit
        </button>
        {success && <p className={styles['contact-form__success']}>Your message has been sent successfully!</p>}
        {error && <p className={styles['contact-form__error']}>{error}</p>}
      </form>
    </div>
  );
};

export default ContactFormComponent;
