import { ChampionType } from "@/types/Champion";
import { Item } from "@/types/Item";
import delay from "./delay";

const endPoint = "https://ddragon.leagueoflegends.com/cdn";
const versionApi = `https://ddragon.leagueoflegends.com/api/versions.json`;

// 버전 데이터를 가져오는 API
export const fetchVersion = async (): Promise<string> => {
  try {
    await delay(2000);
    const response = await fetch(`${versionApi}`);
    if (!response.ok) {
      throw new Error(`버전 데이터 요청 실패: ${response.status}`);
    }
    const data: string = await response.json();

    // 최신 버전 반환
    return data[0];
  } catch (err) {
    console.error(err);
    return "";
  }
};

// 챔피언 데이터를 가져오는 API
export const fetchChampion = async (): Promise<ChampionType[] | undefined> => {
  try {
    await delay(2000);
    const version = await fetchVersion(); // 최신 버전을 가져옴
    const response = await fetch(
      `${endPoint}/${version}/data/ko_KR/champion.json`,
      {
        next: { revalidate: 86400 }, // 캐시를 24시간(86400초)마다 갱신
      }
    );
    if (!response.ok) {
      throw new Error(`챔피언 데이터 요청 실패: ${response.status}`);
    }
    const { data }: { data: ChampionType[] } = await response.json();
    return Object.values(data); // 데이터 값들을 배열 형태로 반환
  } catch (err) {
    console.error(err);
  }
};

// 특정 챔피언의 상세 정보를 가져오는 API
export const fetchChampionDetail = async (
  id: string
): Promise<{ data: Record<string, ChampionType> } | undefined> => {
  try {
    await delay(2000);
    const version = await fetchVersion(); // 최신 버전을 가져옴
    const response = await fetch(
      `${endPoint}/${version}/data/ko_KR/champion/${id}.json`
    );

    if (!response.ok) {
      throw new Error(`챔피언 디테일 데이터 요청 실패: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

// 아이템 데이터를 가져오는 API
export const fetchItem = async (): Promise<Item[]> => {
  try {
    await delay(2000);
    const version = await fetchVersion(); // 최신 버전을 가져옴
    const response = await fetch(`${endPoint}/${version}/data/ko_KR/item.json`);

    if (!response.ok) {
      throw new Error(`아이템 데이터 요청: ${response.status}`);
    }

    const { data }: { data: Item[] } = await response.json();
    const items: Item[] = Object.values(data);
    return items; // 아이템 배열 반환
  } catch (err) {
    console.error(err);
    return [];
  }
};
