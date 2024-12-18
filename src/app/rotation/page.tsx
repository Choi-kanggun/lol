"use client";

import RotationList from "@/components/rotationList";
import { ChampionType } from "@/types/Champion";
import { fetchVersion } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";

// 로테이션 챔피언 타입 정의
export type RotationChampionType = Pick<
  ChampionType,
  "id" | "name" | "title" | "image"
>;

// 로테이션 챔피언 데이터를 가져오는 함수
const fetchRotationChampion = async (): Promise<ChampionType[]> => {
  const response = await fetch("/api/rotation");

  if (!response.ok) {
    throw new Error("로테이션 챔피언 정보 불러오기 에러");
  }
  return response.json();
};

const RotationPage = () => {
  // React Query를 사용하여 버전 데이터를 가져옴
  const {
    data: version,
    isPending: isVersionPending,
    isError: isVersionError,
    error: versionError,
  } = useQuery<string, Error>({
    queryKey: ["version"],
    queryFn: fetchVersion, // 버전 정보를 가져오는 함수
    staleTime: 1000 * 60 * 5, // 5분간 데이터 신선함 유지
    refetchOnWindowFocus: false, // 포커스 시 재요청 방지
  });

  // React Query를 사용하여 로테이션 챔피언 데이터를 가져옴
  const {
    data: rotationChampions,
    isPending: isRotationPending,
    isError: isRotationError,
    error: rotationError,
  } = useQuery<RotationChampionType[]>({
    queryKey: ["rotationChampion"],
    queryFn: fetchRotationChampion, // 로테이션 챔피언 정보를 가져오는 함수
    enabled: !!version, // 버전 데이터가 있을 때만 실행
    staleTime: 1000 * 60 * 5, // 5분간 데이터 신선함 유지
    refetchOnWindowFocus: false, // 포커스 시 재요청 방지
  });

  if (isVersionPending || isRotationPending) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">페이지를 불러오는 중...</p>
        </div>
      </section>
    );
  }

  if (isRotationError) {
    return (
      <div className="text-center text-red-500 mt-8">
        에러: {rotationError.message}
      </div>
    );
  }
  if (isVersionError) {
    return (
      <div className="text-center text-red-500 mt-8">
        에러 : {versionError.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-32 py-12">
      {/* 페이지 제목 */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-700 dark:text-gray-100 drop-shadow-md">
        이번 주 로테이션 챔피언
      </h1>
      {/* 로테이션 챔피언 리스트 */}

      <RotationList champions={rotationChampions} version={version} />
    </div>
  );
};

export default RotationPage;
