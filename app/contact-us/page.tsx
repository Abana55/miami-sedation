import styles from './contact.module.scss';
import ContactFormComponent from '../components/ContactFormComponent/ContactFormComponent';

function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <section className={styles.infoSection}>
        <h2 className={styles.headerText}>We're so glad you're here!</h2>
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
        <ContactFormComponent />
      </section>
    </div>
  );
}

export default ContactPage;
