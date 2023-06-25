import React, { useState } from "react";
import { writeTextFile } from "@tauri-apps/api/fs";
import { documentDir } from "@tauri-apps/api/path";
import { useSnippetStore } from "../store/snippetStore";

function SnippetForm() {
  const [snippetName, setSnippetName] = useState("");
  const { addSnippet, setSelectedSnippet } = useSnippetStore((store) => store);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const documentPath = await documentDir();
        await writeTextFile(`${documentPath}SnipetFiles/${snippetName}.js`, "");
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
