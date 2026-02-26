'use client';
import clsx from 'clsx';
import { 
  Check, 
  ChevronDown, 
  ChevronRight, 
  CornerDownLeft, 
  FileDiff, 
  ListTree, 
  MoreHorizontal, 
  Plus, 
  RefreshCw 
} from 'lucide-react';
import { useState } from 'react';

export default function SourceControl() {
  const [isChangesOpen, setIsChangesOpen] = useState(true);

  return (
    <div className="flex flex-col h-full text-gray-300 select-none">
      {/* Title Bar */}
      <div className="p-4 pt-3 pb-2 uppercase text-xs font-bold tracking-wider text-gray-400 flex justify-between items-center group">
        <span>Source Control: Git</span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity items-center">
           <span className="cursor-pointer hover:text-white" title="View as Tree">
             <ListTree size={16} />
           </span>
           <span className="cursor-pointer hover:text-white" title="Commit">
             <Check size={16} />
           </span>
           <span className="cursor-pointer hover:text-white" title="Refresh">
              <RefreshCw size={14} />
           </span>
           <span className="cursor-pointer hover:text-white" title="More Actions">
              <MoreHorizontal size={16} />
           </span>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 pb-2">
         <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-stretch h-8">
               <input 
                  type="text" 
                  placeholder="Message (Ctrl+Enter to commit)" 
                  className="flex-1 bg-[#3c3c3c] text-white text-sm p-1.5 border border-transparent focus:border-blue-500 outline-none placeholder-gray-400 rounded-sm"
               />
            </div>
            <button className="bg-[#007acc] text-white w-full py-1 text-sm hover:bg-[#0062a3] transition-colors flex items-center justify-center gap-2 rounded-sm mb-2">
               <Check size={14} />
               Commit
            </button>
         </div>
      </div>

      {/* Changes Section */}
      <div className="flex-1 overflow-y-auto">
        <div 
           className="px-1 py-0.5 flex items-center cursor-pointer hover:bg-[#2a2d2e] group text-xs font-bold text-gray-400 uppercase tracking-wide"
           onClick={() => setIsChangesOpen(!isChangesOpen)}
        >
             <div className="transition-transform duration-100 w-4 h-4 flex items-center justify-center">
               {isChangesOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
             </div>
             <span className="flex-1 ml-1">Changes</span>
             <span className="bg-gray-600 text-white text-[10px] px-1.5 rounded-full mr-2">2</span>
             <div className="flex gap-2 opacity-0 group-hover:opacity-100 mr-2 items-center">
                  <span title="Discard All Changes" className="cursor-pointer hover:text-white"><CornerDownLeft size={14} /></span>
                  <span title="Stage All Changes" className="cursor-pointer hover:text-white"><Plus size={14} /></span>
             </div>
        </div>

        {isChangesOpen && (
           <div className="flex flex-col mt-0.5">
              <ChangeItem 
                  file="src/components/Portfolio.tsx" 
                  path="src/components" 
                  status="M" 
                  statusColor="text-yellow-400"
              />
              <ChangeItem 
                  file="src/styles/globals.css" 
                  path="src/styles" 
                  status="U" 
                  statusColor="text-green-400"
              />
           </div>
        )}
      </div>
    </div>
  );
}

function ChangeItem({ file, path, status, statusColor }: { file: string, path: string, status: string, statusColor: string }) {
   return (
      <div className="px-2 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center group h-[22px]">
         <div className="w-4"></div> {/* Indent */}
         <span className="text-sm text-gray-300 group-hover:text-white truncate flex-1 flex items-center gap-2">
            {file.split('/').pop()}
            <span className="text-xs text-gray-500 truncate">{path}</span>
         </span>
         
         <span className={clsx('mr-2 text-xs font-bold w-[14px] text-center', statusColor)}>{status}</span>
         
         <div className="flex gap-2 opacity-0 group-hover:opacity-100 mr-1 items-center">
             <span title="Open File" className="text-gray-400 hover:text-white cursor-pointer select-none">
               <FileDiff size={14} />
             </span>
             <span title="Discard Changes" className="text-gray-400 hover:text-white cursor-pointer select-none">
               <CornerDownLeft size={14} />
             </span>
             <span title="Stage Changes" className="text-gray-400 hover:text-white cursor-pointer select-none">
                <Plus size={14} />
             </span>
         </div>
      </div>
   );
}
