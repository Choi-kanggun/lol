import ItemList from "@/components/itemList";
import { fetchItem, fetchVersion } from "@/utils/serverApi";
import { Suspense } from "react";

export const dynamic = "force-static";

// 동적으로 메타데이터를 생성하는 함수
export const generateMetadata = async () => {
  //  기본 메타데이터 반환
  return {
    title: "아이템 리스트",
    description: "리그 오브 레전드의 모든 아이템 목록",
  };
};

const ItemsPage = async () => {
  // 아이템, 버전 API 함수 호출
  const [items, version] = await Promise.all([fetchItem(), fetchVersion()]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-32 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-700 dark:text-gray-100 drop-shadow-md">
        아이템 목록
      </h1>
      <Suspense fallback={<div className="text-center">아이템 로딩중...</div>}>
        <ItemList items={items} version={version} />
      </Suspense>
    </div>
  );
};

export default ItemsPage;
