import React from "react";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  count: 0,
  addOne: () => set((state) => ({ count: state.count + 1 })),
  clearCount: () => set(() => ({ count: 0 })),
}));

function App() {
  const count = useProductsStore((state) => state.count);
  const addOne = useProductsStore((state) => state.addOne);
  const clearCount = useProductsStore((state) => state.clearCount);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={addOne}>Add One</button>
      <button onClick={clearCount}>Clear Count</button>
    </div>
  );
}

export default App;
