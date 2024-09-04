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
        
        <section className={styles.infoSection}>
          <h2 className={styles.headerText}>WE'RE SO GLAD YOU'RE HERE!</h2>
          <p className={styles.additionalInfo}>
            This may be the first step in your oral health journey - And we want
            to make your experience with us{" "}
            <span>the best you've ever had.</span>
          </p>
          <div className={styles.socialMediaLinks}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
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
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <ContactFormComponent />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
