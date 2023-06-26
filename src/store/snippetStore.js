import { create } from "zustand";

const useSnippetStore = create((set) => ({
  snippets: [],
  selectedSnippet: null,
  setSelectedSnippet: (selectedSnippet) => set({ selectedSnippet }),
  addSnippet: (snippet) =>
    set((state) => ({
      snippets: [...state.snippets, snippet],
    })),

  setSnippetList: async (snippets) => set({ snippets }),
  removeSnippet: (snippet) =>
    set((state) => ({
      snippets: state.snippets.filter((s) => s !== snippet),
    })),
}));

export { useSnippetStore };
