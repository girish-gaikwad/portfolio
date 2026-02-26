'use client';
import { useEffect, useRef, useState } from 'react';

const themes = [
    { id: 'dark', label: 'Dark Modern' },
    { id: 'dracula', label: 'Dracula' },
    { id: 'blue-theme', label: 'Blue' },
];

export default function ThemePicker({ onClose }: { onClose: () => void }) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Capture the theme that was active BEFORE the picker opened, 
    // so we can revert to it if the user presses Escape.
    const [initialTheme] = useState(() => 
        document.documentElement.className || 'dark'
    );

    const filteredThemes = themes.filter((theme) =>
        theme.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const applyTheme = (themeId: string) => {
        document.documentElement.className = themeId === 'dark' ? '' : themeId;
    };

    useEffect(() => {
        inputRef.current?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault(); // Stop cursor from moving in the input box
                const nextIndex = (selectedIndex + 1) % filteredThemes.length;
                setSelectedIndex(nextIndex);
                if (filteredThemes.length > 0) applyTheme(filteredThemes[nextIndex].id);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (selectedIndex - 1 + filteredThemes.length) % filteredThemes.length;
                setSelectedIndex(prevIndex);
                if (filteredThemes.length > 0) applyTheme(filteredThemes[prevIndex].id);
            } else if (e.key === 'Enter') {
                if (filteredThemes.length > 0) {
                    applyTheme(filteredThemes[selectedIndex].id);
                    onClose();
                }
            } else if (e.key === 'Escape') {
                applyTheme(initialTheme); // Revert to original theme
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, filteredThemes, onClose, initialTheme]);

    return (
        // Removed the dark dimming (bg-black/20) to match VS Code's floating palette style
        <div 
            className="fixed inset-0 z-50 flex justify-center items-start top-2 font-sans text-[13px]" 
            onClick={() => {
                applyTheme(initialTheme); // Revert if they click outside
                onClose();
            }}
        >
            <div 
                // Authentic drop shadow and coloring
                className="w-[600px] max-w-[95vw] h-fit bg-menu_bg shadow-[0_8px_24px_rgba(0,0,0,0.4)] rounded-md border border-dark_border flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Input Container */}
                <div className="p-1 border-b border-dark_border">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Select Color Theme"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setSelectedIndex(0);
                            if (e.target.value === '') {
                                applyTheme(initialTheme);
                            }
                        }}
                        // VS Code inputs have a sharp blue border on focus
                        className="w-full bg-input_bg text-[#cccccc] px-2 py-1 outline-none border border-transparent focus:border-[#007fd4] placeholder:text-gray-500 transition-colors"
                    />
                </div>
                
                {/* Scrollable Results List */}
                <div className="max-h-[300px] overflow-y-auto py-1 vscode-scroll">
                    {filteredThemes.map((theme, index) => (
                        <div
                            key={theme.id}
                            // Fixed height to 22px to perfectly match the VS Code UI rows
                            className={`px-3 h-[22px] cursor-pointer flex items-center justify-between group select-none ${
                                index === selectedIndex 
                                    ? 'bg-active_item_bg text-white' 
                                    : 'text-[#cccccc] hover:bg-hover_item_bg'
                            }`}
                            onClick={() => {
                                applyTheme(theme.id);
                                onClose();
                            }}
                            onMouseEnter={() => {
                                setSelectedIndex(index);
                                applyTheme(theme.id); // Live preview on hover
                            }}
                        >
                            <span className="truncate">{theme.label}</span>
                            {index === selectedIndex && (
                                <span className="text-[11px] opacity-80 uppercase tracking-wider">theme</span>
                            )}
                        </div>
                    ))}
                    
                    {filteredThemes.length === 0 && (
                        <div className="px-3 py-2 text-[#858585] text-center">
                            No themes matching '{searchQuery}'
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}