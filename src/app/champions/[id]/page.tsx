import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

// Props 타입 정의
type Props = {
  params: {
    id: string;
  };
};

// 동적으로 메타데이터를 생성하는 함수
export const generateMetadata = async ({ params }: Props) => {
  const response = await fetchChampionDetail(params.id);
  // 데이터가 없는 경우 기본 메타데이터 반환
  if (!response) {
    return {
      title: "챔피언 디테일 정보",
      description: "데이터를 불러올 수 없습니다.",
    };
  }
  const { data } = response;
  const championKey = Object.keys(data)[0];
  const champion = data[championKey];

  return {
    title: `${champion.name} - ${champion.title}`, // 페이지 제목
    description: champion.blurb, // 챔피언 설명
    openGraph: {
      title: `${champion.name} - ${champion.title}`, // Open Graph 제목
      description: champion.blurb, // Open Graph 설명
    },
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const [response, version] = await Promise.all([
    fetchChampionDetail(params.id),
    fetchVersion(),
  ]);

  if (!response) {
    return (
      <div className="text-center text-gray-800 dark:text-gray-200">
        챔피언 디테일 데이터를 불러올 수 없습니다.
      </div>
    );
  }

  const { data } = response;
  const championKey = Object.keys(data)[0];
  const champion = data[championKey];

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

export default ChampionDetailPage;
