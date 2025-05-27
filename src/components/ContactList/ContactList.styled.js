import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #016bff;
  border-radius: 15px;
  padding: 15px;
  width: 400px;
  margin: 0 auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 200px;

  border-radius: 5px;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  background-color: #016bff;

  height: 30px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.05;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  text-align: center;
  margin: 30px 0;
  font-weight: 400;
`;
