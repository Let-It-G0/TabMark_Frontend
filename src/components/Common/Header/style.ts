import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: calc(100% - 312px);
  height: 80px;
  position: fixed;
  top: 0;
  left: 312px;
  background-color: #f9fafb;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.form`
  width: 550px;
  height: 58px;
  background-color: rgba(29, 30, 90, 1);
  border-radius: 25px;

  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 20px 0 30px;

  button {
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

export const SearchInput = styled.input`
  width: calc(100% - 40px);
  height: 80%;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  &::placeholder {
    color: #fff;
  }
`;

export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
