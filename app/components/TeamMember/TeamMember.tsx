"use client";
import React, { useState, useRef, useEffect } from "react";
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
  const [showBio, setShowBio] = useState(isDoctor);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    if (!isDoctor) {
      setShowBio((prev) => !prev);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!isDoctor) {
        setShowBio((prev) => !prev);
      }
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      cardRef.current &&
      !cardRef.current.contains(event.target as Node) &&
      !isDoctor
    ) {
      setShowBio(false);
    }
  };

  useEffect(() => {
    if (!isDoctor) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [isDoctor]);

  return (
    <div
      className={`${styles.teamMember} ${showBio ? styles.showBio : ""} ${
        isDoctor ? styles.doctor : ""
      }`}
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-expanded={showBio}
      ref={cardRef}
    >
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
