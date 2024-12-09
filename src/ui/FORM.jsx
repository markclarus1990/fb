import "./FORM.css";
import INPUT from "./INPUT";
import { useForm } from "react-hook-form";
import { createPost } from "../services/Blogs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

  function onSubmit(data) {
    mutate(data);
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <INPUT register={register} />
    </form>
  );
}

export default FORM;
