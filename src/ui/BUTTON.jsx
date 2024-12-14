import "./BUTTON.css";
function BUTTON({ children, onClick, currentPage, disabled }) {
  return (
    <button
      className="button-post"
      disabled={disabled}
      onClick={() => onClick(1)}
    >
      {children}
    </button>
  );
}

export default BUTTON;
