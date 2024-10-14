import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import commonStyles from '../../DentalServices.module.scss'; // Common styles
import styles from './FinanceWithUs.module.scss'; // Page-specific styles
import ScrollFadeIn from '../components/ScrollFadeIn/ScrollFadeIn'; 
import FAQs from '../components/FAQs/FAQs'; 

const FinanceWithUsPage: React.FC = () => {
    // FAQs data (optional, can include financing-related FAQs)
    const faqs = [
      {
        question: 'What financing options are available?',
        answer:
          'We offer various financing options including Alphaeon, Sunbit, CareCredit, and Financials to help you manage the cost of your dental procedures.',
      },
      {
        question: 'How do I apply for financing?',
        answer:
          'You can apply for financing directly through our office. Our financial advisors will guide you through the application process and help you choose the best option for your needs.',
      },
      {
        question: 'Are there any interest rates or fees?',
        answer:
          'Each financing option has its own interest rates and terms. Our team will provide detailed information on each plan to help you make an informed decision.',
      },
      {
        question: 'Can I apply for multiple financing options?',
        answer:
          'While you can explore multiple options, we recommend selecting the one that best fits your financial situation to avoid overlapping commitments.',
      },
      {
        question: 'Is financing available for all dental procedures?',
        answer:
          'Yes, financing is available for a wide range of dental procedures including cosmetic, restorative, and orthodontic treatments. Speak with our team to confirm eligibility.',
      },
      // Add more FAQs as needed
    ];

    return (
        <>
          <Head>
            <title>Finance with Us | Flexible Dental Financing | Bana Dental Design</title>
            <meta
              name="description"
              content="Explore flexible financing options at Bana Dental Design. Learn about Alphaeon, Sunbit, CareCredit, and Financials to manage the cost of your dental procedures."
            />
            <meta
              name="keywords"
              content="Dental Financing, Finance with Us, Alphaeon, Sunbit, CareCredit, Financials, Bana Dental Design"
            />
            <meta property="og:title" content="Finance with Us | Flexible Dental Financing | Bana Dental Design" />
            <meta
              property="og:description"
              content="Explore flexible financing options at Bana Dental Design. Learn about Alphaeon, Sunbit, CareCredit, and Financials to manage the cost of your dental procedures."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://yourwebsite.com/dental-services/finance-with-us"
            />
            <meta
              property="og:image"
              content="https://yourwebsite.com/images/finance-with-us.jpg"
            />
            <link rel="canonical" href="https://yourwebsite.com/dental-services/finance-with-us" />
    
            {/* FAQ Schema Markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer,
                    },
                  })),
                }),
              }}
            />
          </Head>

          </>
  );
};

export default FinanceWithUsPage;