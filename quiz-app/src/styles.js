import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #dbeafe, #e0e7ff, #ede9fe);
  font-family: "Roboto", system-ui, sans-serif;
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1e3a8a;
`;

export const Button = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 5px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.3s ease;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #a5b4fc;
    cursor: not-allowed;
  }
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  margin-bottom: 1rem;
  font-size: 1rem;
`;
