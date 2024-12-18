import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";
import Theme from "@/components/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League Of Legends App",
  description: "Riot Games API를 활용한 리그 오브 레전드 정보 앱",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className="bg-gray-100">
      <body className={`bg-gray-100 text-gray-800 ${inter.className}`}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-md text-white dark:bg-gray-800 dark:text-gray-100">
          <nav className="flex justify-center">
            <ul className="flex flex-row space-x-24 py-4">
              <li>
                <Link
                  className="hover:text-yellow-300 font-semibold text-lg transition duration-200"
                  href={"/"}
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 font-semibold text-lg transition duration-200"
                  href={"/champions"}
                >
                  챔피언 목록
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 font-semibold text-lg transition duration-200"
                  href={"/items"}
                >
                  아이템 목록
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 font-semibold text-lg transition duration-200"
                  href={"/rotation"}
                >
                  로테이션 챔피언
                </Link>
              </li>
            </ul>
            <Theme />
          </nav>
        </header>
        <Providers>
          <main className="pt-20 pb-24 min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 px-4 sm:px-8 md:px-16 lg:px-32">
            {children}
          </main>
        </Providers>
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-gray-300 py-2 sm:py-4 px-4 text-center text-xs sm:text-sm dark:bg-gray-900 dark:text-gray-400">
          [Your Product Name] is not endorsed by Riot Games and does not reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
