'use client';
import { ChevronDown, ChevronRight } from '@/icons';
import clsx from 'clsx';
import { useState } from 'react';

export default function Search() {
  const [isReplaceVisible, setIsReplaceVisible] = useState(false);
  const [isFilesToIncludeOpen, setIsFilesToIncludeOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  
  // Mock results for display
  const results = [
    {
      file: 'src/components/Header.tsx',
      path: 'src/components',
      matches: [
        { line: 24, prefix: 'className="', match: 'search', suffix: '-container">' },
      ]
    },
    {
      file: 'src/lib/utils.ts',
      path: 'src/lib',
      matches: [
        { line: 5, prefix: 'export const ', match: 'search', suffix: ' = (query: string) => {' },
        { line: 12, prefix: '  // perform ', match: 'search', suffix: ' operation' },
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full text-gray-300 select-none">
      <div className="p-4 pt-3 pb-2 uppercase text-xs font-bold tracking-wider text-gray-400 flex justify-between items-center">
        <span>Search</span>
        <div className="flex gap-2">
            <span className="cursor-pointer hover:text-white" title="Refresh">
               <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M13.6 2.3C12.2.9 10.2 0 8 0 3.6 0 0 3.6 0 8s3.6 8 8 8c3.7 0 6.8-2.5 7.7-6h-2.1c-.8 2.3-3 4-5.6 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.2.7 4.2 1.8L9 5h7V-2l-2.4 4.3z"/></svg>
            </span>
            <span className="cursor-pointer hover:text-white" title="Collapse All">
               <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M9 9H4v1h5V9zM9 7H4v1h5V7zM9 5H4v1h5V5zM9 3H4v1h5V3z"/><path fillRule="evenodd" clipRule="evenodd" d="M15 1H1v14h14V1zm-1 13H2V2h12v12z"/></svg>
            </span>
        </div>
      </div>

      {/* Search Inputs Section */}
      <div className="px-4 pb-2">
         <div className="flex flex-col gap-2 relative">
            
            {/* Search Input */}
            <div className="flex relative items-start">
               <button 
                  onClick={() => setIsReplaceVisible(!isReplaceVisible)}
                  className={clsx('absolute -left-4 top-1 p-0.5 hover:bg-[#3c3c3c] rounded transition-transform', isReplaceVisible ? 'rotate-90' : '')}
               >
                  <div className="w-4 h-4"><ChevronRight /></div>
               </button>
               
               <div className="w-full relative group">
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full bg-[#343434] text-white text-sm py-1 pl-2 pr-16 border border-gray-700 rounded-md focus:border-blue-500 outline-none placeholder-gray-400 h-7"
                    defaultValue="search"
                  />
                  
        
                  <div className="absolute right-1 top-0 h-full flex items-center gap-0.5">
                     <ToggleButton label="Match Case" icon="Aa" />
                     <ToggleButton label="Match Whole Word" icon="Ab|" />
                     <ToggleButton label="Use Regular Expression" icon=".*" />
                  </div>
               </div>
            </div>

            {/* Replace Input */}
            {isReplaceVisible && (
               <div className="flex relative items-start animate-in slide-in-from-top-1 duration-100">
                  <div className="w-full relative group">
                     <input 
                       type="text" 
                       placeholder="Replace" 
                       className="w-full bg-dark_bg text-white text-sm py-1 pl-2 pr-8 border border-transparent focus:border-blue-500 outline-none placeholder-gray-400 h-7"
                     />
                     <div className="absolute right-1 top-0 h-full flex items-center">
                        <ToggleButton label="Preserve Case" icon="AB" />
                     </div>
                  </div>
               </div>
            )}

            {/* Files to Include/Exclude - Collapsed */}
            <div className="mt-1">
               <div 
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setIsFilesToIncludeOpen(!isFilesToIncludeOpen)}
               >
                  <div className={clsx('transition-transform duration-100 p-0.5 w-4 h-4', isFilesToIncludeOpen ? 'rotate-90' : '')}>
                     <ChevronRight />
                  </div>
                  <span className="text-xs font-bold text-gray-400">files to include/exclude</span>
               </div>
               
               {isFilesToIncludeOpen && (
                  <div className="mt-1 flex flex-col gap-2">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 mb-1">files to include</span>
                        <input type="text" className="w-full bg-[#3c3c3c] text-white text-sm p-1 border border-transparent focus:border-blue-500 outline-none h-7"/>
                     </div>
                     <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-gray-400 mb-1">files to exclude</span>
                         <input type="text" className="w-full bg-[#3c3c3c] text-white text-sm p-1 border border-transparent focus:border-blue-500 outline-none h-7"/>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Results Section */}
      <div className="flex-1 overflow-y-auto mt-2">
        <div className="px-4 text-xs font-bold text-gray-400 mb-2">
           3 results in 2 files
        </div>
        
        {results.map((result, i) => (
           <FileMatch key={i} result={result} />
        ))}
      </div>
    </div>
  );
}

function ToggleButton({ label, icon }: { label: string, icon: string }) {
   return (
      <button 
         title={label}
         className="w-6 h-full flex items-center justify-center text-[10px] text-gray-400 hover:bg-[#4d4d4d] rounded-sm hover:text-gray-200 transition-colors font-mono"
      >
         {icon}
      </button>
   );
}

function FileMatch({ result }: { result: any }) {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <div className="flex flex-col mb-1">
         {/* File Header */}
         <div 
            className="flex items-center px-1 py-1 gap-1 cursor-pointer hover:bg-[#2a2d2e] group"
            onClick={() => setIsOpen(!isOpen)}
         >
            <div className={clsx('text-gray-400 transition-transform duration-100 w-4 h-4', isOpen ? 'rotate-90' : '')}>
               <ChevronRight />
            </div>
            <div className="ml-1 w-4 h-4 flex items-center justify-center">
               <FileTypeIcon fileName={result.file} />
            </div>
            <span className="text-sm text-gray-300 font-medium truncate ml-1">{result.file.split('/').pop()}</span>
            <span className="text-xs text-gray-500 ml-2 truncate hidden group-hover:block dir-rtl">{result.path}</span>
            <span className="ml-auto text-xs text-white bg-gray-600 px-1.5 rounded-full mr-2">{result.matches.length}</span>
         </div>

         {/* Matches */}
         {isOpen && (
            <div className="flex flex-col">
               {result.matches.map((match: any, i: number) => (
                  <div key={i} className="pl-6 pr-2 py-0.5 hover:bg-[#37373d] cursor-pointer text-xs font-mono flex items-center overflow-hidden">
                     <span className="text-gray-400 truncate w-full">
                        <span className="text-gray-500 opacity-60 mr-2">{match.prefix}</span>
                        <span className="bg-[#5f4c18] text-white border border-[#ad882a] border-opacity-50 px-0.5 dark:text-white">{match.match}</span>
                        <span className="text-gray-500 opacity-60 ml-2">{match.suffix}</span>
                     </span>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}

function FileTypeIcon({ fileName }: { fileName: string }) {
   if (fileName.endsWith('tsx') || fileName.endsWith('ts')) {
      return <span className="text-blue-400 text-[10px] font-bold">TS</span>;
   }
   if (fileName.endsWith('css')) {
      return <span className="text-blue-300 text-[10px] font-bold">#</span>;
   }
   return <span className="text-gray-400 text-[10px]">=</span>;
}
