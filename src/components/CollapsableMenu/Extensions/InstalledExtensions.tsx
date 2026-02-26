'use client';
import { useState } from 'react';
import { HobbyExtension, hobbies, ExtensionStatus } from './hobbies';

// Authentic VS Code Codicons
const VscChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z" />
  </svg>
);

const VscChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z" />
  </svg>
);

const VscGear = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-[#858585] hover:text-[#cccccc] transition-colors">
    <path d="M9.1 2.2l.46 1.45.62.25 1.42-.56 1.13 1.13-.56 1.42.25.62 1.45.46v1.6l-1.45.46-.25.62.56 1.42-1.13 1.13-1.42-.56-.62.25-.46 1.45h-1.6l-.46-1.45-.62-.25-1.42.56-1.13-1.13.56-1.42-.25-.62-1.45-.46v-1.6l1.45-.46.25-.62-.56-1.42 1.13-1.13 1.42.56.62-.25.46-1.45h1.6zm-.5 1H7.4l-.4 1.25-1.03.43-1.22-.48-.7.7.48 1.22-.43 1.03-1.25.4v1h1.25l.43 1.03-.48 1.22.7.7 1.22-.48 1.03.43.4 1.25h1.2l.4-1.25 1.03-.43 1.22.48.7-.7-.48-1.22.43-1.03 1.25-.4v-1l-1.25-.4-.43-1.03.48-1.22-.7-.7-1.22.48-1.03-.43-.4-1.25zM8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

const VerifiedBadge = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-[#3794ff]">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.432 7.072l-1.442-1.57.19-2.128-2.12-.417-1.144-1.804-2.062.585-1.867-1.04-.908 1.936-2.106.48.064 2.135-1.528 1.488 1.157 1.795-.6 2.052 1.944.89.5 2.102 2.13-.178 1.472 1.543 1.782-1.177 2.05.617.874-1.95 2.095-.518-.163-2.136 1.554-1.454-1.173-1.78zM8.333 11.25l-2.916-2.917.833-.833 2.083 2.083 4.167-4.166.833.833-5 5z" />
  </svg>
);

function ExtensionIcon({ color, name }: { color: string; name: string }) {
  return (
    <div
      className="w-[42px] h-[42px] flex-shrink-0 flex items-center justify-center text-white text-lg font-medium shadow-[0_0_4px_rgba(0,0,0,0.5)]"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function ExtensionAction({ status }: { status: ExtensionStatus }) {
  if (status === 'installed') {
    return <VscGear />;
  }

  if (status === 'disabled') {
    return (
      <span className="text-[10px] text-[#858585] uppercase tracking-wide bg-[#313131] px-1 rounded-sm">
        Disabled
      </span>
    );
  }

  const isProcessing = status === 'processing';

  return (
    <button
      className={`text-[11px] px-2 py-0.5 rounded-[2px] text-white flex items-center justify-center min-w-[50px] transition-colors ${
        isProcessing ? 'bg-[#0e639c] opacity-80 cursor-wait' : 'bg-[#0e639c] hover:bg-[#1177bb]'
      }`}
    >
      {isProcessing ? 'Installing' : 'Install'}
    </button>
  );
}

function ExtensionRow({ ext }: { ext: HobbyExtension }) {
  return (
    <div className="flex items-start gap-3 pl-[22px] pr-2 py-2 hover:bg-[rgb(var(--hover-item-bg)) cursor-pointer group transition-colors select-none font-sans">
      
      {ext.img ? (
        <img src={ext.img} alt={ext.name} className="w-[42px] h-[42px] rounded-sm object-cover" />
      ) : (
        <ExtensionIcon color={ext.color} name={ext.name} />
      )}

      <div className="flex flex-col min-w-0 flex-1">
        
        {/* Title & Actions Row (Top) */}
        <div className="flex justify-between items-center gap-2">
          <span className='flex items-center gap-1 min-w-0'>
            <span className="text-[13px] font-semibold text-[#cccccc] truncate leading-tight group-hover:text-white transition-colors">
              {ext.name}
            </span>
            {ext.status === 'installed' && <VerifiedBadge />}
          </span>
          {/* Removed the 'mt-2' so the gear/install button perfectly aligns with the title */}
          <div className="flex items-center flex-shrink-0">
            <ExtensionAction status={ext.status} />
          </div>
        </div>

        {/* Publisher & Rating Row (Middle) */}
        <div className="flex items-center gap-1 mt-0.5 justify-between">
          <span className="text-[11px] text-[#858585] truncate leading-tight">{ext.publisher}</span>
          <span className="text-[10px] text-[#858585] group-hover:text-[#a0a0a0] transition-colors flex items-center gap-0.5 flex-shrink-0">
            ★ 5.0
          </span>
        </div>

        {/* Description (Bottom) */}
        <p className="text-[11px] text-[#cccccc] mt-[3px] truncate leading-tight opacity-90">
          {ext.description}
        </p>

      </div>
    </div>
  );
}

function ExtensionSection({ title, extensions, defaultOpen = true }: { title: string; extensions: HobbyExtension[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  if (extensions.length === 0) return null;

  return (
    <div className="bg-transparent font-sans">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center pl-0.5 pr-2 py-[3px] hover:bg-[#2a2d2e] focus:outline-none focus:ring-[1px] focus:ring-inset focus:ring-[#007fd4] cursor-pointer group"
      >
        <span className="text-[#cccccc] group-hover:text-white transition-colors">
          {open ? <VscChevronDown /> : <VscChevronRight />}
        </span>
        <h3 className="text-[11px] font-bold tracking-[0.02em] text-[#bbbbbb] group-hover:text-[#cccccc] uppercase ml-0.5 transition-colors">
          {title}
        </h3>
        <span className="ml-auto text-[10px] text-[#cccccc] font-medium bg-[#37373d] px-[5px] py-[1px] rounded-[10px]">
          {extensions.length}
        </span>
      </button>

      {open && (
        <div className="pb-1">
          {extensions.map((ext) => (
            <ExtensionRow key={ext.id} ext={ext} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function InstalledExtensions() {
  const installed = hobbies.filter((h) => h.status === 'installed');
  const recommended = hobbies.filter((h) => h.status === 'waiting' || h.status === 'processing');
  const disabled = hobbies.filter((h) => h.status === 'disabled');

  return (
    <>
      {/* RESTORED: Custom VS Code Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .vscode-scroll::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .vscode-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .vscode-scroll::-webkit-scrollbar-thumb {
          background: rgba(121, 121, 121, 0.4);
        }
        .vscode-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 100, 100, 0.7);
        }
        .vscode-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(121, 121, 121, 0.4) transparent;
        }
      `}} />

      {/* RESTORED: max-h-full and vscode-scroll classes so the list actually scrolls */}
      <div className="w-full h-full max-h-full bg-dark_bg text-[#cccccc] flex flex-col overflow-y-auto overflow-x-hidden vscode-scroll pb-4">
        

        <ExtensionSection title="Installed" extensions={installed} />
        <ExtensionSection title="Recommended" extensions={recommended} defaultOpen={true} />
        <ExtensionSection title="Disabled" extensions={disabled} defaultOpen={false} />
      </div>
    </>
  );
}