import ChatInput from "@components/chat-input";
import Comment from "@components/comment";
import Layout from "@components/layout";
import PostDetail from "@components/post-detail";

const Post = () => {
  return (
    <Layout title="그루브무단투기" hideNav canGoBack>
      <div className="flex flex-col p-4 gap-4">
        <PostDetail />
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="text-sm font-semibold pb-3">댓글 (3)</h3>
          <Comment comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sint." />
          <Comment
            comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              at, voluptatum unde minima eius labore itaque explicabo odio
              libero? Reiciendis accusantium recusandae illum quos. Consectetur
              quisquam veniam obcaecati dicta excepturi molestias praesentium
              alias ut, voluptatibus vitae corrupti rerum, totam esse."
          />
          <Comment comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni ea et laborum voluptatibus dolorum obcaecati! Assumenda iste sunt doloremque!" />
        </div>
      </div>
      <ChatInput />
    </Layout>
  );
};

export default Post;
