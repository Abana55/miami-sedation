"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../DentalServices.module.scss";

const images = [
  "/images/IMG_3696.JPG",
  "/images/IMG_3948.jpeg",
  "/images/IMG_6450.jpeg",
];

const Fillings = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <>
      <Head>
        <title>Fillings | Your Dental Practice</title>
        <meta
          name="description"
          content="Learn about dental fillings provided by Your Dental Practice. Fillings are used to repair cavities and restore tooth function and integrity."
        />
        <meta
          name="keywords"
          content="dental fillings, cavities, tooth repair, oral health"
        />
      </Head>
      <main
        className={`${styles["servicePage"]} ${styles["servicePageRestoration"]}`}
      >
        <h1 className={styles["servicePageHeader"]}>Dental Fillings</h1>

        {/* Intro Section */}
        <section className={styles["fillingsIntro"]}>
          <p className={styles["fillingsText"]}>
            Dental fillings are used to treat cavities and repair teeth affected
            by decay. They help restore the tooth's normal function and shape
            while preventing further decay by sealing spaces where bacteria can
            enter.
          </p>
        </section>

        {/* Detailed Procedure */}
        <section className={styles["fillingsProcedure"]}>
          <h2 className={styles["fillingsSubheader"]}>Procedure Overview</h2>
          <section className={styles["fillingsText"]}>
            <h3>1. Initial Consultation</h3>
            <p>
              During the initial consultation, your dentist will thoroughly
              examine your teeth, take X-rays if needed, and create a
              personalized treatment plan. You’ll be guided through the
              available filling options based on the size and location of the
              cavity.
            </p>

            <h3>2. Filling Placement</h3>
            <p>
              The filling process begins with administering local anesthesia to
              ensure comfort. The decayed area of the tooth is cleaned out, and
              the dentist then fills the space with the selected material.
              Composite fillings are applied in layers, each hardened with a
              special curing light.
            </p>

            <h3>3. Post-Procedure Care</h3>
            <p>
              After the procedure, you will receive aftercare instructions,
              including advice on maintaining the filling and promoting oral
              health. It's important to brush and floss regularly, and come in
              for routine checkups to ensure the filling remains intact.
            </p>
          </section>
        </section>

        {/* Types of Fillings */}
        <section className={styles["fillingsTypes"]}>
          <h2 className={styles["fillingsSubheader"]}>Types of Fillings</h2>
          <section className={styles["fillingsText"]}>
            <h3>Composite Fillings</h3>
            <p>
              Composite fillings are tooth-colored and made of a durable resin
              material. They are aesthetically pleasing and blend seamlessly
              with your natural teeth, making them ideal for visible areas like
              the front teeth.
            </p>

            <h3>Amalgam Fillings</h3>
            <p>
              Amalgam fillings are made from a mixture of metals, including
              silver, mercury, and copper. They are extremely durable and can
              withstand the pressure of chewing, making them a popular choice
              for molars.
            </p>

            <h3>Ceramic Fillings</h3>
            <p>
              Ceramic fillings are made of porcelain and are more resistant to
              staining than composite fillings. They are also aesthetically
              pleasing and can last for many years, but are typically more
              expensive.
            </p>

            <h3>Gold Fillings</h3>
            <p>
              Gold fillings are highly durable and can last over 20 years.
              Though more expensive, gold fillings provide long-term value for
              patients seeking a durable option. They are biocompatible and do
              not corrode.
            </p>
          </section>
        </section>

        {/* Benefits of Fillings */}
        <section className={styles["fillingsBenefits"]}>
          <h2 className={styles["fillingsSubheader"]}>
            Benefits of Dental Fillings
          </h2>
          <ul className={styles["fillingsList"]}>
            <li>Restores the natural function of the tooth.</li>
            <li>Prevents further decay by sealing off bacteria.</li>
            <li>Minimally invasive compared to other dental procedures.</li>
            <li>Composite fillings blend with the natural tooth color.</li>
            <li>Amalgam fillings offer long-lasting durability.</li>
          </ul>
        </section>

        {/* Image Slider Section */}
        <aside className={styles["fillingsImageSlider"]}>
          <div className={styles["fillingsMainImage"]}>
            <img
              src={images[currentImage]}
              alt={`Filling ${currentImage + 1}`}
            />
          </div>
          <div className={styles["fillingsThumbnails"]}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles["fillingsThumbnail"]} ${
                  currentImage === index ? styles["fillingsActive"] : ""
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            className={styles["fillingsNextButton"]}
            onClick={handleNextImage}
          >
            Next
          </button>
        </aside>

        {/* Why Choose Us Section */}
        <section className={styles["fillingsWhyUs"]}>
          <h2 className={styles["fillingsSubheader"]}>Why Choose Us?</h2>
          <p className={styles["fillingsText"]}>
            Our experienced dental team uses the latest technologies and
            highest-quality materials to ensure your fillings are durable,
            comfortable, and aesthetically pleasing. We prioritize patient care,
            ensuring you have a positive and comfortable experience.
          </p>
          <Link href="/contact-us" className={styles["fillingsContactButton"]}>
            Contact Us
          </Link>
        </section>
      </main>
    </>
  );
};

export default Fillings;
