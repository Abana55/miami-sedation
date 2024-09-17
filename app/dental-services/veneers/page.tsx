import React from "react";
import Head from "next/head";
import Link from "next/link";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import styles from "./Veneers.module.scss";

const Veneers = () => {
  
  const portfolioImages = [
    {
      before: "/images/veneers-before1.jpg",
      after: "/images/veneers-after1.jpg",
    },
    {
      before: "/images/veneers-before2.jpg",
      after: "/images/veneers-after2.jpg",
    },
    {
      before: "/images/veneers-before3.jpg",
      after: "/images/veneers-after3.jpg",
    },
  ];

  return (
    <>
      <Head>
  {/* Title Tag */}
  <title>Dental Veneers | Cosmetic Dentistry in Miami | Bana Dental Design</title>

  {/* Meta Description for Search Engine Results */}
  <meta
    name="description"
    content="Discover advanced dental veneers at Bana Dental Design in Miami. Learn about different types of veneers including porcelain, composite, and Lumineers, and how they enhance your smile with cutting-edge technology."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="dental veneers, cosmetic dentistry, porcelain veneers, composite veneers, lumineers, smile makeover, dental veneers Miami, best veneers in Miami, cosmetic dentist Miami, smile enhancement"
  />

  {/* Author */}
  <meta name="author" content="Bana Dental Design" />

  {/* Viewport for Responsive Design */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* Canonical Tag to Avoid Duplicate Content */}
  <link rel="canonical" href="https://yourdomain.com/services/veneers" />

  {/* Open Graph Metadata for Social Sharing */}
  <meta property="og:title" content="Dental Veneers | Cosmetic Dentistry in Miami | Bana Dental Design" />
  <meta
    property="og:description"
    content="Enhance your smile with custom dental veneers from Bana Dental Design in Miami. Learn about porcelain veneers, composite veneers, and more."
  />
  <meta property="og:url" content="https://yourdomain.com/services/veneers" />
  <meta property="og:image" content="https://yourdomain.com/images/veneers_before_after.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Bana Dental Design" />
  <meta property="og:locale" content="en_US" />

  {/* Twitter Card Metadata */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dental Veneers | Bana Dental Design" />
  <meta
    name="twitter:description"
    content="Explore advanced cosmetic dentistry solutions with custom dental veneers at Bana Dental Design. Get your smile transformation today."
  />
  <meta name="twitter:image" content="https://yourdomain.com/images/veneers_before_after.jpg" />
  <meta name="twitter:site" content="@BanaDentalDesign" />

  {/* Structured Data (Schema.org) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Bana Dental Design",
        "image": "https://yourdomain.com/images/veneers_before_after.jpg",
        "url": "https://yourdomain.com/services/veneers",
        "telephone": "+1-305-555-5555",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Miami Ave",
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "postalCode": "33101",
          "addressCountry": "US"
        },
        "description": "Bana Dental Design in Miami offers advanced dental veneers, including porcelain, composite, and Lumineers, to enhance your smile.",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.7617,
          "longitude": -80.1918
        },
        "sameAs": [
          "https://www.facebook.com/BanaDentalDesign",
          "https://www.instagram.com/BanaDentalDesign",
          "https://www.twitter.com/BanaDentalDesign"
        ]
      }
    `}
  </script>

  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
</Head>

      <main className={styles.veneersPage}>
        {/* Header */}
        <header className={styles.veneersPage__header}>
          <h1 className={styles.veneersPage__title}>Advanced Dental Veneers</h1>
          <p className={styles.veneersPage__intro}>
            At Bana Dental Design, we combine artistry with the latest dental
            technology to create custom-made veneers that enhance your smile.
            Our state-of-the-art techniques ensure long-lasting, natural-looking
            results tailored to your unique dental needs.
          </p>
        </header>

        {/* What Are Dental Veneers */}
        <section className={styles.veneersPage__content}>
          <article className={styles.veneersPage__articles}>
            <h2 className={styles.veneersPage__subheader}>
              What Are Dental Veneers?
            </h2>
            <p className={styles.veneersPage__text}>
              Dental veneers are ultra-thin, custom-designed shells crafted from
              high-quality materials like porcelain or resin. They are carefully
              bonded to the front surface of your teeth to correct cosmetic
              issues such as discoloration, chips, misalignment, and gaps.
              Veneers provide a dramatic transformation by offering a natural,
              flawless appearance.
            </p>

            <h2 className={styles.veneersPage__subheader}>
              Why Veneers Are a Great Option
            </h2>
            <section className={styles.veneersPage__text}>
              <p>
                Veneers are ideal for patients who want to improve the
                aesthetics of their smile without undergoing more invasive
                dental procedures. Here's why veneers stand out:
              </p>
              <ul className={styles.veneersPage__list}>
                <li className={styles.veneersPage__listItem}>
                  Custom-designed to match your natural teeth for seamless
                  integration.
                </li>
                <li className={styles.veneersPage__listItem}>
                  Stain-resistant, ensuring a whiter, brighter smile that lasts
                  longer.
                </li>
                <li className={styles.veneersPage__listItem}>
                  Minimally invasive with little to no tooth reduction in the
                  case of Lumineers.
                </li>
                <li className={styles.veneersPage__listItem}>
                  Durable and long-lasting when cared for properly.
                </li>
                <li className={styles.veneersPage__listItem}>
                  Can correct multiple cosmetic issues simultaneously, including
                  shape, color, and alignment.
                </li>
              </ul>
            </section>

            {/* Types of Veneers */}
            <h2 className={styles.veneersPage__subheader}>
              Types of Dental Veneers
            </h2>
            <section className={styles.veneersPage__text}>
              <h3 className={styles.veneersPage__subsubheader}>
                Porcelain Veneers: The Gold Standard
              </h3>
              <p>
                Porcelain veneers are created from high-grade ceramic and are
                known for their superior durability, translucency, and stain
                resistance. This material mimics the natural light-reflecting
                properties of enamel, making porcelain veneers the most
                aesthetically pleasing option. Modern CAD/CAM technology allows
                for precise crafting of these veneers, ensuring an exact fit and
                natural look.
              </p>

              <h3 className={styles.veneersPage__subsubheader}>
                Composite Veneers: Cost-Effective and Efficient
              </h3>
              <p>
                Composite veneers are made from a tooth-colored resin, the same
                material used for dental bonding. While less durable than
                porcelain, composite veneers are a more affordable option and
                can be applied in a single visit. Our use of advanced composite
                materials offers excellent esthetics and strength, though they
                may require more frequent maintenance compared to porcelain.
              </p>

              <h3 className={styles.veneersPage__subsubheader}>
                Lumineers: Ultra-Thin, Minimally Invasive
              </h3>
              <p>
                Lumineers are a unique type of veneer, known for being as thin
                as a contact lens. They require minimal to no tooth preparation,
                preserving the natural structure of your teeth. This option is
                ideal for patients looking for a reversible, less invasive
                veneer treatment.
              </p>
            </section>

            {/* How Veneers Are Made */}
            <h2 className={styles.veneersPage__subheader}>
              How Are Veneers Made?
            </h2>
            <section className={styles.veneersPage__text}>
              <p>
                Veneers are custom-made in a dental laboratory using advanced
                technology such as 3D imaging, CAD/CAM (Computer-Aided
                Design/Computer-Aided Manufacturing), and precision milling.
                Here’s the process:
              </p>
              <ul className={styles.veneersPage__list}>
                <li className={styles.veneersPage__listItem}>
                  A digital scan or impression of your teeth is taken to create
                  a precise mold.
                </li>
                <li className={styles.veneersPage__listItem}>
                  The veneers are digitally designed to match the size, shape,
                  and color of your natural teeth.
                </li>
                <li className={styles.veneersPage__listItem}>
                  High-quality porcelain or composite resin is used to create
                  the veneers using cutting-edge manufacturing tools.
                </li>
                <li className={styles.veneersPage__listItem}>
                  The final veneers are tested for fit and appearance, then
                  carefully bonded to your teeth.
                </li>
              </ul>
            </section>
          </article>

          {/* Image Slider */}
          <aside className={styles.veneersPage__imageSlider}>
            <div className={styles.slider__mainImage}>
              <img src="/images/veneers1.jpg" alt="Dental Veneer Procedure" />
            </div>
            <div className={styles.slider__thumbnails}>
              <div className={styles.thumbnail}>
                <img src="/images/veneers2.jpg" alt="Dental Veneer Example" />
              </div>
              <div className={styles.thumbnail}>
                <img
                  src="/images/veneers3.jpg"
                  alt="Patient with Dental Veneers"
                />
              </div>
            </div>
          </aside>
        </section>

        {/* Veneers Procedure Overview */}
        <section className={styles.veneersPage__procedure}>
          <h2 className={styles.veneersPage__subheader}>
            The Veneers Procedure: Step-by-Step
          </h2>
          <section className={styles.veneersPage__text}>
            <h3 className={styles.veneersPage__subsubheader}>
              1. Initial Consultation and Digital Planning
            </h3>
            <p>
              We use digital imaging to capture the exact details of your teeth,
              allowing for a fully customized treatment plan. This cutting-edge
              planning process helps us ensure the perfect fit and shape for
              your veneers.
            </p>

            <h3 className={styles.veneersPage__subsubheader}>
              2. Tooth Preparation (Minimal in Most Cases)
            </h3>
            <p>
              For porcelain veneers, a small amount of enamel may be removed to
              make space for the veneer. However, with Lumineers, no enamel
              removal is required, making this a non-invasive option.
            </p>

            <h3 className={styles.veneersPage__subsubheader}>
              3. Bonding of the Veneers
            </h3>
            <p>
              Once the veneers are ready, they are carefully bonded to your
              teeth with a high-strength adhesive. The bond is further
              strengthened with a special curing light, ensuring your veneers
              last for years.
            </p>

            <h3 className={styles.veneersPage__subsubheader}>
              4. Post-Procedure Care
            </h3>
            <p>
              Maintaining veneers is simple—good oral hygiene, regular dental
              check-ups, and avoiding hard foods that can damage the veneers
              will ensure they last a lifetime.
            </p>
          </section>
        </section>

        {/* Why Choose Us */}
        <section className={styles.veneersPage__why}>
          <h2 className={styles.veneersPage__subheader}>
            Why Choose Bana Dental Design for Your Veneers?
          </h2>
          <p className={styles.veneersPage__text}>
            At Bana Dental Design, we pride ourselves on providing cutting-edge
            cosmetic dentistry with a personalized touch. Our state-of-the-art
            technology, combined with our expertise in smile makeovers,
            guarantees a transformative experience that exceeds your
            expectations. Schedule a consultation today to discover how we can
            help you achieve the smile of your dreams.
          </p>
        </section>

        {/* Portfolio Section */}
        <section className={styles.veneersPage__portfolio}>
          <h2 className={styles.veneersPage__subheader}>
            Veneers Before and After
          </h2>
          <div className={styles.portfolio}>
            {portfolioImages.map((image, index) => (
              <div key={index} className={styles.portfolio__item}>
                <div className={styles.portfolio__imageContainer}>
                  <img
                    src={image.before}
                    alt={`Before Veneers ${index + 1}`}
                    className={styles.portfolio__image}
                  />
                  <span className={styles.portfolio__label}>Before</span>
                </div>
                <div className={styles.portfolio__imageContainer}>
                  <img
                    src={image.after}
                    alt={`After Veneers ${index + 1}`}
                    className={styles.portfolio__image}
                  />
                  <span className={styles.portfolio__label}>After</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Banner */}
        <ContactBanner />
      </main>
    </>
  );
};

export default Veneers;
