"use client";

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
    <div className={styles['contact-form']}>
      <h2 className={styles['contact-form__title']}>HOW CAN WE HELP YOU</h2>
      <div className={styles['contact-form__services']}>
        <h3 className={styles['contact-form__services-title']}>Select Services</h3>
        <div className={styles['contact-form__services-list']}>
          {["Dental Implants", "Teeth Whitening", "Veneers", "Teeth Cleaning", "Oral Exams", "X-Rays", "Fillings", "Crowns", "Bridges"].map(service => (
            <button
              key={service}
              type="button"
              className={`${styles['contact-form__service-button']} ${formData.services.includes(service) ? styles['contact-form__service-button--selected'] : ''}`}
              onClick={() => handleServiceToggle(service)}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles['contact-form__form']}>
        {[
          { name: 'name', label: 'First + Last Name (Required)', type: 'text' },
          { name: 'email', label: 'Email (Required)', type: 'email' },
          { name: 'phoneNumber', label: 'Phone Number (Required)', type: 'tel' }
        ].map(({ name, label, type }) => (
          <div key={name} className={styles['contact-form__input-group']}>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className={styles['contact-form__input']}
              placeholder=" "
            />
            <label className={styles['contact-form__label']}>{label}</label>
          </div>
        ))}
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
