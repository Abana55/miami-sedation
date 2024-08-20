import React from 'react';
import styles from '../../DentalServices.module.scss';

const OralExams: React.FC = () => {
  return (
    <div className={styles.servicePage}>
      <h1>Oral Exams</h1>
      <p>
        Comprehensive oral exams are essential for detecting potential oral health issues early.
      </p>
      <p>
        During an oral exam, we check your teeth, gums, and other oral tissues for signs of problems, helping you maintain a healthy smile.
      </p>
    </div>
  );
};

export default OralExams;
