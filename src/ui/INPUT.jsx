import "./INPUT.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Modal from "./MODAL";
import BUTTON from "./BUTTON";
function INPUT({ register }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [hasPost, setHasPost] = useState(true);
  const [post, setPost] = useState("");
  const { user, data } = useAuth();
  console.log(data.email);
  return (
    <div className="postClass">
      <input
        type="text"
        className="btnModal"
        onClick={openModal}
        placeholder={`What's on your mind ${user.split(" ")[0]}?`}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <input
          type="text"
          name="author"
          value={localStorage.getItem("author")}
          hidden
          {...register("author")}
        />
        <input
          type="text"
          name="fullname"
          value={localStorage.getItem("user")}
          hidden
          {...register("fullname")}
        />
        <input
          type="text"
          name="pic"
          value={localStorage.getItem("pic")}
          hidden
          {...register("pic")}
        />
        <textarea
          name="post"
          id="post"
          value={post}
          {...register("post")}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <BUTTON type="submit" className="btnPost" hasPost={post ? false : true}>
          Post
        </BUTTON>
      </Modal>
    </div>
  );
}

export default INPUT;
