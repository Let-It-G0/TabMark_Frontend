import { useEffect, useState } from "react";
import * as S from "./style";
import { getCookie } from "../background";

export default function TabMark() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [change, setChange] = useState("");

  const handleClick = () => {
    getCookie("access_token");
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const url = activeTab?.url || "";
      setCurrentUrl(url);
    });
  }, []);

  // 현재 탭을 YouTube으로 이동합니다.
  //chrome.tabs.create({ url: "https://youtube.com" });

  return (
    <S.TabMarkContainer>
      <S.TabMarkForm>
        <S.Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setChange(e.target.value)}
          value={change}
        />
        <S.Input type="text" name="tags" placeholder="Tags" />
        <S.Address>{currentUrl}</S.Address>
        <S.SaveButton type="submit" onClick={handleClick}>
          Save
        </S.SaveButton>
      </S.TabMarkForm>
    </S.TabMarkContainer>
  );
}
