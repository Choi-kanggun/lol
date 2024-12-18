import Detail from "@/components/detail";
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

  return <Detail champion={champion} version={version} />;
};

export default ChampionDetailPage;
