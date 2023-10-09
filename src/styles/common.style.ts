import styled from "styled-components";

export const CommonContainer = styled.div`
  width: calc(100% - 312px);
  height: calc(100vh - 80px);
  margin-top: 80px;
  margin-left: 312px;
  background-color: #f9fafb;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const CommonWrapper = styled.div`
  width: 1000px;
  height: 100%;
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: center;
`;

export const TagsItem = styled.div`
  width: 1000px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: 1px solid #ddd;

  display: flex;
  align-items: center;
  overflow-y: hidden;
  padding: 1rem 1rem 1rem 2rem;
`;

export const Favicon = styled.img`
  width: 250px;
  height: 250px;
`;

export const Content = styled.div`
  width: calc(100% - 250px);
  height: 100%;

  position: relative;
  padding-left: 3rem;
`;

export const TitleAndRegistAt = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  padding-top: 2rem;
`;

export const RegistAt = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: rgba(29, 30, 90, 1);
`;

export const Link = styled.p`
  font-size: 25px;
  margin-top: 1rem;
  cursor: pointer;

  &:active {
    color: rgba(29, 30, 90, 1);
  }
`;

export const SetUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  position: absolute;
  bottom: 0;
  right: 0;

  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

export const TagsContainer = styled.ul`
  width: 600px;
  height: 50px;
  position: absolute;
  bottom: 0;

  overflow-x: scroll;
  display: flex;
  column-gap: 10px;

  li {
    width: auto;
    height: 40px;
    border-radius: 15px;

    background-color: rgba(29, 30, 90, 1);
    color: #fff;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
