// components/ConnectBanner/ConnectBanner.tsx

import Link from 'next/link';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './ConnectBanner.module.scss';

const slideImages = [
  '/images/connectBanner1.jpg',
  '/images/connectBanner2.jpg',
  '/images/connectBanner3.jpg',
];

const ConnectBanner = () => {
  return (
    <div className={styles.connectBanner}>
      <Fade duration={5000} transitionDuration={1000} infinite>
        {slideImages.map((image, index) => (
          <div key={index} className={styles['connectBanner__slide']}>
            <div
              className={styles['connectBanner__slide-image']}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Fade>
      <h1 className={styles['connectBanner__title']}>Connect with Us</h1>
      <div className={styles['connectBanner__content']}>
        <p className={styles['connectBanner__text']}>
          We look forward to meeting you.
        </p>
      </div>
      <div className={styles['connectBanner__contact-info']}>
        <p className={styles['connectBanner__office-number']}>
          Call us: (123) 456-7890
        </p>
        <Link href="/contact-us" passHref>
          <a className={styles['connectBanner__schedule-button']}>
            Schedule an Appointment
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ConnectBanner;