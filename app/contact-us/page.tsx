import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./contact.module.scss";
import ContactFormComponent from "../components/ContactFormComponent/ContactFormComponent";

function ContactPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.row}>
        {/* Info Section */}
        <section className={styles.infoSection}>
          <h2 className={styles.headerText}>We're so glad you're here!</h2>
          <p className={styles.additionalInfo}>
            This may be the first step in your oral health journey - And we want
            to make your experience with us <span>the best you've ever had.</span>
          </p>
          <div className={styles.socialMediaLinks}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className={styles.socialIcon}
              />
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section className={styles.formSection}>
          <ContactFormComponent />
        </section>
      </div>

      {/* Banner Section */}
      <div className={styles.connectBanner}>
        <h1 className={styles.bannerTitle}>
          PERFECTION IN EVERY <span className={styles.goldText}>SMILE</span>
        </h1>
        <div className={styles.bannerContent}></div>
        <div className={styles.contactInfo}>
          <p className={styles.officeNumber}>Call us: (123) 456-7890</p>
          <a href="/contact" className={styles.scheduleButton}>
            Schedule an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
