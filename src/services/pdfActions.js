import axios from "axios";

const uploadFiles = async (files) => {
  if (!files.length) {
    alert("No files selected!");
    return;
  }

  const formData = new FormData();

  // Append each file to FormData
  files.forEach((file) => {
    formData.append("fileInput", file);
  });

  try {
    const response = await axios.post(
      "https://stirlingpdf.io/api/v1/general/merge-pdfs",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          origin: "https://stirlingpdf.io"
        }
      }
    );

    console.log("Upload Successful:", response.data);
    alert("Files uploaded successfully!");
  } catch (error) {
    console.error("Upload Error:", error);
    alert("Error uploading files!");
  }
};

export { uploadFiles };
