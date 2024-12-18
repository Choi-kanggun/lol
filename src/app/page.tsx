import Image from "next/image";
import Link from "next/link";
import champions from "@/public/champions.png";
import items from "@/public/items.webp";
import rotation from "@/public/rotation.webp";

const Home = async () => {
  return (
    <section className="min-h-[calc(100vh-200px)] bg-gray-100 dark:bg-gray-900 px-32 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-700 dark:text-gray-100 drop-shadow-md">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-center text-lg mb-12 text-gray-500 dark:text-gray-300">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link
          href={"/champions"}
          className="group flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <Image
            src={champions}
            width={500}
            height={300}
            alt="champions"
            className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="py-4 text-center text-xl font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
            챔피언 목록 보기
          </span>
        </Link>
        <Link
          href={"/items"}
          className="group flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <Image
            src={items}
            width={500}
            height={300}
            alt="items"
            className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-300"
          />
          <span className="py-4 text-center text-xl font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
            아이템 목록 보기
          </span>
        </Link>
        <Link
          href={"/rotation"}
          className="group flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <Image
            src={rotation}
            width={500}
            height={300}
            alt="rotation"
            className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-300"
          />
          <span className="py-4 text-center text-xl font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
            금주 로테이션 확인
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
