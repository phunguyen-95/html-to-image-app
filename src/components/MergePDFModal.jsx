// DragDropModal.js
import React, { useState, useRef } from "react";
import {
  ModalOverlay,
  ModalContainer,
  DropArea,
  FileList,
  FileItem,
  ButtonContainer,
  Button
} from "./styled"; // Import styled components
import { uploadFiles } from "../services/pdfActions";
const MergePDFModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (files.length + selectedFiles.length <= 5) {
      setFiles([...files, ...selectedFiles]);
    } else {
      alert("You can only upload up to 5 files.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (files.length + droppedFiles.length <= 5) {
      setFiles([...files, ...droppedFiles]);
    } else {
      alert("You can only upload up to 5 files.");
    }
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      alert("No files selected!");
    } else {
      await uploadFiles(files);
      setFiles([]);
      onClose();
    }
  };

  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        <h2>Merge Files</h2>
        <DropArea
          isDragging={isDragging}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <p>Drag & Drop files here or Click to Upload (Max: 5 files)</p>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            multiple
            onChange={handleFileSelect}
          />
        </DropArea>

        {/* Render File Names */}
        {files.length > 0 && (
          <FileList>
            {files.map((file, index) => (
              <FileItem key={index}>📄 {file.name}</FileItem>
            ))}
          </FileList>
        )}

        {/* Buttons */}
        <ButtonContainer>
          <Button color="#ff4d4f" hoverColor="#d9363e" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default MergePDFModal;
