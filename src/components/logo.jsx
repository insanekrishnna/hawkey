import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-2 py-1">
      <img
        src="/assets/logo.png"
        alt="Apna Vyapar Logo"
        className="h-10 w-auto rounded-sm"
        loading="eager"
        decoding="sync"
      />
      <span className="font-semibold text-xl md:text-2xl">Apna Vyapar</span>
    </div>
  );
}
