import { ChampionType } from "@/types/Champion";
import Image from "next/image";

const Detail = ({
  champion,
  version,
}: {
  champion: Omit<ChampionType, "key" | "id">;
  version: string | undefined;
}) => {
  return (
    <div className="min-h-[calc(100vh-134px)] bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        {/* 챔피언 이름과 타이틀 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-2">
            {champion.name}
          </h1>
          <span className="text-gray-500 dark:text-gray-400 text-lg italic">
            {champion.title}
          </span>
        </div>

        {/* 챔피언 이미지 */}
        <div className="flex justify-center mb-6">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
            alt={champion.name}
            width={200}
            height={200}
            className="rounded-lg shadow-md border-2 border-gray-300 dark:border-gray-700"
            loading="lazy"
          />
        </div>

        {/* 챔피언 설명 */}
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed text-justify mb-6">
          {champion.blurb}
        </p>

        {/* 스탯 정보 */}
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center mb-4">
            스탯
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-300">
            <p className="text-center">
              <span className="font-bold text-gray-600 dark:text-gray-400">
                공격력:
              </span>{" "}
              {champion.info.attack}
            </p>
            <p className="text-center">
              <span className="font-bold text-gray-600 dark:text-gray-400">
                방어력:
              </span>{" "}
              {champion.info.defense}
            </p>
            <p className="text-center">
              <span className="font-bold text-gray-600 dark:text-gray-400">
                마법력:
              </span>{" "}
              {champion.info.magic}
            </p>
            <p className="text-center">
              <span className="font-bold text-gray-600 dark:text-gray-400">
                난이도:
              </span>{" "}
              {champion.info.difficulty}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
