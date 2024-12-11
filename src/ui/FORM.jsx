import "./FORM.css";
import INPUT from "./INPUT";
import { useForm } from "react-hook-form";
import { createPost } from "../services/Blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PostDropdown from "./DROPDOWN";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Modal from "./MODAL";
import BUTTON from "./BUTTON";
function FORM() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isLoading } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      reset();
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [hasPost, setHassPost] = useState(true);
  const [post, setPost] = useState("");
  const { user, data } = useAuth();
  console.log(data.email);
  function onSubmit(data) {
    mutate(data);
    console.log(data);
    closeModal();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <BUTTON
            type="submit"
            className="btnPost"
            hasPost={post ? false : true}
          >
            Post
          </BUTTON>
        </Modal>
      </div>
    </form>
  );
}

export default FORM;
