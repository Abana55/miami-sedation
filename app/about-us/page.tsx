import Link from "next/link";
import Image from "next/image";
import ConsultationBanner from "../components/ConsultationBanner/ConsultationBanner";
import styles from "./AboutUs.module.scss";

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <header>
        <h1 className={styles.title}>Get to Know Us</h1>
        <p className={styles.text}>
          Our dental team is unlike any you’ve ever met in Miami. We value
          excellence in patient care, and it shows. We love to laugh and have a
          good time, but know when it’s time to get down to business. Our team is
          overflowing with passion and commitment. We hope you get to know us a
          little bit better here, and we can’t wait to get to know you!
        </p>
      </header>

      <section>
        <h2 className={styles.subtitle}>Our Team</h2>

        <div className={styles.teamMember}>
          <Image
            src="/images/aboutUs/DrBana.jpg"
            alt="Dr. Ramon Bana"
            width={200}
            height={300}
            className={styles.image}
          />
          <div className={styles.teamText}>
            <h3 className={styles.name}>Dr. Ramon Bana</h3>
            <p className={styles.position}>Doctor of Dental Surgery/ Doctor of Smiles</p>
            <p className={styles.bio}>
              Dr. Bana’s patients describe him as down-to-earth, professional, and
              full of heart. He is talented and strives to make each patient leave
              the office feeling better than when they arrived. Patient comfort is
              his top priority, and patients say they feel like extended family.
              He is dedicated to his practice, patients, and team – and it shows.
              Dr. Bana loves coming to work because his work changes people for
              the better. Patients leave his care healthier, happier, and with
              brighter smiles.
            </p>
            <p className={styles.bio}>
              As a graduate of Marquette University, Dr. Bana has continued his
              education for the past 25 years ensuring he is bringing the best of
              the best to his patients. He promises excellence and does the work
              to make sure he delivers on that promise.
            </p>
          </div>
        </div>

        <div className={styles.teamMember}>
          <Image
            src="/images/aboutUs/DrBrittain.jpg"
            alt="Dr. Andrew Brattain"
            width={200}
            height={300}
            className={styles.image}
          />
          <div className={styles.teamText}>
            <h3 className={styles.name}>Dr. Andrew Brattain</h3>
            <p className={styles.position}>Doctor of Dental Medicine</p>
            <p className={styles.bio}>
              Dr. Andrew Brattain was born and raised in Miami, FL and graduated
              from Christopher Columbus High School (Class of 2008). He graduated
              from the University of Florida in 2012, where he received his
              Bachelor of Science in Nutritional Sciences. He then moved to Boston
              and graduated from the Boston University School of Dental Medicine
              in 2016 with summa cum laude honors.
            </p>
            <p className={styles.bio}>
              Dr. Brattain and his wife Danielle began their professional careers
              in Tampa, FL. While in Tampa, they welcomed their first-born baby
              girl Olivia. This past year, they decided to finally move back home
              to Miami and are now expecting the birth of their baby boy.
            </p>
            <p className={styles.bio}>
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

        <div className={styles.teamMember}>
          <Image
            src="/images/treatment-coordinator.jpg"
            alt="Jane Doe"
            width={200}
            height={300}
            className={styles.image}
          />
          <div className={styles.teamText}>
            <h3 className={styles.name}>Jane Doe</h3>
            <p className={styles.position}>Treatment Coordinator</p>
            <p className={styles.bio}>
              Jane is dedicated to ensuring every patient receives the best care
              possible. With years of experience in the dental field, she is
              passionate about making sure every treatment plan is tailored to
              each patient's unique needs.
            </p>
          </div>
        </div>

        <div className={styles.teamMember}>
          <Image
            src="/images/hygienist1.jpg"
            alt="John Smith"
            width={200}
            height={300}
            className={styles.image}
          />
          <div className={styles.teamText}>
            <h3 className={styles.name}>John Smith</h3>
            <p className={styles.position}>Dental Hygienist</p>
            <p className={styles.bio}>
              John has been a hygienist for over 10 years and brings a wealth of
              knowledge and experience to our practice. He is dedicated to helping
              patients achieve optimal oral health through regular cleanings and
              patient education.
            </p>
          </div>
        </div>

        <div className={styles.teamMember}>
          <Image
            src="/images/hygienist2.jpg"
            alt="Emily Johnson"
            width={200}
            height={300}
            className={styles.image}
          />
          <div className={styles.teamText}>
            <h3 className={styles.name}>Emily Johnson</h3>
            <p className={styles.position}>Dental Hygienist</p>
            <p className={styles.bio}>
              Emily is passionate about dental hygiene and loves working with
              patients to improve their smiles. She is known for her gentle touch
              and friendly demeanor, making every visit a pleasant experience.
            </p>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
}
