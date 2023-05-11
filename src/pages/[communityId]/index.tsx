import Layout from "@components/layout";
import { useRouter } from "next/router";

const Community = () => {
  const router = useRouter();
  return (
    <Layout subtitle="커뮤니티" title="그루브무단투기" hideNav canGoBack>
      <h1>{router.query.communityId}</h1>
    </Layout>
  );
};

export default Community;
