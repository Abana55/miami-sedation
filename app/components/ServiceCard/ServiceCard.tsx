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
      <div className={styles.cardImage}>
        <Image
          src={service.image}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          className={styles["image-element"]}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </Link>
  );
};

export default ServiceCard;
