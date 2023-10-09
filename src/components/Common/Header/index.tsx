import * as S from "./style";
import searchIcon from "../../../assets/searchIcon.svg";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.SearchContainer>
        <S.SearchInput placeholder="제목으로 검색하기" />
        <button type="submit">
          <S.SearchIcon src={searchIcon} alt="이미지 없음" />
        </button>
      </S.SearchContainer>
    </S.HeaderContainer>
  );
}
