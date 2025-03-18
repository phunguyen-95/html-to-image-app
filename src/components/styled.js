// styled.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  width: 400px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 480px) {
    width: 90%;
    padding: 15px;
  }
`;

export const DropArea = styled.div`
  border: 2px dashed #007bff;
  padding: 30px;
  cursor: pointer;
  border-radius: 5px;
  background: ${(props) => (props.isDragging ? "#f0f8ff" : "white")};
  margin-bottom: 10px;
  transition: background 0.3s ease-in-out;

  @media (max-width: 480px) {
    padding: 20px;
    font-size: 14px;
  }
`;

export const FileList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;
  max-height: 120px;
  overflow-y: auto;
`;

export const FileItem = styled.li`
  background: #f8f8f8;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 14px;
  color: #555;
  text-align: left;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: ${(props) => props.color || "#007bff"};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 48%;
  min-width: 100px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.hoverColor || "#0056b3"};
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
    width: 100%;
    margin-bottom: 5px;
  }
`;
