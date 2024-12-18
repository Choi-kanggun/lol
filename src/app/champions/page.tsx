import ChampionList from "@/components/championList";
import { fetchChampion, fetchVersion } from "@/utils/serverApi";
import { Suspense } from "react";

// 동적으로 메타데이터를 생성하는 함수
export const generateMetadata = async () => {
  //  기본 메타데이터 반환
  return {
    title: "챔피언 리스트",
    description: "리그 오브 레전드의 모든 챔피언 목록",
  };
};

const ChampionsPage = async () => {
  const [data, version] = await Promise.all([fetchChampion(), fetchVersion()]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-32 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-700 dark:text-gray-100 drop-shadow-md">
        챔피언 목록
      </h1>
      <Suspense
        fallback={<div className="text-center">챔피언 목록 로딩 중...</div>}
      >
        <ChampionList data={data} version={version} />
      </Suspense>
    </div>
  );
};

export default ChampionsPage;
