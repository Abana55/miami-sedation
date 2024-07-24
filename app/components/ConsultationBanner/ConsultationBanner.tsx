import Link from "next/link";
import styles from "./ConsultationBanner.module.scss";

const ConsultationBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h2 className={styles.title}>Request a Consultation</h2>
        <p className={styles.description}>We are here to help you with all your dental needs.</p>
        <div className={styles.buttons}>
          <Link href="/contact-us" className={styles.button}>
            Contact Us
          </Link>
          <a href="tel:+17866255550" className={styles.button}>
            Call Us
          </a>
          <a href="mailto:info@dentaloffice.com" className={styles.button}>
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBanner;
