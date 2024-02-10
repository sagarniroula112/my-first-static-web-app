export function Header({ handleShowFaq, handleShowBlog }) {
  return (
    <>
      <h2>Crop Recommendation System</h2>
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-btn" onClick={handleShowFaq}>
            FAQ
          </button>
        </li>
        |
        <li className="nav-item">
          <button className="nav-btn" onClick={handleShowBlog}>
            Blog
          </button>
        </li>
        {/* <li className="nav-item">Contact</li> */}
      </ul>
    </>
  );
}
