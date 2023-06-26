import "./App.css";
import "./components/SnipetList";
import { Toaster } from "react-hot-toast";
import SnipetList from "./components/SnipetList";
import SnippetEditor from "./components/SnippetEditor";
import SnippetForm from "./components/SnippetForm";

function App() {
  async function greet() {}

  return (
    <div className=" h-screen text-white grid grid-cols-12">
      <div className="col-span-3 bg-zinc-950">
        <SnippetForm />
        <SnipetList />
      </div>
      <div className="col-span-9 bg-neutral-900">
        <SnippetEditor />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
