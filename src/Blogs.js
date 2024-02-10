export function Blogs({ blog, handleClick }) {
  return (
    <>
      <div className="faq-box">
        <h3>{blog.title}</h3>
        <p>{blog.text}</p>
      </div>
    </>
  );
}
