import Bubble from "@components/bubble";
import ChatInput from "@components/chat-input";
import Layout from "@components/layout";

const DMDetail = () => {
  return (
    <Layout title="hyeongjin" subtitle="DM" hideNav canGoBack>
      <section className="flex flex-col pt-8 p-4 gap-4">
        <Bubble message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ex?" />
        <Bubble
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam omnis, veritatis delectus iusto soluta doloremque quisquam vero quos dignissimos placeat reiciendis exercitationem magnam dolore sequi necessitatibus adipisci nesciunt ipsa sint libero quasi dolores veniam asperiores in ut. Autem aliquam suscipit iusto, consequatur hic eius corporis aspernatur veritatis velit. Ipsum, cumque?"
          reversed
        />
        <Bubble message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Bubble message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ex?" />
        <Bubble
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam omnis, veritatis delectus iusto soluta doloremque quisquam vero quos dignissimos placeat reiciendis exercitationem magnam dolore sequi necessitatibus adipisci nesciunt ipsa sint libero quasi dolores veniam asperiores in ut. Autem aliquam suscipit iusto, consequatur hic eius corporis aspernatur veritatis velit. Ipsum, cumque?"
          reversed
        />
        <Bubble message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Bubble message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ex?" />
        <Bubble
          message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam omnis, veritatis delectus iusto soluta doloremque quisquam vero quos dignissimos placeat reiciendis exercitationem magnam dolore sequi necessitatibus adipisci nesciunt ipsa sint libero quasi dolores veniam asperiores in ut. Autem aliquam suscipit iusto, consequatur hic eius corporis aspernatur veritatis velit. Ipsum, cumque?"
          reversed
        />
        <Bubble message="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      </section>
      <ChatInput />
    </Layout>
  );
};

export default DMDetail;
