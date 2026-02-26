'use client';
import clsx from 'clsx';
import { ChevronDown, ChevronRight, Cog, MoreHorizontal, Play, Plus } from 'lucide-react';
import { ReactNode, useState } from 'react';

export default function RunAndDebug() {
  return (
    <div className="flex flex-col h-full text-gray-300 select-none">
      {/* Title Bar */}
      <div className="p-4 pt-3 pb-2 uppercase text-xs font-bold tracking-wider text-gray-400 flex justify-between items-center group">
        <span>Run and Debug</span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="cursor-pointer hover:text-white" title="More Actions">
            <MoreHorizontal size={16} />
          </span>
        </div>
      </div>

      {/* Main Controls */}
      <div className="px-4 pb-4  border-b border-[#2b2b2b]">
        <div className="flex items-center gap-1 mb-2">

          <input
            type="text"
            placeholder="Run Current File"
            className="flex-1 bg-[#3c3c3c] text-white text-sm p-1 border border-transparent focus:border-blue-500 outline-none placeholder-gray-400 rounded-sm"
          />

          <button className="bg-green-700 text-white p-1 hover:bg-green-600 rounded-sm transition-colors flex items-center justify-center h-7 w-8" title="Start Debugging">
            <Play size={16} fill="white" />
          </button>
          <button className="bg-[#3c3c3c] text-white p-1 hover:bg-[#444] rounded-sm transition-colors border border-[#3c3c3c] hover:border-[#555] h-7 w-8 flex items-center justify-center" title="Run Configuration">
            <Cog size={16} />
          </button>
        </div>
        <a href="#" className="text-blue-400 text-xs hover:underline">create a launch.json file</a>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        <DebugSection title="VARIABLES" defaultOpen={true}>
          <div className="px-4 py-1 text-xs font-mono">
            <div className="group cursor-pointer">
              <div className="flex items-center hover:bg-[#2a2d2e]">
                <span className="text-gray-400 mr-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center w-4 h-4"><ChevronRight size={14} /></span>
                <span className="text-blue-400 mr-2">Local</span>
              </div>
              <div className="pl-6 text-gray-400 border-l border-gray-700 ml-2.5 mt-0.5">
                <div className="hover:bg-[#2a2d2e] cursor-pointer flex">
                  <span className="text-[#9cdcfe] mr-1">this:</span>
                  <span className="text-[#ce9178] truncate">Object</span>
                </div>
                <div className="hover:bg-[#2a2d2e] cursor-pointer flex">
                  <span className="text-[#9cdcfe] mr-1">skills:</span>
                  <span className="text-blue-400 mr-1">Array(99)</span>
                  <span className="text-gray-500"> [ "React", "Next.js"...]</span>
                </div>
                <div className="hover:bg-[#2a2d2e] cursor-pointer flex">
                  <span className="text-[#9cdcfe] mr-1">coffee:</span>
                  <span className="text-[#b5cea8]">100%</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer mt-1">
              <div className="flex items-center hover:bg-[#2a2d2e]">
                <span className="w-4 h-4 flex items-center justify-center mr-1"><ChevronRight size={14} /></span>
                <span className="text-blue-400">Global</span>
              </div>
            </div>
          </div>
        </DebugSection>

        <DebugSection title="WATCH" defaultOpen={false}>
          <div className="px-8 py-2 text-xs text-gray-500 italic">No expressions to watch.</div>
        </DebugSection>

        <DebugSection title="CALL STACK" defaultOpen={true}>
          <div className="px-0 py-1 text-xs font-mono text-gray-400">
            <div className="px-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center group">
              <span className="w-16 truncate text-yellow-500">PAUSED</span>
              <span className="text-gray-500 italic ml-2">on breakpoint</span>
            </div>
            <div className="px-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center group text-white bg-[#37373d]">
              <span className="truncate">buildPortfolio</span>
              <span className="text-gray-500 ml-2">index.tsx:45</span>
            </div>
            <div className="px-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center group">
              <span className="truncate">activeComponent</span>
              <span className="text-gray-500 ml-2">App.tsx:120</span>
            </div>
            <div className="px-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center group">
              <span className="truncate">render</span>
              <span className="text-gray-500 ml-2">react-dom.development.js:4012</span>
            </div>
            <div className="px-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center group text-gray-500">
              <span className="truncate">Load more stack frames...</span>
            </div>
          </div>
        </DebugSection>

        <DebugSection title="BREAKPOINTS" defaultOpen={true}>
          <div className="px-4 py-1 text-xs text-gray-400">
            <div className="flex items-center gap-2 py-1 hover:bg-[#2a2d2e] cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></div>
              <div className="flex flex-col truncate">
                <span className="text-gray-300">index.tsx</span>
                <span className="text-gray-500 text-[10px]">src/components/CollapsableMenu</span>
              </div>
            </div>
            <div className="flex items-center gap-2 py-1 hover:bg-[#2a2d2e] cursor-pointer opacity-50">
              <div className="w-3 h-3 rounded-full border-2 border-red-500 flex-shrink-0"></div>
              <div className="flex flex-col truncate">
                <span className="text-gray-300">App.tsx</span>
                <span className="text-gray-500 text-[10px]">src</span>
              </div>
            </div>
          </div>
        </DebugSection>
      </div>
    </div>
  );
}

function DebugSection({ title, children, defaultOpen }: { title: string, children: ReactNode, defaultOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div >
      <div
        className="flex items-center px-1 py-1  cursor-pointer hover:bg-[#2a2d2e] group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="transition-transform duration-100 w-4 h-4 flex items-center justify-center text-gray-400">
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </div>
        <span className="text-xs font-bold text-gray-400 group-hover:text-white uppercase">{title}</span>
        <div className="ml-auto flex gap-1 opacity-0 group-hover:opacity-100 px-1">
          {/* Add/Plus Icon placeholder */}
          {title === 'WATCH' && (
            <span className="hover:text-white text-gray-400">
              <Plus size={14} />
            </span>
          )}
          {title === 'BREAKPOINTS' && (
            <span className="hover:text-white text-gray-400">
              <Plus size={14} />
            </span>
          )}
        </div>
      </div>
      {isOpen && children}
    </div>
  );
}
