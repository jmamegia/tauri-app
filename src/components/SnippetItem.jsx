import React from "react";
import { useSnippetStore } from "../store/snippetStore";
import { deleteSnippet } from "../tools/fileSystem";
import { toast } from "react-hot-toast";

function SnippetItem(props) {
  const { selectedSnippet, setSelectedSnippet, snippets, removeSnippet } =
    useSnippetStore((store) => store);
  const { name } = props;
  const clases = selectedSnippet === name ? "bg-zinc-500" : "";
  const handleDelete = async () => {
    const accept = await window.confirm(
      "Are you sure you want to delete this snippet?"
    );
    if (!accept) return;
    deleteSnippet(name);
    await removeSnippet(name);
    setSelectedSnippet(snippets[0] === name ? snippets[1] : snippets[0]);
    toast.error(`${name.split(".")[0]} snippet deleted`, {
      duration: 2000,
      position: "bottom-right",
      style: {
        background: "#fff",
      },
    });
  };
  return (
    <div
      className={`${clases} hover:bg-zinc-400 hover:cursor-pointer p-2   `}
      onClick={() => setSelectedSnippet(name)}
    >
      <span className="m-0 flex justify-between ">
        <button className="p1 flex-start">{name.split(".")[0]}</button>
        {name === selectedSnippet ? (
          <span className=" flex gap-2">
            <button
              className="group relative flex-auto rounded bg-red-800"
              alt="Delete"
              title="Delete"
              onClick={handleDelete}
            >
              🗑
              <div class="group relative m-0 flex justify-center">
                <span class="absolute top-1 p-2 scale-0 transition-all rounded bg-gray-800  text-xs text-white group-hover:scale-100">
                  Delete
                </span>
              </div>
            </button>
          </span>
        ) : (
          false
        )}
      </span>
    </div>
  );
}

export default SnippetItem;
