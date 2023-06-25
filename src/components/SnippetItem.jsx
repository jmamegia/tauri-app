import React from "react";
import { useSnippetStore } from "../store/snippetStore";

function SnippetItem(props) {
  const { selectedSnippet, setSelectedSnippet } = useSnippetStore(
    (store) => store
  );
  const { name } = props;
  const clases = selectedSnippet === name ? "bg-zinc-500" : "";
  const handleClick = () => {
    setSelectedSnippet(name);
  };

  return (
    <div
      className={`${clases} hover:bg-zinc-400 hover:cursor-pointer p-2`}
      onClick={handleClick}
    >
      {name.split(".")[0]}
    </div>
  );
}

export default SnippetItem;
