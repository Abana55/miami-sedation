import React from 'react';
import styles from '../../DentalServices.module.scss';

const Xrays: React.FC = () => {
  return (
    <div className={styles.servicePage}>
      <h1>X-rays</h1>
      <p>
        X-rays are an essential diagnostic tool that allows us to see the internal structure of your teeth and jaw.
      </p>
      <p>
        We use state-of-the-art X-ray technology to ensure accurate diagnoses and effective treatment planning.
      </p>
    </div>
  );
};

export default Xrays;
