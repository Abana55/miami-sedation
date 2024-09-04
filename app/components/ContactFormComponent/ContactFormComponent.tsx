"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
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
    name: '',
    email: '',
    phoneNumber: '',
    doctor: '',
    message: '',
    callbackDate: '',
    callbackTime: '',
    services: [],
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prevState) => {
      const services = prevState.services.includes(service)
        ? prevState.services.filter((s) => s !== service)
        : [...prevState.services, service];
      return { ...prevState, services };
    });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: formData.name, // Name from form
          user_email: formData.email, // Email from form
          user_phone: formData.phoneNumber, // Phone from form
          doctor: formData.doctor, // Selected doctor from form
          message: formData.message, // Message from form
          callback_date: formData.callbackDate, // Callback date from form
          callback_time: formData.callbackTime, // Callback time from form
          services: formData.services.join(', '), // Selected services from form
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY // Public key from .env.local
      );
  
      if (result.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          doctor: '',
          message: '',
          callbackDate: '',
          callbackTime: '',
          services: [],
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles['form-container']}>
      <h2 className={styles['contact-form__title']}>HOW CAN WE HELP YOU</h2>

      <div className={styles['contact-form__services']}>
        <h3>Select Services</h3>
        <div className={styles['contact-form__services-list']}>
          {[
            'Dental Implants',
            'Teeth Whitening',
            'Veneers',
            'Teeth Cleaning',
            'Oral Exams',
            'X-Rays',
            'Fillings',
            'Crowns',
            'Bridges',
          ].map((service) => (
            <button
              key={service}
              type="button"
              className={`${styles['contact-form__service-button']} ${
                formData.services.includes(service)
                  ? styles['contact-form__service-button--selected']
                  : ''
              }`}
              onClick={() => handleServiceToggle(service)}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={sendEmail} className={styles['contact-form__form']}>
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
          <label className={styles['contact-form__label']}>
            First + Last Name (Required)
          </label>
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
            <option value="" disabled>
              Select a Doctor for your Exam
            </option>
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

        <div className={styles['contact-form__fieldset']}>
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
        </div>

        <button
          type="submit"
          className={styles['contact-form__button']}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>

        {success && (
          <p className={styles['contact-form__success']}>Your message has been sent successfully!</p>
        )}

        {error && <p className={styles['contact-form__error']}>{error}</p>}
      </form>
    </div>
  );
};

export default ContactFormComponent;
