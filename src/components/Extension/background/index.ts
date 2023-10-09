// background.ts

// 쿠키를 읽는 함수
function getCookie(name: string): Promise<string | null> {
  return new Promise((resolve) => {
    // 'url' 속성을 추가하여 'chrome.cookies.get' 함수에 유효한 인수 전달
    chrome.cookies.get({ url: "http://localhost:3000", name }, (cookie) => {
      alert(cookie?.value || null);
      resolve(cookie?.value || null);
    });
  });
}

// 쿠키를 설정하는 함수
function setCookie(name: string, value: string): Promise<void> {
  return new Promise((resolve) => {
    chrome.cookies.set(
      {
        url: "http://localhost:3000", // 웹사이트 URL 수정
        name,
        value,
      },
      () => {
        resolve();
      }
    );
  });
}

// 크롬 확장이 켜질 때 실행되는 코드
// chrome.runtime.onStartup.addListener(async () => {
//   // 어세스 토큰 쿠키 확인
//   const accessToken = await getCookie("access_token");
//   if (!accessToken) {
//     // 어세스 토큰이 없으면 일반 메인 페이지로 이동
//     chrome.tabs.create({ url: "http://localhost:3000" }); // 웹사이트 URL 수정
//   }
// });

export { getCookie, setCookie };
