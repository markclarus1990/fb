import BUTTON from "../ui/BUTTON";
import "./PAGINATION.css";
function PAGINATION({ handlePageChange, currentPage, totalPages }) {
  console.log(currentPage);
  return (
    <div className="x">
      <BUTTON onClick={handlePageChange} currentPage={currentPage}>
        First
      </BUTTON>
      <BUTTON
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </BUTTON>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <BUTTON
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </BUTTON>
      <BUTTON
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </BUTTON>
    </div>
  );
}

export default PAGINATION;
