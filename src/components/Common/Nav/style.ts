import styled from "styled-components";

export const NavContainer = styled.div`
  width: 312px;
  height: 100vh;
  background-color: #f9fafb;
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 4rem;
  padding-top: 1rem;
`;

export const LogoIcon = styled.img`
  width: 250px;
  height: 50px;
  cursor: pointer;
`;

export const NavUl = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const NavLi = styled.li<{ is_select: string }>`
  width: 90%;
  height: 63px;

  display: flex;
  align-items: center;
  font-size: 20px;

  color: ${({ is_select }) =>
    is_select === "true" ? "#fff" : "rgba(29, 30, 90, 1)"};
  background-color: ${({ is_select }) =>
    is_select === "true" && "rgba(29, 30, 90, 1)"};
  box-shadow: ${({ is_select }) =>
    is_select === "true" && " 0 4px 8px rgba(0, 0, 0, 0.3);"};
  font-weight: 700;
  padding-left: 1rem;

  border-radius: 25px;
  cursor: pointer;
`;

export const NavMyTagsUl = styled.ul`
  width: 90%;
  max-height: 233px;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  font-size: 20px;
  padding: 10px 0 10px 2rem;

  overflow-y: scroll;
`;

export const NavMyTagsli = styled.li<{ is_select: string }>`
  cursor: pointer;
  font-weight: ${({ is_select }) => (is_select === "true" ? "900" : "700")};
  color: ${({ is_select }) => is_select === "true" && "  rgba(29, 30, 90, 1)"};
  font-size: ${({ is_select }) => is_select === "false" && "17px"};
`;
