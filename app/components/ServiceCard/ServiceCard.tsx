import Link from "next/link";
import Image from "next/image";
import styles from "./ServiceCard.module.scss";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={service.link} className={styles.serviceCard}>
      <div className={styles.cardContent}>
        <div className={styles.cardImage}>
          <Image
            src={service.image}
            alt={service.title}
            layout="fill" // Optimized for responsive and lazy-loaded images
            objectFit="cover"
            className={styles["image-element"]}
          />
          <h3 className={styles.cardTitle}>{service.title}</h3>
        </div>
        <p className={styles.cardDescription}>{service.description}</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </Link>
  );
};

export default ServiceCard;
