import React, { useState } from "react";

const PostDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      {/* Dropdown button */}
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? "true" : "false"}
      >
        Options
      </button>

      {/* Dropdown menu */}
      <ul
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        aria-labelledby="postDropdown"
      >
        <li>
          <a className="dropdown-item" href="#">
            Edit Post
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Delete Post
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Share Post
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Save Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PostDropdown;
