import React from 'react';
import styles from '../../DentalServices.module.scss';

const TeethCleaning: React.FC = () => {
  return (
    <div className={styles.servicePage}>
      <h1>Teeth Cleaning</h1>
      <p>
        Regular teeth cleaning is a critical part of maintaining your oral health. It helps prevent cavities, gum disease, and other oral issues.
      </p>
      <p>
        Our professional teeth cleaning services are thorough and comfortable, ensuring your teeth and gums stay healthy.
      </p>
    </div>
  );
};

export default TeethCleaning;
