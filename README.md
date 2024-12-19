# LOL App


![image](https://github.com/user-attachments/assets/20fb68c6-105f-44af-972d-77a3cbf3eff8)


<br/>

# 📌 프로젝트 소개
- Riot Games의 API와 Data Dragon을 활용하여 LOL의 다양한 데이터를 조회하고, 이를 기반으로 웹 애플리케이션을 직접 만들어 보기
- Next.js와 TypeScript를 사용하여 프론트엔드 개발의 기본기 다지기
- 타입 선언 방법, useState에서 제네릭 사용, 유틸리티 타입 활용
- 동적 라우팅, App Router, 레이아웃 구성, Route Handler 등 Next.js의 핵심 기능 다루기

# 🕹️ 프로젝트 기능
### 1️⃣ 성능 최적화
- Next.js의 <image> 컴포넌트를 활용하여 이미지 로딩 최적화 및 자동 서식 변경 적용
- Lazy Loading을 적용하여 초기 로딩 속도 개선
  
### 2️⃣ Tanstack Query를 활용한 API 호출
- 클라이언트 컴포넌트에서 Tanstack query를 활용하여 로딩 및 에러 처리를 구현
- staleTime, enabled 등의 옵션을 활용하여 효율적인 데이터 관리
  
### 3️⃣ 각 페이지 구현 및 렌더링 방식 적용
- 챔피언 목록 페이지 : 렌더링 방식 : ISR, 재검증 시간(revalidate): 하루(86400초)
- 챔피언 상세 페이지 : 동적 라우팅과 메타데이터 적용하여 SEO 향상
- 챔피언 로테이션 페이지 : 렌더링 방식 : CSR, Tanstack Query로 상태관리 및 API Route Handlers 활용
- 아이템 목록 페이지 : 렌더링 방식 : SSG

### 4️⃣ 로딩 및 에러 핸들링
- React Suspense와 loading.tsx를 사용하여 서버 컴포넌트의 로딩 상태 관리
- global-error.tsx를 생성하여 전역 에러를 관리하고 error.tsx 파일을 생성하여 각 경로에서 발생하는 에러를 사용자 친화적인 메시지로 처리
- 에러 발생 시 리셋 기능으로 재시도 구현
  
### 5️⃣ 반응형
- 모바일 화면 크기에서 네비게이션 햄버거 적용 및 Grid를 활용하여 반응형 적용


### 6️⃣ 다크모드
- 다크모드 기능을 적용하여 토글로 테마 전환 가능

<br/>

# 🎥 시연 영상
<details>
<summary>1. 각 페이지 소개</summary>
<div markdown="1">

https://github.com/user-attachments/assets/a369a1c0-8c5b-4546-bae0-709c7b3c0bbe

</div>
</details>
<details>
<summary>2. 다크모드</summary>
<div markdown="1">
  
https://github.com/user-attachments/assets/856926c4-e17c-4d31-9e3c-496833960e90

</div>
</details>
<details>
<summary>3. 반응형</summary>
<div markdown="1">

https://github.com/user-attachments/assets/fcaf7470-9e4b-47a1-83f3-88cd45a3e4da


</div>
</details>

<br />

<br/>

# 🖥️ Technologies & Tools (FE) 🖥️
<div>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/Typescript-blue">
<img src="https://img.shields.io/badge/Next.js-black">
<img src="https://img.shields.io/badge/tanstackquery-orange">
<img src="https://img.shields.io/badge/tailwindcss-blue">
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>

</div>

<br/>

# 🌳 프로젝트 구조
```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┣ 📜page.tsx
 ┃ ┗ 📜providers.tsx
 ┣ 📂components
 ┃ ┣ 📜championList.tsx
 ┃ ┣ 📜detail.tsx
 ┃ ┣ 📜itemList.tsx
 ┃ ┣ 📜rotationList.tsx
 ┃ ┗ 📜theme.tsx
 ┣ 📂public
 ┃ ┣ 📜champions.png
 ┃ ┣ 📜items.webp
 ┃ ┗ 📜rotation.webp
 ┣ 📂styles
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜ChampionRotation.ts
 ┃ ┗ 📜Item.ts
 ┗ 📂utils
 ┃ ┣ 📜delay.ts
 ┃ ┗ 📜serverApi.ts
```

# ✔ 트러블 슈팅
https://velog.io/@kg4889/24.12.18-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-lol-API-%EA%B3%BC%EC%A0%9C
https://velog.io/@kg4889/24.12.17-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
