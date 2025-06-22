// import { useState } from "react";
import {Download } from "lucide-react"

export function Header(){
  return (
    <header className="bg-white w-1/1 shadow-sm border-bmx-auto flex justify-center">
          <div className="max-w-4xl px-4 py-6 flex items-center justify-center gap-4.5 ">
            <div className="p-2 bg-red-500 rounded-lg">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-3xl font-bold text-gray-900">Convertidor de Youtube a MP3/MP4</h1>
          </div>
      </header>
  );
};
