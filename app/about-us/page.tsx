// pages/AboutUs.tsx
import { NextPage } from "next";
import ConsultationBanner from "../components/ConsultationBanner/ConsultationBanner";
import TeamMember from "../components/TeamMember/TeamMember";
import styles from "./AboutUs.module.scss";

interface TeamMemberData {
  id: number;
  imageSrc: string;
  altText: string;
  name: string;
  position: string;
  bio: string[];
}

const AboutPage: NextPage = () => {
  const teamMembers: TeamMemberData[] = [
    // Doctor Ramon Bana
    {
      id: 1,
      imageSrc: "/images/aboutUs/DrBana.jpg",
      altText: "Dr. Ramon Bana",
      name: "Dr. Ramon Bana",
      position: "Doctor of Dental Surgery/Doctor of Smiles",
      bio: [
        "Dr. Bana’s patients describe him as down-to-earth, professional, and full of heart. He is talented and strives to make each patient leave the office feeling better than when they arrived. Patient comfort is his top priority, and patients say they feel like extended family. He is dedicated to his practice, patients, and team – and it shows. Dr. Bana loves coming to work because his work changes people for the better. Patients leave his care healthier, happier, and with brighter smiles.",
        "As a graduate of Marquette University, Dr. Bana has continued his education for the past 25 years ensuring he is bringing the best of the best to his patients. He promises excellence and does the work to make sure he delivers on that promise.",
      ],
    },
    // Doctor Andrew Brattain
    {
      id: 2,
      imageSrc: "/images/aboutUs/DrBrittain.jpg",
      altText: "Dr. Andrew Brattain",
      name: "Dr. Andrew Brattain",
      position: "Doctor of Dental Medicine",
      bio: [
        "Dr. Andrew Brattain was born and raised in Miami, FL and graduated from Christopher Columbus High School (Class of 2008). He graduated from the University of Florida in 2012, where he received his Bachelor of Science in Nutritional Sciences. He then moved to Boston and graduated from the Boston University School of Dental Medicine in 2016 with summa cum laude honors.",
        "Dr. Brattain and his wife Danielle began their professional careers in Tampa, FL. While in Tampa, they welcomed their first-born baby girl Olivia. This past year, they decided to finally move back home to Miami and are now expecting the birth of their baby boy.",
        "Dr. Brattain is very excited to join Dr. Bana and the amazing team at Miami Sedation and Cosmetic Dentistry. He believes first and foremost in the importance of building a strong relationship with each of his patients. This creates a foundation that allows for personalized treatment to achieve the best patient experience and oral health possible. Through various forms of education and experience, Dr. Brattain constantly stays up to date with the latest advancements in dental treatment and looks forward to utilizing these with all his patients.",
      ],
    },
    // Judy (Hygienist)
    {
      id: 3,
      imageSrc: "/images/aboutUs/Judy.jpg",
      altText: "Judy Martinez",
      name: "Judy Martinez",
      position: "Dental Hygienist",
      bio: [
        "Judy has been a dedicated dental hygienist for over 15 years. She is passionate about preventive care and educating patients on maintaining optimal oral health. Her friendly demeanor and gentle approach make patients feel at ease during their visits.",
      ],
    },
    // Sandra (Dental Assistant)
    {
      id: 4,
      imageSrc: "/images/aboutUs/Sandra.jpg",
      altText: "Sandra Lopez",
      name: "Sandra Lopez",
      position: "Dental Assistant",
      bio: [
        "Sandra brings over a decade of experience as a dental assistant. She works closely with our dentists to ensure procedures run smoothly and efficiently. Her commitment to patient comfort and care is evident in everything she does.",
      ],
    },
    // Araceli (Dental Assistant)
    {
      id: 5,
      imageSrc: "/images/aboutUs/Ara.jpg",
      altText: "Araceli Gomez",
      name: "Araceli Gomez",
      position: "Dental Assistant",
      bio: [
        "Araceli's attention to detail and compassionate nature make her an invaluable member of our team. She assists in a variety of dental procedures and is dedicated to providing exceptional care to every patient.",
      ],
    },
    // Jackie (Dental Assistant)
    {
      id: 6,
      imageSrc: "/images/aboutUs/Jackie.jpg",
      altText: "Jackie Nguyen",
      name: "Jackie Nguyen",
      position: "Dental Assistant",
      bio: [
        "Jackie is known for her cheerful attitude and professionalism. With a background in both general and cosmetic dentistry, she supports our dentists in delivering high-quality care tailored to each patient's needs.",
      ],
    },
    // Lauren (Social Media Manager)
    {
      id: 7,
      imageSrc: "/images/aboutUs/Lauren.jpg",
      altText: "Lauren Bana",
      name: "Lauren Bana",
      position: "Social Media Manager",
      bio: [
        "Lauren is the creative force behind our online presence. With a background in digital marketing and a passion for storytelling, she connects with our patients through engaging content and community outreach.",
      ],
    },
    // Lourdes (Community Relations)
    {
      id: 8,
      imageSrc: "/images/aboutUs/LordesBana.jpg",
      altText: "Lourdes Bana",
      name: "Lourdes Bana",
      position: "Community Relations",
      bio: [
        "As the wife of Dr. Bana, Lourdes plays an integral role in our practice. Her commitment to patient care and community involvement helps us foster strong relationships and provide a welcoming environment for all.",
      ],
    },
    // Yoan (Treatment Coordinator)
    {
      id: 9,
      imageSrc: "/images/aboutUs/Yoan.jpg",
      altText: "Yoan Perez",
      name: "Yoan Perez",
      position: "Treatment Coordinator",
      bio: [
        "Yoan ensures that every patient understands their treatment options and feels comfortable throughout their dental experience. His attention to detail and compassionate approach make him a valued member of our team.",
      ],
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      <header>
        <h1 className={styles.title}>Get to Know Us</h1>
        <p className={styles.text}>
          Our dental team is unlike any you’ve ever met in Miami. We value excellence in patient care, and it shows. We love to laugh and have a good time, but know when it’s time to get down to business. Our team is overflowing with passion and commitment. We hope you get to know us a little bit better here, and we can’t wait to get to know you!
        </p>
      </header>

      <section>
        <h2 className={styles.subtitle}>Our Team</h2>

        {teamMembers.map((member) => (
          <TeamMember
            key={member.id}
            imageSrc={member.imageSrc}
            altText={member.altText}
            name={member.name}
            position={member.position}
            bio={member.bio}
          />
        ))}
      </section>

      <ConsultationBanner />
    </div>
  );
};

export default AboutPage;
