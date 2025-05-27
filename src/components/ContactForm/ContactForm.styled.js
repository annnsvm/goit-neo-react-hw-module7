import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  padding: 15px;
  background-color: #016bff;
  border-radius: 15px;
  margin: 0 auto;

  margin-top: 30px;
`;
export const Content = styled.div`
  position: fixed;
  background: white;
  width: 400px;
  height: auto;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 24rem;
`;
export const FormTitle = styled.h2`
  margin-top: 2.5rem;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 2.25rem;
  text-align: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  height: 30px;
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: white;
  width: 100px;
  height: 30px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 3px;
  color: #016bff;
  cursor: pointer;
  :hover,
  :focus {
    scale: 1.05;
  }
`;
