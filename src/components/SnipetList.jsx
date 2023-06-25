import { readDir, createDir, exists } from "@tauri-apps/api/fs";
import { documentDir } from "@tauri-apps/api/path";
import React, { useEffect } from "react";
import { useSnippetStore } from "../store/snippetStore";
import { useStorage } from "../hooks/useStorage";
import SnippetItem from "./SnippetItem";

function SnipetList() {
  const { snippets, setSnippetList, setSelectedSnippet } = useSnippetStore(
    (state) => state
  );
  useEffect(() => {
    async function loadFiles() {
      const desktopPath = await documentDir();
      (await exists(`${desktopPath}SnipetFiles`))
        ? true
        : await createDir(`${desktopPath}SnipetFiles`);
      const files = await readDir(`${desktopPath}SnipetFiles`);
      const fileNames = files.map((file) => file.name);
      setSnippetList(fileNames);
      snippets ? setSelectedSnippet(fileNames[0]) : null;
    }
    loadFiles();
  }, []);
  return (
    <div>
      {snippets.map((name) => (
        <SnippetItem key={name} name={name} />
      ))}
    </div>
  );
}

export default SnipetList;
