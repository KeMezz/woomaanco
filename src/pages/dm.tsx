import Layout from "@components/layout";

const DM = () => {
  return (
    <Layout title="다이렉트 메시지" subtitle="DM">
      <section className="max-w-2xl mx-auto">
        <div className="flex flex-col m-4 gap-3">
          {Array.from({ length: 9 }, (_, i) => i).map((i) => (
            <div
              key={i}
              className="p-4 flex bg-white gap-4 items-center shadow-sm rounded-lg"
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
        </div>
      </section>
    </Layout>
  );
};

export default DM;
