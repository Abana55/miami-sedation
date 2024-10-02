
import React from "react";
import Image from "next/image";
import styles from "./TeamMember.module.scss";

interface TeamMemberProps {
  imageSrc: string;
  altText: string;
  name: string;
  position: string;
  bio: string[];
  reverse?: boolean; 
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  altText,
  name,
  position,
  bio,
  reverse = false,
}) => {
  return (
    <div className={`${styles.teamMember} ${reverse ? styles.reverse : ""}`}>
      <Image
        src={imageSrc}
        alt={altText}
        width={200}
        height={300}
        className={styles.image}
      />
      <div className={styles.teamText}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        {bio.map((paragraph, index) => (
          <p key={index} className={styles.bio}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
