"use client";

import { useContext } from "react";
import { LevelContext } from "./context/LevelContext";

export default function List({ children }) {
  const level = useContext(LevelContext);
  return (
    <ol className="list">
      <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
    </ol>
  );
}
