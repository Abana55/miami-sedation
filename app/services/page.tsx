import Link from "next/link";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <h1 className={styles["services__title"]}>Our Services</h1>
      <div className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>Cosmetic Treatments</h2>
        <div className={styles["services__cards"]}>
          <Link href="/dental-services/teeth-whitening" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Teeth Whitening</h3>
              <p className={styles["services__card-description"]}>Brighten your smile with our professional teeth whitening services.</p>
            </div>
          </Link>
          <Link href="/dental-services/veneers" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Veneers</h3>
              <p className={styles["services__card-description"]}>Get the perfect smile with custom veneers.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>Preventive Treatments</h2>
        <div className={styles["services__cards"]}>
          <Link href="/dental-services/teeth-cleaning" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Teeth Cleaning</h3>
              <p className={styles["services__card-description"]}>Maintain your oral health with regular teeth cleaning.</p>
            </div>
          </Link>
          <Link href="/dental-services/oral-exams" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Oral Exams</h3>
              <p className={styles["services__card-description"]}>Comprehensive oral exams to ensure your dental health.</p>
            </div>
          </Link>
          <Link href="/dental-services/x-rays" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className{styles["services__card-title"]}>X-Rays</h3>
              <p className={styles["services__card-description"]}>Advanced dental x-rays for accurate diagnosis.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>Restorative Treatments</h2>
        <div className={styles["services__cards"]}>
          <Link href="/dental-services/dental-implants" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Dental Implants</h3>
              <p className={styles["services__card-description"]}>Permanent solutions for missing teeth with dental implants.</p>
            </div>
          </Link>
          <Link href="/dental-services/fillings" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Fillings</h3>
              <p className={styles["services__card-description"]}>Restore your teeth with durable fillings.</p>
            </div>
          </Link>
          <Link href="/dental-services/crowns" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Crowns</h3>
              <p className={styles["services__card-description"]}>Protect and strengthen your teeth with crowns.</p>
            </div>
          </Link>
          <Link href="/dental-services/bridges" className={styles["services__card"]}>
            <div className={styles["services__card-content"]}>
              <h3 className={styles["services__card-title"]}>Bridges</h3>
              <p className={styles["services__card-description"]}>Replace missing teeth with dental bridges.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
