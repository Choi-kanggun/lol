import { Item } from "@/types/Item";
import { fetchItem, fetchVersion } from "@/utils/serverApi";
import Image from "next/image";

export const dynamic = "force-static";

const ItemsPage = async () => {
  const items: Item[] = await fetchItem();
  const version: string = await fetchVersion();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 p-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12 drop-shadow-lg">
        아이템 목록
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <li
            key={item.image.full}
            className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-400"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {item.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1 mb-2 text-center">
              {item.plaintext || "아이템 설명이 없습니다."}
            </p>
            <p className="text-lg font-semibold text-blue-600">
              💰 {item.gold.base} Gold
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
