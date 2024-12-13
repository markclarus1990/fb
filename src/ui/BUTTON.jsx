import "./BUTTON.css";
function BUTTON({ children, onClick, currentPage }) {
  return (
    <button
      className="button-post"
      disabled={currentPage === 1}
      onClick={() => onClick(1)}
    >
      {children}
    </button>
  );
}

export default BUTTON;
