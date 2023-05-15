import Layout from "@components/layout";

const Trending = () => {
  return (
    <Layout title="커뮤니티 홍보">
      <section className="flex flex-col gap-4 max-w-2xl mx-auto">
        <div className="flex flex-col gap-4 m-4">
          <div className="p-4 flex gap-4 items-center bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold">커뮤니티 이름</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                nobis?
              </p>
              <p className="text-xs mt-3">멤버 12</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trending;
