import useHideNavHeader from "../../../../hooks/Common/useHideNavHeader";
import * as S from "./style";
import google from "../../../../assets/google.svg";
import introduce from "../../../../assets/introduce.svg";

export default function SignIn() {
  useHideNavHeader();
  return (
    <S.SignInContainer>
      <S.SignInIntroduce src={introduce} alt="이미지 없음" />
      <S.SignInButton>
        <img src={google} alt="이미지 없음" />
        <p>Google 간편 로그인</p>
      </S.SignInButton>
    </S.SignInContainer>
  );
}
