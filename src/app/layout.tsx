import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League Of Legends App",
  description: "Riot Games API를 활용한 리그 오브 레전드 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-blue-50 text-gray-800">
        <header>
          <nav className="flex justify-center bg-blue-600 shadow-lg text-white">
            <ul className="flex flex-row space-x-12 py-4">
              <li>
                <Link
                  className="hover:text-yellow-400 font-semibold text-lg transition duration-200"
                  href={"/"}
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-400 font-semibold text-lg transition duration-200"
                  href={"/champions"}
                >
                  챔피언 목록
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-400 font-semibold text-lg transition duration-200"
                  href={"/items"}
                >
                  아이템 목록
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-400 font-semibold text-lg transition duration-200"
                  href={"/rotation"}
                >
                  로테이션 챔피언
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Providers>{children}</Providers>
        <footer className="text-center p-3 border-t border-t-black dark:border-t-white border-b-0">
      [Your Product Name] is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot
      Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
    </footer>
      </body>
    </html>
  );
}
