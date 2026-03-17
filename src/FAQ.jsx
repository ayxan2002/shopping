import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I create an account?",
      answer:
        "You can create an account by clicking the Register button in the header.",
    },
    {
      question: "How can I buy a product?",
      answer: "Add the product to your cart and proceed to checkout.",
    },
    {
      question: "What payment methods are available?",
      answer: "You can pay using credit or debit cards.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>

            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
