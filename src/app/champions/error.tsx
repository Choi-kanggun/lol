"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        챔피언 불러오기 에러 발생!
      </h1>
      <p className="text-lg text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-yellow-300 transition"
      >
        다시 시도하기
      </button>
    </section>
  );
};

export default Error;
