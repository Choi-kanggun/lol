import { ChampionType } from "@/types/Champion";
import { Item } from "@/types/Item";

const endPoint = "https://ddragon.leagueoflegends.com/cdn";
const versionApi = `https://ddragon.leagueoflegends.com/api/versions.json`;
export const fetchVersion = async (): Promise<string> => {
  try {
    const response = await fetch(`${versionApi}`);
    if (!response.ok) {
      throw new Error(`버전 데이터 요청 실패: ${response.status}`);
    }
    const data: string = await response.json();
    return data[0];
  } catch (err) {
    console.error(err);
    return "";
  }
};

export const fetchChampion = async (): Promise<ChampionType[] | undefined> => {
  try {
    const version = await fetchVersion();
    const response = await fetch(
      `${endPoint}/${version}/data/ko_KR/champion.json`,
      {
        next: { revalidate: 86400 },
      }
    );
    if (!response.ok) {
      throw new Error(`챔피언 데이터 요청 실패: ${response.status}`);
    }
    const { data }: { data: ChampionType[] } = await response.json();
    return Object.values(data);
  } catch (err) {
    console.error(err);
  }
};

export const fetchChampionDetail = async (
  id: string
): Promise<{ data: Record<string, ChampionType> } | undefined> => {
  try {
    const version = await fetchVersion();
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

export const fetchItem = async (): Promise<Item[]> => {
  try {
    const version = await fetchVersion();
    const response = await fetch(`${endPoint}/${version}/data/ko_KR/item.json`);

    if (!response.ok) {
      throw new Error(`아이템 데이터 요청: ${response.status}`);
    }

    const { data }: { data: Item[] } = await response.json();
    const items: Item[] = Object.values(data);
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};
