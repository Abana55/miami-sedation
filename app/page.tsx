import styles from './home/Home.module.scss';

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
          Our mission is to provide compassionate and comprehensive dental care to our patients, ensuring their comfort and well-being at every visit.
        </p>
      </section>
    </div>
  );
};

export default Home;