import React, { useRef } from "react";

const ExportToWord = () => {
  const contentRef = useRef(null);

  const handleExport = async () => {
    const { default: HTMLtoDOCX } = await import("html-to-docx");
  
    if (!contentRef.current) return;
  
    const content = contentRef.current.innerHTML;
    const options = { pageNumber: true };
  
    const docxBlob = await HTMLtoDOCX(content, null, options, null);
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(docxBlob);
    link.download = "document.docx";
    link.click();
  };
  return (
    <div>
      <div ref={contentRef} style={{ padding: "20px", border: "1px solid #ccc" }}>
      <div dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cover Letter</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 20px; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333; text-align: center;">Cover Letter</h2>
        <p style="margin-bottom: 10px;"><strong>Your Name</strong></p>
        <p style="margin-bottom: 10px;">Your Address</p>
        <p style="margin-bottom: 10px;">City, State, ZIP Code</p>
        <p style="margin-bottom: 10px;">Your Email</p>
        <p style="margin-bottom: 10px;">Your Phone Number</p>
        
        <p style="margin-top: 20px;">[Date]</p>
        
        <p><strong>Hiring Manager's Name</strong></p>
        <p>Company Name</p>
        <p>Company Address</p>
        <p>City, State, ZIP Code</p>
        
        <p style="margin-top: 20px;">Dear [Hiring Manager's Name],</p>
        
        <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [Your Field or Relevant Skills], I believe I am well-suited for this role. My experience in [Specific Skill or Experience] has prepared me to contribute effectively to your team.</p>
        
        <p>In my previous role at [Previous Company], I [describe an achievement or responsibility that relates to the job]. This experience has allowed me to develop strong skills in [mention relevant skills], which I am eager to bring to [Company Name].</p>
        
        <p>I am particularly drawn to this position because of [mention what excites you about the job or company]. I admire [Company Name]’s commitment to [mention company values, mission, or recent accomplishments], and I am confident that my skills align with your needs.</p>
        
        <p>I would welcome the opportunity to discuss how my experience and skills can benefit your team. Please feel free to contact me at your convenience. Thank you for your time and consideration.</p>
        
        <p>Sincerely,</p>
        <p><strong>Your Name</strong></p>
        
        <h3 style="text-align: center; margin-top: 30px;">Career Timeline</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background-color: #d3d3d3;">
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Year</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Position</th>
                <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Company</th>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">2022 - Present</td>
                <td style="border: 1px solid #ddd; padding: 8px;">[Current Job Title]</td>
                <td style="border: 1px solid #ddd; padding: 8px;">[Current Company]</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">2019 - 2022</td>
                <td style="border: 1px solid #ddd; padding: 8px;">[Previous Job Title]</td>
                <td style="border: 1px solid #ddd; padding: 8px;">[Previous Company]</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">2015 - 2019</td>
                <td style="border: 1px solid #ddd; padding: 8px;">[Earlier Job Title]</td>
                <td style="border: 1px solid #ddd; padding: 8px;">[Earlier Company]</td>
            </tr>
        </table>
    </div>
</body>
</html>`}}></div>
      </div>
      <button onClick={handleExport} style={{ marginTop: "10px" }}>
        Export to Word
      </button>
    </div>
  );
};

export default ExportToWord;
