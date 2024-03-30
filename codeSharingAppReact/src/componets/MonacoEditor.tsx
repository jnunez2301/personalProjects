/* eslint-disable react-hooks/exhaustive-deps */
import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { ProgramingLanguage, SharedCode } from "../models/SharedCode";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useResolveApi } from "../hooks/useResolveApi";
import { useQuery } from "@tanstack/react-query";
import {
  createBrowserHistory,
  useParams,
} from "@tanstack/react-router";

function generateRandomString(length = 8) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const MonacoEditor = () => {
  const [theme, setTheme] = useState("dark");
  const [currentCode, setCurrentCode] = useState('console.log("Hello Editor")');
  const [currentLanguage, setCurrentLanguage] = useState<ProgramingLanguage>(
    ProgramingLanguage.JAVASCRIPT
  );
  const [codeDataList, setCodeDataList] = useState<SharedCode[]>([]);
  const [idParam, setIdParam] = useState<string>("");
  const [codeById, setCodeById] = useState<SharedCode>();
  const [codeExists, setCodeExists] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  /* Routing params */
  // @ts-expect-error: String type exists on useParams
  const { codeId } = useParams({ strict: false });
  const history = createBrowserHistory();
  /* API usage*/
  const { getCodes, getCodeById, postCodes } = useResolveApi();

  const query = useQuery<SharedCode[]>({
    queryKey: ["codes"],
    queryFn: getCodes,
    staleTime: Infinity,
  });
  useEffect(() => {
    if (query.data) {
      setCodeDataList(query.data);
    }
  }, [query.data]);

  useEffect(() => {
    if (codeDataList.length > 0) {
      const codeInData = codeDataList
        .map((d) => d.generatedUrl)
        .includes(codeId);
      if (codeInData) {
        setCodeExists(true);
        getCodeById(codeId)
          .then((response) => {
            setCodeById(response[0])
          })
          .catch((error) => console.log(error));
        setIdParam(codeId);
      } else {
        setCodeExists(false);
        const newCodeId = generateRandomString();
        setIdParam(newCodeId);
        history.replace(newCodeId);
      }
    }
  }, [codeDataList, codeExists]);

  useEffect(() => {
    if(codeById) {
      setCurrentCode(codeById.code)
      setCurrentLanguage(codeById.languageOptions.name)
    }
  }, [codeById])
  /* btn toast's config*/
  const showInfoCopy = () => {
    toast.current?.show({
      severity: "info",
      summary: "Copied code to clipboard",
      detail: "The code is on your clipboard now",
    });
    navigator.clipboard.writeText(currentCode);
    getCodes();
  };
  const saveCode = () => {
    toast.current?.show({
      severity: "info",
      summary: "Saved",
      detail: "Your code has been updated",
    });
    const saveCode = {
      generatedUrl: idParam,
      code: currentCode,
      languageOptions: {
        name: currentLanguage,
        code: currentLanguage,
      },
    };
    postCodes(saveCode);
  };
  const shareCode = () => {
    toast.current?.show({
      severity: "success",
      summary: "URL copied",
      detail: "Now you can share the code with anyone",
    });
    navigator.clipboard.writeText(window.location.href);
  };
  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCurrentCode(value);
    }
  };

  /* btn toast's config*/
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
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Toast ref={toast} />
          <Button
            icon="pi pi-share-alt"
            label="Share"
            outlined
            onClick={shareCode}
          />
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
