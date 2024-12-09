import "./BUTTON.css";
function BUTTON({ hasPost, children, onClick }) {
  console.log(hasPost);
  return (
    <button className="button-post" disabled={hasPost} onClick={() => onClick}>
      {children}
    </button>
  );
}

export default BUTTON;
