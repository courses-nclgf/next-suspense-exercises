import Comment from "@/components/Comment";
import { getComments } from "@/helpers/interview-helpers";

export const Comments = async () => {
  const comments = await getComments();

  if (!comments) return null;

  return comments.map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};
