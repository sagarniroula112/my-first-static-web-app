export function Faqs({ faq, handleClick }) {
  return (
    <>
      <div className="faq-box">
        <h3>{faq.title}</h3>
        <p>{faq.text}</p>
      </div>
    </>
  );
}
