import Layout from "@components/layout";
import PostDetail from "@components/post-detail";
import Link from "next/link";
import { useRouter } from "next/router";

const Community = () => {
  const router = useRouter();
  console.log(router.query.communityId);
  return (
    <Layout subtitle="커뮤니티" title="그루브무단투기" hideNav canGoBack>
      <div className="flex flex-col gap-4 sm:px-6 m-4">
        {Array.from({ length: 3 }, (_, i) => i).map((i) => (
          <Link key={i} href={`/${router.query.communityId}/${i}`}>
            <PostDetail />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Community;
