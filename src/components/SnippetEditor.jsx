import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useSnippetStore } from "../store/snippetStore";
import { getSnippetText, createSnippet } from "../tools/fileSystem";

function SnippetEditor() {
  const { snippets, selectedSnippet } = useSnippetStore((state) => state);

  const [text, setText] = useState("");
  useEffect(() => {
    if (!selectedSnippet) return;
    (async () => {
      const fileText = await getSnippetText(selectedSnippet);
      setText(fileText);
    })();
  }, [selectedSnippet]);

  useEffect(() => {
    if (!selectedSnippet) return;
    const saveText = setTimeout(async () => {
      await createSnippet(`${selectedSnippet}`, text);
    }, 1000);
    return () => {
      clearTimeout(saveText);
    };
  }, [text]);

  return snippets ? (
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
