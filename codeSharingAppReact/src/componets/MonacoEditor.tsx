import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { ProgramingLanguage, SharedCode } from "../models/SharedCode";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useResolveAPi } from "../hooks/useResolveApi";
import { useQuery } from "@tanstack/react-query";

export const MonacoEditor = () => {
  const [theme, setTheme] = useState("dark");
  const [currentCode, setCurrentCode] = useState('console.log("Hello Editor")');
  const [currentLanguage, setCurrentLanguage] = useState<ProgramingLanguage>(
    ProgramingLanguage.JAVASCRIPT
  );
  const toast = useRef<Toast>(null);
  const urlParams = new URLSearchParams();

  /* API usage*/
  const { getCodes } = useResolveAPi();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['codes'],
    queryFn: () => getCodes(),
  })
  useEffect(() => {
    if(data) {
      console.log(data);
    }
    
    
    
  }, [data])

  /* btn toast's */
  const showInfoCopy = () => {
    toast.current?.show({
      severity: "info",
      summary: "Copied code to clipboard",
      detail: "The code is on your clipboard now",
    });
    navigator.clipboard.writeText(currentCode);
    getCodes()
  };
  const saveCode = () => {
    toast.current?.show({
      severity: 'info',
      summary: 'Saved',
      detail: 'Your code has been updated',
    });
  }
  const shareCode = () => {
    toast.current?.show({
      severity: 'success',
      summary: 'URL copied',
      detail: 'Now you can share the code with anyone',
    });
    navigator.clipboard.writeText(window.location.href)
  }
  const handleEditorChange = (value: string | undefined) => {
    if(value) {
      setCurrentCode(value);
    }
  };

  return (
    <div style={{ display: "flex", gap: ".3rem", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: ".3rem" }}>
          <Dropdown
            placeholder={currentLanguage.toUpperCase()}
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
        <div style={{display: 'flex', gap: '.5rem'}}>
          <Toast ref={toast} />
          <Button icon="pi pi-share-alt" label="Share" outlined onClick={shareCode} />
          <Button icon="pi pi-copy" rounded onClick={showInfoCopy} />
          <Button icon="pi pi-save" rounded onClick={saveCode} />
        </div>
      </div>
      <Editor
        height="90vh"
        width={"100%"}
        language={currentLanguage}
        value={currentCode}
        theme={`vs-${theme}`}
        onChange={handleEditorChange}
      />
    </div>
  );
};
