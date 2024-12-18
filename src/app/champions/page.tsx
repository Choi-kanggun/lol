import { ChampionType } from "@/types/Champion";
import { fetchChampion, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

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
      {/*챔피언 리스트*/}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((champ) => (
          <Link href={`/champions/${champ.id}`} key={champ.id}>
            <li className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
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

export default ChampionsPage;
