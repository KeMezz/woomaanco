import Layout from "@components/layout";
import Link from "next/link";

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
              <Link href={`/${i}`} key={i}>
                <article className="flex flex-col shadow-sm rounded-lg overflow-hidden">
                  <div className="w-full h-28 bg-gray-100" />
                  <div className="flex flex-col p-2 sm:p-3 gap-1 bg-white">
                    <h3 className="text-sm font-medium">그루브무단투기{i}</h3>
                    <span className="text-xs">{i + 1}명 참여중</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <button className="w-14 h-14 bg-rose-400 rounded-full flex justify-center items-center text-white fixed right-8 bottom-28 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </Layout>
  );
}
