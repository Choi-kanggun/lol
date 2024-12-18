"use client";

import { ChampionType } from "@/types/Champion";
import { fetchVersion } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export type RotationChampionType = Pick<
  ChampionType,
  "id" | "name" | "title" | "image"
>;

const fetchRotationChampion = async (): Promise<ChampionType[]> => {
  const response = await fetch("/api/rotation");

  if (!response.ok) {
    throw new Error("로테이션 챔피언 정보 불러오기 에러");
  }
  return response.json();
};

const RotationPage = () => {
  const {
    data: version,
    isError: isVersionError,
    error: versionError,
  } = useQuery<string, Error>({
    queryKey: ["version"],
    queryFn: fetchVersion,
    staleTime: 1000 * 60 * 5, // 5분간 데이터 신선함 유지
    refetchOnWindowFocus: false, // 포커스 시 재요청 방지
  });

  const {
    data: rotationChampions,
    isError: isRotationError,
    error: rotationError,
  } = useQuery<RotationChampionType[]>({
    queryKey: ["rotationChampion"],
    queryFn: fetchRotationChampion,
    enabled: !!version,
    staleTime: 1000 * 60 * 5, // 5분간 데이터 신선함 유지
    refetchOnWindowFocus: false, // 포커스 시 재요청 방지
  });

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
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-700 dark:text-gray-100 drop-shadow-md">
        이번 주 로테이션 챔피언
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rotationChampions?.map((champ) => (
          <Link key={champ.id} href={`/champions/${champ.id}`}>
            <li className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-6">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
                alt={champ.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-gray-300 dark:border-gray-700"
                loading="lazy"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {champ.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                  {champ.title}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
