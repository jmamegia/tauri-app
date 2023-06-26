import { React } from "react";
import { useSnippetStore } from "../store/snippetStore";
import { getSnippets, deleteSnippet, createSnippet } from "../tools/fileSystem";

export const useStorage = async () => {
  const {
    snippets,
    selectedSnippet,
    setSelectedSnippet,
    addSnippet,
    setSnippetList,
  } = useSnippetStore();

  return {
    getFiles,
  };
};
