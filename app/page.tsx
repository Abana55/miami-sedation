import styles from "./components/Home.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../app/styles/globals.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
    <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Miami Sedation Dentistry</h1>
        <p className={styles.heroTagline}>Providing expert dental care with a gentle touch.</p>
    </div>
    <section className={styles.missionStatement}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionContent}>
            Our mission is to provide compassionate and comprehensive dental care
            to our patients, ensuring their comfort and well-being at every visit.
        </p>
    </section>

    {/* Services Section */}
    <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
                <h3>Cosmetic Dentistry</h3>
                <p>Enhance your smile with our state-of-the-art cosmetic dental services.</p>
            </div>
            <div className={styles.serviceItem}>
                <h3>Preventive Care</h3>
                <p>Regular exams, cleanings, and x-rays to maintain your oral health.</p>
            </div>
            <div className={styles.serviceItem}>
                <h3>Sedation Dentistry</h3>
                <p>Experience pain-free dentistry with our sedation techniques.</p>
            </div>
        </div>
    </section>

    {/* Testimonials Section */}
    <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
        <div className={styles.testimonialItem}>
            <p>"The best dental experience I've ever had! The staff was friendly and Dr. Bana made me feel at ease through the entire process."</p>
            <cite>— John Doe</cite>
        </div>
    </section>

    {/* Call to Action for Appointments */}
    <section className={styles.callToAction}>
        <h2 className={styles.sectionTitle}>Ready to Smile?</h2>
        <p>Book your next appointment with us today!</p>
        <button className={styles.ctaButton}>Book Appointment</button>
    </section>

    {/* Footer Image or Banner */}
    <div className={styles.footerImage}>
        <img src="/path/to/dental-office-photo.jpg" alt="Our Modern Dental Office" />
    </div>
</div>
  );
};

export default Home;
