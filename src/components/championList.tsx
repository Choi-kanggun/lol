import { ChampionType } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const ChampionList = ({
  data,
  version,
}: {
  data: Pick<ChampionType, "id" | "name" | "image" | "title">[] | undefined;
  version: string | undefined;
}) => {
  return (
    <div>
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

export default ChampionList;
