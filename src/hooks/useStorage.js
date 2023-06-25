import { React } from "react";
import {
  writeTextFile,
  readTextFile,
  createDir,
  readDir,
  removeFile,
  exists,
} from "@tauri-apps/api/fs";
import { useSnippetStore } from "../store/snippetStore";
import { documentDir } from "@tauri-apps/api/path";

export const useStorage = async () => {
  const documentPath = await documentDir();
  const basePath = `${documentPath}SnipetFiles/`;
  const { setSnippetList } = useSnippetStore();

  const createPathDir = async () => {
    exists(basePath) ? true : await createDir(basePath);
  };
  const createFile = async (snippetName) => {
    await writeTextFile(`${basePath}${snippetName}.js`);
  };
  const deleteFile = async () => {
    await removeFile(`${basePath}${snippetName}`);
  };

  const readFile = async (snippet) => {
    return await readTextFile(`${basePath}${snippet}`);
  };
  const getFiles = async () => {
    await createPathDir();
    const files = await readDir(`${desktopPath}SnipetFiles`);
    const fileNames = files.map((file) => file.name);
    return fileNames;
  };
  return {
    createFile,
    deleteFile,
    fileExists,
    getFiles,
    readFile,
  };
};
