import React from "react";
import Image from "next/image";
import styles from "./TeamMember.module.scss";

interface TeamMemberProps {
  imageSrc: string;
  altText: string;
  name: string;
  position: string;
  bio: string[];
  isDoctor?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  altText,
  name,
  position,
  bio,
  isDoctor = false,
}) => {
  return (
    <div className={`${styles.teamMember} ${isDoctor ? styles.doctor : ""}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={altText}
          width={isDoctor ? 300 : 150}
          height={isDoctor ? 400 : 150}
          className={styles.image}
          priority={isDoctor}
          loading={isDoctor ? "eager" : "lazy"}
        />
      </div>
      <div className={styles.teamInfo}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        {bio.length > 0 && (
          <div className={styles.bio}>
            {bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
