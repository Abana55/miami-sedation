import Link from "next/link";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <h1 className={styles["services__title"]}>Our Services</h1>
      <div className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>
          Cosmetic Treatments
        </h2>
        <ul className={styles["services__list"]}>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/teeth-whitening"
              className={styles["services__link"]}
            >
              Teeth Whitening
            </Link>
          </li>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/veneers"
              className={styles["services__link"]}
            >
              Veneers
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>
          Preventive Treatments
        </h2>
        <ul className={styles["services__list"]}>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/teeth-cleaning"
              className={styles["services__link"]}
            >
              Teeth Cleaning
            </Link>
          </li>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/oral-exams"
              className={styles["services__link"]}
            >
              Oral Exams
            </Link>
          </li>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/x-rays"
              className={styles["services__link"]}
            >
              X-Rays
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["services__category"]}>
        <h2 className={styles["services__category-title"]}>
          Restorative Treatments
        </h2>
        <ul className={styles["services__list"]}>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/dental-implants"
              className={styles["services__link"]}
            >
              Dental Implants
            </Link>
          </li>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/fillings"
              className={styles["services__link"]}
            >
              Fillings
            </Link>
          </li>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/crowns"
              className={styles["services__link"]}
            >
              Crowns
            </Link>
          </li>
          <li className={styles["services__item"]}>
            <Link
              href="/dental-services/bridges"
              className={styles["services__link"]}
            >
              Bridges
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
