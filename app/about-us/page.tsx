import Link from "next/link";
import Image from "next/image";
import styles from "./AboutUs.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Get to Know Us</h1>
      <p>
        Our dental team is unlike any you’ve ever met in Miami. We value
        excellence in patient care, and it shows. We love to laugh and have a
        good time, but know when it’s time to get down to business. Our team is
        overflowing with passion and commitment. We hope you get to know us a
        little bit better here, and we can’t wait to get to know you!
      </p>

      <h2>Our Team</h2>
      <div className={styles.teamMember}>
        <Image
          src="/images/5D10A688-BC5F-4D17-9DE7-25F1347CEF64.JPG"
          alt="Dr. Ramon Bana"
          width={200}
          height={300}
          className={styles.image}
        />
        <div className={styles.teamText}>
          <h3>Dr. Ramon Bana</h3>
          <h3>Dr. Ramon Bana</h3>
          <p>Doctor of Dental Surgery/ Doctor of Smiles</p>
          <p>
            Dr. Bana’s patients describe him as down-to-earth, professional, and
            full of heart. He is talented and strives to make each patient leave
            the office feeling better than when they arrived. Patient comfort is
            his top priority, and patients say they feel like extended family.
            He is dedicated to his practice, patients, and team – and it shows.
            Dr. Bana loves coming to work because his work changes people for
            the better. Patients leave his care healthier, happier, and with
            brighter smiles.
          </p>
          <p>
            As a graduate of Marquette University, Dr. Bana has continued his
            education for the past 25 years ensuring he is bringing the best of
            the best to his patients. He promises excellence and does the work
            to make sure he delivers on that promise.
          </p>
        </div>
      </div>

      <div className={styles.teamMember}>
        <Image
          src="/images/IMG_6450.jpeg"
          alt="Dr. Andrew Brattain"
          width={200}
          height={300}
          className={styles.image}
        />
        <div className={styles.teamText}>
          <h3>Dr. Andrew Brattain</h3>
          <p>
            Dr. Andrew Brattain was born and raised in Miami, FL and graduated
            from Christopher Columbus High School (Class of 2008). He graduated
            from the University of Florida in 2012, where he received his
            Bachelor of Science in Nutritional Sciences. He then moved to Boston
            and graduated from the Boston University School of Dental Medicine
            in 2016 with summa cum laude honors.
          </p>
          <p>
            Dr. Brattain and his wife Danielle began their professional careers
            in Tampa, FL. While in Tampa, they welcomed their first-born baby
            girl Olivia. This past year, they decided to finally move back home
            to Miami and are now expecting the birth of their baby boy.
          </p>
          <p>
            Dr. Brattain is very excited to join Dr. Bana and the amazing team
            at Miami Sedation and Cosmetic Dentistry. He believes first and
            foremost in the importance of building a strong relationship with
            each of his patients. This creates a foundation that allows for
            personalized treatment to achieve the best patient experience and
            oral health possible. Through various forms of education and
            experience, Dr. Brattain constantly stays up to date with the latest
            advancements in dental treatment and looks forward to utilizing
            these with all his patients.
          </p>
        </div>
      </div>

      <div>
        <h2>Request a Consultation</h2>
        <p>Over 250 Google Reviews</p>
        <Link href="/contact">Request a Consultation</Link>
      </div>
    </div>
  );
}
