import { ChampionType } from "@/types/Champion";
import { fetchChampion, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const ChampionsPage = async () => {
  const data: ChampionType[] | undefined = await fetchChampion();
  const version: string = await fetchVersion();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-12 drop-shadow-lg">
        챔피언 목록
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((champ) => (
          <Link href={`/champions/${champ.id}`} key={champ.id}>
            <li className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
                alt={champ.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-blue-400"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {champ.name}
                </h2>
                <p className="text-sm text-gray-600 italic mt-1">
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
