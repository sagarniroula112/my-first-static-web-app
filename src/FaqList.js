import { Faqs } from "./Faqs";
// import { useState } from "react";

export function FaqList({ faqDetails, handleShowCards }) {
  return (
    <div className="faq-box">
      {faqDetails.map((faq) => (
        <Faqs
          faq={faq}
          key={faq.id}
          id={faq.id}
          title={faq.title}
          text={faq.text}
          handleShowCards={handleShowCards}
        />
      ))}
    </div>
  );
}
