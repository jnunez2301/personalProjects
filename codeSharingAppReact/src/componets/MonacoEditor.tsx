import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { ProgramingLanguage } from "../models/SharedCode";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const MonacoEditor = () => {
  const [theme, setTheme] = useState("dark");
  const [currentCode, setCurrentCode] = useState('console.log("Hello Editor")');
  const [currentLanguage, setCurrentLanguage] = useState<ProgramingLanguage>(
    ProgramingLanguage.JAVASCRIPT
  );
  const toast = useRef<Toast>(null);

  const showInfoCopy = () => {
    toast.current?.show({
      severity: "info",
      summary: "Copied code to clipboard",
      detail: "The code is on your clipboard now",
    });
  };
  const handleEditorChange = (value: string) => {
      console.log('value', value);
  }
  return (
    <div style={{ display: "flex", gap: ".3rem", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <Dropdown
          placeholder={currentLanguage.toLocaleUpperCase()}
          value={currentLanguage}
          onChange={(e) => setCurrentLanguage(e.value)}
          options={[
            "python",
            "javascript",
            "html",
            "css",
            "typescript",
            "java",
          ]}
        />
        <Dropdown
          options={["dark", "light"]}
          value={theme}
          placeholder={theme.toUpperCase()}
          onChange={(e) => setTheme(e.value)}
        />
      </div>
      <Editor
        height="80vh"
        width={"100%"}
        language={currentLanguage}
        value={currentCode}
        theme={`vs-${theme}`}
        onChange={handleEditorChange}
      />
      <div className="card flex justify-content-center">
        <Toast ref={toast} />
        <Button onClick={showInfoCopy} label="Show" />
      </div>
    </div>
  );
};
