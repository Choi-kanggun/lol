import Image from "next/image";
import Link from "next/link";
import champions from "@/public/champions.png";
import items from "@/public/items.webp";
import rotation from "@/public/rotation.webp";
export default async function Home() {
  return (
    <section className="min-h-[calc(100vh-134px)] bg-blue-100 px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-center text-lg mb-10 text-gray-700">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          href={"/champions"}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src={champions}
            width={500}
            height={400}
            alt="champions"
            className="rounded-lg object-cover w-full h-[400px] hover:brightness-110 transition-all duration-300"
          />

          <span className="mt-4 mb-4 text-xl font-semibold text-blue-600 hover:text-blue-800">
            챔피언 목록 보기
          </span>
        </Link>
        <Link
          href={"/items"}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src={items}
            width={500}
            height={400}
            alt="items"
            className="rounded-lg object-cover w-full h-[400px] hover:brightness-110 transition-all duration-300"
          />
          <span className="mt-4 mb-4 text-xl font-semibold text-blue-600 hover:text-blue-800">
            아이템 목록 보기
          </span>
        </Link>
        <Link
          href={"/rotation"}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src={rotation}
            width={500}
            height={400}
            alt="rotation"
            className="rounded-lg object-cover w-full h-[400px] hover:brightness-110 transition-all duration-300"
          />
          <span className="mt-4 mb-4 text-xl font-semibold text-blue-600 hover:text-blue-800">
            금주 로테이션 확인
          </span>
        </Link>
      </div>
    </section>
  );
}
