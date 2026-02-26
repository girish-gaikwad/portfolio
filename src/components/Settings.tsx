'use client';
import { Search } from '@/icons';
import { useState } from 'react';

export default function Settings({ onClose }: { onClose: () => void }) {
  const [theme, setTheme] = useState('Dark Modern');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="w-[800px] h-[600px] bg-dark_bg text-gray-500 flex flex-col shadow-2xl rounded-lg overflow-hidden border border-menu_border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex h-9 items-center justify-between bg-menu_bg px-4 text-sm select-none border-b border-menu_border">
          <div className="flex items-center gap-2">
            <span>Settings</span>
          </div>
          <button onClick={onClose} className="hover:bg-hover_item_bg px-2 rounded">✕</button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-menu_bg border-r border-menu_border p-2 text-sm overflow-y-auto">
             <input 
                type="text" 
                placeholder="Search settings..." 
                className="w-full bg-input_bg border border-transparent focus:border-active_item_bg px-2 py-1 mb-2 text-white outline-none"
             />
             <div className="opacity-60 text-xs font-bold uppercase mb-1 mt-2 px-2">Commonly Used</div>
             <div className="px-2 py-1 hover:bg-hover_item_bg cursor-pointer rounded">Text Editor</div>
             <div className="px-2 py-1 hover:bg-hover_item_bg cursor-pointer rounded">Workbench</div>
             <div className="px-2 py-1 hover:bg-hover_item_bg cursor-pointer rounded">Window</div>
             <div className="px-2 py-1 hover:bg-hover_item_bg cursor-pointer rounded">Features</div>
             <div className="px-2 py-1 hover:bg-hover_item_bg cursor-pointer rounded">Application</div>
             <div className="px-2 py-1 hover:bg-hover_item_bg cursor-pointer rounded">Extensions</div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 relative">
             <h1 className="text-2xl mb-6">User Settings</h1>
             
             <div className="mb-6">
                <label className="block text-sm font-bold mb-1">Editor: Font Size</label>
                <div className="flex items-center gap-2">
                     <input type="number" defaultValue={14} className="bg-input_bg border border-input_bg px-2 py-1 w-16 text-white" />
                     <span className="text-xs opacity-70">Controls the font size in pixels.</span>
                </div>
             </div>

             <div className="mb-6">
                 <label className="block text-sm font-bold mb-1">Workbench: Color Theme</label>
                 <select 
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="bg-input_bg border border-input_bg px-2 py-1 w-64 text-white"
                 >
                     <option>Dark Modern</option>
                     <option>Light Modern</option>
                     <option>Dracula</option>
                 </select>
                 <div className="text-xs opacity-70 mt-1">Specifies the color theme used in the workbench.</div>
             </div>

             <div className="mb-6">
                 <label className="block text-sm font-bold mb-1">Files: Auto Save</label>
                 <select className="bg-input_bg border border-input_bg px-2 py-1 w-64 text-white">
                     <option>off</option>
                     <option>afterDelay</option>
                     <option>onFocusChange</option>
                     <option>onWindowChange</option>
                 </select>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
