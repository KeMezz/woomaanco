import Layout from "@components/layout";

const todayString = new Date().toLocaleDateString("ko", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

export default function Home() {
  return (
    <Layout title="데일리 피드" subtitle={todayString}>
      <section className="flex flex-col gap-4 max-w-2xl mx-auto">
        <div>
          <h1 className="px-6 pt-6 pb-4 text-lg font-semibold">
            나의 관심 커뮤니티 🌟
          </h1>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 px-6">
            {Array.from({ length: 5 }, (_, i) => i).map((i) => (
              <article
                key={i}
                className="flex flex-col shadow-sm rounded-lg overflow-hidden"
              >
                <div className="w-full h-28 bg-gray-100" />
                <div className="flex flex-col p-2 sm:p-3 gap-1 bg-white">
                  <h3 className="text-sm font-medium">그루브무단투기{i}</h3>
                  <span className="text-xs">{i + 1}명 참여중</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
