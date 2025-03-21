import axios from "axios";

function blobToPDF(data, fileName = "mergePDF.pdf") {
  // Convert ArrayBuffer to Blob
  const blob = new Blob([data], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  // Create a download link and trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); // Cleanup

  console.log("✅ PDF downloaded successfully.");
}

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
      "https://ai-pdf-editor-api.survivalapp.com/api/v1/general/merge-pdfs",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        responseType: "blob"
      }
    );
    let fileName = "";
    files.forEach((file) => {
      fileName += file.name.replace(".pdf", "") + "_";
    });

    const contentType = response.headers["content-type"];
    if (!contentType || !contentType.includes("application/pdf")) {
      throw new Error("Invalid PDF file received.");
    }
    blobToPDF(response.data, `${fileName}.pdf`);
  } catch (error) {
    console.error("Upload Error:", error);
    alert("Error uploading files!");
  }
};

export { uploadFiles };
