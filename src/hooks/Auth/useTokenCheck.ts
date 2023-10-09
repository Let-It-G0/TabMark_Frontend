import { useEffect } from "react";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../../libs/Token/Token";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useNavigate } from "react-router-dom";

const useTokenCheck = () => {
  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokens = () => {
      if (
        !Token.getToken(ACCESS_TOKEN_KEY) ||
        !Token.getToken(REFRESH_TOKEN_KEY)
      ) {
        rollingToast("로그인이 필요한 기능입니다.", "warning");
        navigate("/signin");
      }
    };
    checkTokens();
  }, [navigate]);
};

export default useTokenCheck;
