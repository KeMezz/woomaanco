import { NextPage } from "next";

const Enter: NextPage = () => {
  return (
    <main className="max-w-2xl mx-auto">
      <section className="flex p-8 my-16">
        <h1 className="text-4xl font-bold leading-snug">
          <b className="text-rose-400">우</b>리가
          <br />
          <b className="text-rose-400">만</b>드는
          <br />
          <b className="text-rose-400">코</b>뮤니티
        </h1>
      </section>
      <form className="flex flex-col gap-4 p-8">
        <input
          type="email"
          placeholder="이메일 주소"
          className="appearance-none w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 px-4 py-2"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="appearance-none w-full border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 px-4 py-2"
        />
        <button className="bg-rose-500 py-2 rounded-md text-white hover:bg-rose-600 transition-colors">
          로그인
        </button>
      </form>
      <div className="px-8 flex justify-center">
        <p className="text-sm text-gray-500">
          아직 우만코 계정이 없나요?{" "}
          <span className="underline text-rose-400">회원가입 하기</span>
        </p>
      </div>
    </main>
  );
};

export default Enter;
