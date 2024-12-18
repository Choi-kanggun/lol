const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-gray-300 dark:border-gray-500"></div>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          데이터를 불러오는 중입니다...
        </p>
      </div>
    </div>
  );
};
export default Loading;
