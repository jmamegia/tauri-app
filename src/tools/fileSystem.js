import {
  writeTextFile,
  readTextFile,
  createDir,
  readDir,
  removeFile,
  exists,
} from "@tauri-apps/api/fs";
import { documentDir } from "@tauri-apps/api/path";

const documentPath = await documentDir();
const basePath = `${documentPath}SnippetFiles\\`;

const createPathDir = async () => {
  exists(basePath) ? true : await createDir(basePath);
};
const createSnippet = async (snippetName, text = "") => {
  snippetName = snippetName.split(".")[0];
  await writeTextFile(`${basePath}${snippetName}.js`, text);
};
const deleteSnippet = async () => {
  await removeFile(`${basePath}${snippetName}`);
};

const getSnippets = async () => {
  await createPathDir();
  const files = await readDir(`${basePath}`);
  const fileNames = files.map((file) => file.name);
  return fileNames;
};

const getSnippetText = async (snippet) =>
  await readTextFile(`${basePath}${snippet}`);

export { createSnippet, deleteSnippet, getSnippets, getSnippetText };
