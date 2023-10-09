import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fafb;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5rem;
`;

export const SignInIntroduce = styled.img`
  width: 515px;
  height: 335px;
`;

export const SignInButton = styled.button`
  width: 400px;
  height: 75px;

  background-color: #fff;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem 0 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;
