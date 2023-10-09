import styled from "styled-components";

export const TabMarkContainer = styled.div`
  width: 500px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
`;

export const TabMarkForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 30px;
  outline: none;
  border: none;
  background-color: rgba(29, 30, 90, 1);
  color: #fff;
  border-radius: 18px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  padding-left: 1rem;
  &::placeholder {
    color: #fff;
  }
`;

export const Address = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
`;

export const SaveButton = styled.button`
  width: 60px;
  height: 25px;
  border: 1px solid #ddd;
  color: rgba(29, 30, 90, 1);
  font-style: italic;
  font-weight: 900;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
