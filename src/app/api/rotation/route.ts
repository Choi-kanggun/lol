import { ChampionType } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { fetchChampion } from "@/utils/serverApi";
import { NextResponse } from "next/server";

const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY!;

export async function GET() {
  if (!apiKey) {
    return NextResponse.json({ error: "API키 에러 발생" }, { status: 500 });
  }

  try {
    // Riot API를 통해 챔피언 로테이션 데이터를 가져옴
    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`챔피언 로테이션 요청 실패: ${response.status}`);
    }
    const rotationIds: ChampionRotation = await response.json();
    const champions: ChampionType[] | undefined = await fetchChampion();

    const rotationChampions: ChampionType[] =
      champions?.filter((champ) =>
        rotationIds.freeChampionIds.includes(Number(champ.key))
      ) || [];
    return NextResponse.json(rotationChampions);
  } catch (err) {
    // 에러 발생 시 로그 출력 및 에러 응답 반환
    console.error(err);
    return NextResponse.json(
      { error: "챔피언 데이터 불러오기 에러" },
      { status: 500 }
    );
  }
}
