import { Item } from "@/types/Item";
import Image from "next/image";

const ItemList = ({
  items,
  version,
}: {
  items: Pick<Item, "name" | "plaintext" | "image" | "gold">[];
  version: string | undefined;
}) => {
  return (
    <div>
      {/* 아이템 리스트 */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <li
            key={item.image.full}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-6"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt={item.name}
              width={100}
              height={100}
              className="rounded-full border-4 border-gray-300 dark:border-gray-700"
              loading="lazy"
            />
            <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
              {item.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2 text-center">
              {item.plaintext || "아이템 설명이 없습니다."}
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              💰 {item.gold.base} Gold
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
