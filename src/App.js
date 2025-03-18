import { useEffect, useState } from "react";
import MergePDFModal from "./components/MergePDFModal";
import GlobalStyle from "./GlobalStyles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickMergeBtn = (e) => {
      e.preventDefault();
      setIsOpen(true);
      console.log("Merge button clicked");
    };
    const mergeButton = document.getElementById("editorMergeButton");
    mergeButton?.addEventListener("click", handleClickMergeBtn);
    return () => {
      mergeButton?.removeEventListener("click", handleClickMergeBtn);
    };
  }, []);

  return (
    <div>
      <GlobalStyle />
      <MergePDFModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

export default App;
