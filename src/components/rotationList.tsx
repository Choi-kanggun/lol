import { RotationChampionType } from "@/app/rotation/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const RotationList = ({
  champions,
  version,
}: {
  champions: RotationChampionType[] | undefined;
  version: string | undefined;
}) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {champions?.map((champ) => (
          <Link key={champ.id} href={`/champions/${champ.id}`}>
            <li className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-6">
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

export default RotationList;
