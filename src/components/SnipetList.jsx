import React, { useEffect } from "react";
import { useSnippetStore } from "../store/snippetStore";
import { getSnippets } from "../tools/fileSystem";
import SnippetItem from "./SnippetItem";

function SnipetList() {
  const { snippets, setSnippetList, setSelectedSnippet } = useSnippetStore(
    (state) => state
  );
  useEffect(() => {
    (async () => {
      const snippetList = await getSnippets();
      setSnippetList(snippetList);
      setSelectedSnippet(snippetList[0]);
    })();
  }, []);
  return (
    <div>
      {snippets.map((snippet) => (
        <SnippetItem key={snippet} name={snippet} />
      ))}
    </div>
  );
}

export default SnipetList;
