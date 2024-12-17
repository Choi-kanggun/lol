"use client";

import { ChampionType } from "@/types/Champion";
import { fetchVersion } from "@/utils/serverApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

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
    isPending: isVersionPending,
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
    isPending: isRotationPending,
    isError: isRotationError,
    error: rotationError,
  } = useQuery<ChampionType[]>({
    queryKey: ["rotationChampion"],
    queryFn: fetchRotationChampion,
    enabled: !!version,
    staleTime: 1000 * 60 * 5, // 5분간 데이터 신선함 유지
    refetchOnWindowFocus: false, // 포커스 시 재요청 방지
  });

  if (isRotationPending || isVersionPending) {
    return <div className="text-center text-lg mt-8">Loading...</div>;
  }

  if (isRotationError) {
    return (
      <div className="text-center text-red-500">
        에러: {rotationError.message}
      </div>
    );
  }
  if (isVersionError) {
    return (
      <div className="text-center text-red-500">
        에러 : {versionError.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-lg">
        이번 주 로테이션 챔피언
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rotationChampions?.map((champ) => (
          <Link key={champ.id} href={`/champions/${champ.id}`}>
            <li className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-6">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
                alt={champ.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-400"
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                  {champ.name}
                </h2>
                <p className="text-sm text-gray-600 italic">{champ.title}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
