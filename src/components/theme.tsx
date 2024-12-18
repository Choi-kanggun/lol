"use client";

import { useEffect, useState } from "react";

const Theme = () => {
  // 다크모드 관리 상태
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 컴포넌트가 마운트될 때 실행되어 저장된 테마를 확인하고 적용
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const element = document.documentElement;

    // 저장된 테마가 "dark"인 경우 다크 모드를 적용
    if (savedTheme === "dark") {
      element.classList.add("dark"); // dark 클래스를 추가하여 다크 모드 활성화
      setIsDarkMode(true); // 상태를 다크 모드로 설정
    } else {
      // 저장된 테마가 없거나 dark가 아닌 경우 라이트 모드로 설정
      element.classList.remove("dark"); // dark 클래스를 제거하여 라이트 모드 활성화
      setIsDarkMode(false); // 상태를 라이트 모드로 설정
    }
  }, []);

  // 테마를 전환하는 함수
  const toggleTheme = () => {
    const element = document.documentElement;
    if (element.classList.contains("dark")) {
      // dark 클래스를 제거하여 라이트 모드로 전환
      element.classList.remove("dark");
      localStorage.setItem("theme", "light"); // localStorage에 라이트 모드로 저장
      setIsDarkMode(false); // 상태를 라이트 모드로 설정
    } else {
      // 라이트 모드가 활성화된 경우
      element.classList.add("dark"); // dark 클래스를 추가하여 다크 모드로 전환
      localStorage.setItem("theme", "dark"); // localStorage에 다크 모드로 저장
      setIsDarkMode(true); // 상태를 다크 모드로 설정
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800 dark:bg-gray-800 text-white dark:text-gray-200 rounded-lg transition"
    >
      {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default Theme;
