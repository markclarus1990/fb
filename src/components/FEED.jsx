import { useEffect, useState } from "react";
import "./FEED.css";
import { editPost } from "../services/Blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../services/Blogs";

function FEED({ data }) {
  // State for posts
  const [posts, setPosts] = useState(data || []);

  const queryClient = useQueryClient();

  // Mutation for deleting a blog post
  const { mutate: mutateDelete } = useMutation({
    mutationFn: deleteBlog,
    onSuccess: (deletedData) => {
      // Update local state after deletion
      setPosts((prevPosts) =>
        prevPosts?.filter((post) => post.id !== deletedData.id)
      );

      // Invalidate queries for fresh data fetch if needed
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
    onError: (error) => {
      console.error("Error deleting post:", error);
    },
  });

  // Mutation for editing a blog post (if needed)
  const { mutate: editMutate } = useMutation({
    mutationFn: editPost,
  });

  // Handler to update post value in state
  const handlePostChange = (e, id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, post: e.target.value } : post
    );
    setPosts(updatedPosts); // Update the posts state
  };

  function handleUpdate(updatedPost) {
    editMutate(updatedPost);
  }

  return (
    <>
      {data?.map((el) => (
        <ul className="ul" key={el.id}>
          <article className="feeds-parent">
            <section className="feeds">
              <div className="p-prof">
                <img src={localStorage.getItem("pic")} alt="profile" />
                {el?.fullname}
              </div>

              <li>
                <textarea
                  className="gpost"
                  value={el.post}
                  onChange={(e) => handlePostChange(e, el.id)} // Update state correctly
                ></textarea>
                <div className="btns">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      mutateDelete(el.id);
                    }} // Trigger delete mutation
                  >
                    Delete
                  </button>
                </div>
              </li>
            </section>
          </article>
        </ul>
      ))}
    </>
  );
}

export default FEED;
