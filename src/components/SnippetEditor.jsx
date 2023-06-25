import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useSnippetStore } from "../store/snippetStore";
import { writeTextFile, readTextFile } from "@tauri-apps/api/fs";
import { documentDir } from "@tauri-apps/api/path";
function SnippetEditor() {
  const { snippets, selectedSnippet } = useSnippetStore((state) => state);

  const [text, setText] = useState("");
  useEffect(() => {
    if (!selectedSnippet) return;

    const readText = async () => {
      const documentPath = await documentDir();
      const getFileText = await readTextFile(
        `${documentPath}SnipetFiles\\${selectedSnippet}`
      );
      setText(getFileText);
    };

    readText();
  }, [selectedSnippet]);
  useEffect(() => {
    if (!selectedSnippet) return;
    const saveText = setTimeout(async () => {
      const documentPath = await documentDir();
      await writeTextFile(
        `${documentPath}SnipetFiles/${selectedSnippet}`,
        text
      );
      console.log(selectedSnippet);
    }, 1000);
    return () => {
      clearTimeout(saveText);
    };
  }, [text]);

  return snippets.length !== 0 ? (
    <Editor
      theme="vs-dark"
      defaultLanguage="javascript"
      options={{ fontSize: 15 }}
      onChange={(value) => setText(value)}
      value={text}
    />
  ) : (
    <h1>No snippets yet</h1>
  );
}

export default SnippetEditor;
