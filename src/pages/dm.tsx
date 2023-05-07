import Layout from "@components/layout";

const DM = () => {
  return (
    <Layout title="다이렉트 메시지">
      <section className="flex flex-col max-w-2xl mx-auto pt-4 divide-y sm:divide-y-0 sm:gap-3">
        {/* <h1 className="px-6 pt-6 pb-4 text-lg font-semibold">채팅</h1> */}
        {Array.from({ length: 9 }, (_, i) => i).map((i) => (
          <div
            key={i}
            className="px-6 sm:px-4 py-3 flex bg-white gap-4 items-center sm:shadow-sm sm:mx-6 sm:rounded-lg"
          >
            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-medium">hyeongjin</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae, exercitationem.
              </p>
            </div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default DM;
