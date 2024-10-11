import React from 'react';
import styles from './FAQs.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqs: FAQItem[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  return (
    <section className={`${styles.faqSection}`}>
      <h2 className={styles.faqHeader}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div className={styles.faqItem} key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
