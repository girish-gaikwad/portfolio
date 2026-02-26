'use client';
import { ChevronRight } from '@/icons';
import { useEffect, useRef } from 'react';

interface ManageMenuProps {
  visible: boolean;
  onClose: () => void;
  onSettingsClick: () => void;
  onThemeClick: () => void;
}

export default function ManageMenu({ visible, onClose, onSettingsClick, onThemeClick }: ManageMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      ref={menuRef}
      className="absolute bottom-12 left-12 z-50 w-64 rounded-md border border-menu_border bg-menu_bg shadow-2xl text-white text-sm"
    >
      <div className="py-1">
        <MenuItem label="Command Palette..." shortcut="Ctrl+Shift+P" />
        <div className="my-1 border-t border-menu_border" />
        <MenuItem label="Settings" shortcut="Ctrl+," onClick={onSettingsClick} />
        <MenuItem label="Extensions" shortcut="Ctrl+Shift+X" />
        <div className="my-1 border-t border-menu_border" />
        <MenuItem label="Color Theme" shortcut="Ctrl+K Ctrl+T" hasSubmenu onClick={onThemeClick} />
        <MenuItem label="File Icon Theme" />
        <MenuItem label="Product Icon Theme" />
      </div>
    </div>
  );
}

function MenuItem({
  label,
  shortcut,
  hasSubmenu,
  onClick,
}: {
  label: string;
  shortcut?: string;
  hasSubmenu?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex w-full items-center justify-between px-3 py-1.5 hover:bg-active_item_bg hover:text-white text-left text-gray-100"
      onClick={onClick}
    >
      <span>{label}</span>
      <div className="flex items-center gap-2">
        {shortcut && <span className="text-xs opacity-60 mr-2">{shortcut}</span>}
        {hasSubmenu && (
            <div className="h-4 w-4">
                 <ChevronRight />
            </div>
        )}
      </div>
    </button>
  );
}
