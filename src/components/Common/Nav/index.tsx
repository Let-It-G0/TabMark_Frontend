import * as S from "./style";
import logo from "../../../assets/logo.svg";
import {
  NAV_ITEMS,
  NAV_MYTAGS_ITMES,
} from "../../../constants/Nav/nav.constant";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isTagSelect, setIsTagSelect] = useState(-1);

  return (
    <S.NavContainer>
      <S.LogoIcon
        src={logo}
        onClick={() => (window.location.href = "/recently")}
        alt="이미지 없음"
      />

      <S.NavUl>
        {NAV_ITEMS.map((item) => (
          <>
            <S.NavLi
              key={item.id}
              is_select={(pathname === item.link).toString()}
              onClick={() => {
                navigate(item.link);
              }}
            >
              {item.name}
            </S.NavLi>
          </>
        ))}
        {pathname === "/mytags" && (
          <S.NavMyTagsUl>
            {NAV_MYTAGS_ITMES.map((item) => (
              <S.NavMyTagsli
                key={item.id}
                is_select={(item.id === isTagSelect).toString()}
                onClick={() => setIsTagSelect(item.id)}
              >
                {item.tag}
              </S.NavMyTagsli>
            ))}
          </S.NavMyTagsUl>
        )}
      </S.NavUl>
    </S.NavContainer>
  );
}
