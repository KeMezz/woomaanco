import { NextPage } from "next";

interface CommentProps {
  comment: string;
}

const Comment: NextPage<CommentProps> = ({ comment }) => {
  return (
    <div className="flex gap-3 py-3">
      <div className="w-8 h-8 bg-slate-200 rounded-full shrink-0" />
      <p className="text-xs">{comment}</p>
    </div>
  );
};

export default Comment;
