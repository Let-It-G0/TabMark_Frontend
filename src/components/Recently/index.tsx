import * as S from "../../styles/common.style";
import tistoryIcon from "../../assets/tistoryIcon.svg";
import { SETUP_ITEMS } from "../../constants/Common/common.constant";

export default function Recently() {
  return (
    <S.CommonContainer>
      <S.CommonWrapper>
        {Array.from({ length: 12 }).map((_, idx) => (
          <S.TagsItem key={idx}>
            <S.Favicon src={tistoryIcon} alt="이미지 없음" />
            <S.Content>
              <S.TitleAndRegistAt>
                <S.Title>vite.js 입문</S.Title>
                <S.RegistAt>2023.09.12</S.RegistAt>
              </S.TitleAndRegistAt>

              <S.Link>https://www.youtube.com</S.Link>

              <S.SetUpContainer>
                {SETUP_ITEMS.map((item) => (
                  <img key={item.id} src={item.icon} alt="이미지 없음" />
                ))}
              </S.SetUpContainer>

              <S.TagsContainer>
                {Array.from({ length: 15 }).map((_, idx) => (
                  <li key={idx}>Frontend</li>
                ))}
              </S.TagsContainer>
            </S.Content>
          </S.TagsItem>
        ))}
      </S.CommonWrapper>
    </S.CommonContainer>
  );
}
