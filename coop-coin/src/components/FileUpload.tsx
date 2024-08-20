import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import UploadIcon from "../assets/UploadIcon.svg";

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  allowedFileTypes: string[];
  maxFileSize: number;
  initialFile?: File | null;
}

const Container = styled.div`
  border: 1px dashed #ccc;
  padding: 20px;
  text-align: center;
  position: relative;
  width: 100%;
  border-radius: 4px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileUpload,
  allowedFileTypes,
  maxFileSize,
  initialFile,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      if (!allowedFileTypes.includes(uploadedFile.type)) {
        setErrorMessage("Unsupported file type.");
        setFile(null);
      } else if (uploadedFile.size > maxFileSize) {
        setErrorMessage(
          `File size exceeds the maximum limit of ${(
            maxFileSize /
            (1024 * 1024)
          ).toFixed(2)} MB.`
        );
        setFile(null);
      } else {
        setErrorMessage(null);
        setFile(uploadedFile);
        onFileUpload(uploadedFile);
      }
    }
  };

  useEffect(() => {
    if (initialFile) {
      setFile(initialFile);
    }
  }, [initialFile]);

  return (
    <Container>
      <HiddenInput
        type="file"
        onChange={handleFileChange}
        id="file-input"
        accept={allowedFileTypes.join(",")}
      />
      <Label htmlFor="file-input">
        {/* <Icon src={UploadIcon} alt="Upload_btn" /> */}
      </Label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {file && <p>File: {file.name}</p>}
    </Container>
  );
};
