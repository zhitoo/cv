"use client";

import { useRef } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:py-12">
      <div className="no-print max-w-[820px] mx-auto mb-6 flex justify-end">
        <button
          onClick={handleExportPDF}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a2e] hover:bg-[#2d2d4a] text-white text-sm font-medium rounded-lg transition-colors shadow-sm cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export as PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        className="resume-wrapper max-w-[820px] mx-auto bg-white shadow-2xl shadow-black/10 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row min-h-[1122px]">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}
