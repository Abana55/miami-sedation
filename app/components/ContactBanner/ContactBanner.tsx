"use client";

import { useState } from "react";
import styles from "./ContactBanner.module.scss";

const ContactBanner = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <button onClick={handleToggle} className={styles.contactButton}>
          {isToggled ? "Hide Contact Info" : "Contact Us"}
        </button>
        {isToggled && (
          <div className={styles.contactInfo}>
            <a href="tel:+17866255550" className={styles.infoItem}>
              Call Us: (786) 625-5550
            </a>
            <a href="mailto:info@example.com" className={styles.infoItem}>
              Email Us: info@example.com
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactBanner;
