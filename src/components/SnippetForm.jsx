import React, { useState } from "react";
import { useSnippetStore } from "../store/snippetStore";
import { createSnippet } from "../tools/fileSystem";
import { toast } from "react-hot-toast";

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
        toast.success(`${snippetName} snippet created`, {
          duration: 2000,
          position: "bottom-right",
          style: {
            background: "#fff",
          },
        });
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
