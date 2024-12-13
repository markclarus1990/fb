import { useEffect, useState } from "react";
import "./FEED.css";
import { editPost } from "../services/Blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog } from "../services/Blogs";
import BUTTON from "../ui/BUTTON";
import PAGINATION from "./PAGINATION";

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
  // Set items per page
  const itemsPerPage = 3;

  // Calculate the number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Set the initial page to 1
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data?.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
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
  console.log(data?.length);
  console.log(localStorage.getItem("author"));
  return (
    <>
      {currentItems?.map((el) => (
        <ul className="ul" key={el.id}>
          <article className="feeds-parent">
            <section className="feeds">
              <div className="p-prof">
                <img src={el.pic} alt="profile" />
                {el?.fullname}
              </div>

              <li>
                <textarea
                  className="gpost"
                  value={el.post}
                  onChange={(e) => handlePostChange(e, el.id)} // Update state correctly
                ></textarea>
                <div className="btns">
                  {el.author === localStorage.getItem("author") ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        mutateDelete(el.id);
                      }} // Trigger delete mutation
                    >
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            </section>
          </article>
        </ul>
      ))}
      <PAGINATION
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </>
  );
}

export default FEED;
