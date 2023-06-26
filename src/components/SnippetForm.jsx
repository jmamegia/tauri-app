import React, { useState } from "react";
import { useSnippetStore } from "../store/snippetStore";
import { createSnippet } from "../tools/fileSystem";

function SnippetForm() {
  const [snippetName, setSnippetName] = useState("");
  const { addSnippet, setSelectedSnippet } = useSnippetStore((store) => store);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await createSnippet(`${snippetName}`);
        addSnippet(`${snippetName}.js`);
        setSelectedSnippet(`${snippetName}.js`);
        setSnippetName("");
      }}
    >
      <input
        type="text"
        placeholder="Write a Snippet"
        className=" bg-zinc-800 w-full border-none text-white p-2"
        onChange={(e) => setSnippetName(e.target.value)}
        value={snippetName}
      />
      <button className="hidden">Save</button>
    </form>
  );
}

export default SnippetForm;
