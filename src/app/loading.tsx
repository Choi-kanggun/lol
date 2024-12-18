import React from "react";

const Loading = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600">페이지를 불러오는 중...</p>
      </div>
    </section>
  );
};

export default Loading;
