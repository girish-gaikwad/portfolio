'use client';
import { CollapsableMenu } from '@/components';
import ManageMenu from '@/components/ManageMenu';
import Settings from '@/components/Settings';
import ThemePicker from '@/components/ThemePicker';
import { Accounts, Debug, Explorer, Extensions, Gear, Search, SourceControl } from '@/icons';
import { App, Leetcode, MDXEntry } from '@/lib/mdx';
import { Menu, Section, SubMenu, expandableSlice, explorerSlice, sectionSlice, selectExpanded, selectInitialLoad, selectMenu, useDispatch, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ToolTip from './ToolTip';

const barItems = [
  {
    hoverText: 'Search (Ctrl + Shift + F)',
    icon: <Search />,
    menu: Menu.SEARCH,
  },
  {
    hoverText: 'Source Control (Ctrl + Shift + G)',
    icon: <SourceControl />,
    menu: Menu.SOURCE_CONTROL,
  },
  {
    hoverText: 'Run and Debug (Ctrl + Shift + D)',
    icon: <Debug />,
    menu: Menu.DEBUG,
  },
  {
    hoverText: 'Extensions (Ctrl + Shift + X)',
    icon: <Extensions />,
    menu: Menu.EXTENSIONS,
  },
];

export default function ActivityBar({ sections, allApps, allLeetcode }: { sections: Record<string, Array<Section>>; allApps: MDXEntry<App>[], allLeetcode: MDXEntry<Leetcode>[] }) {
  const dispatch = useDispatch();
  const activeMenu = useSelector(selectMenu);
  const expanded = useSelector(selectExpanded);
  const initialLoad = useSelector(selectInitialLoad);
  const pathname = usePathname();
  const [showManageMenu, setShowManageMenu] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    dispatch(sectionSlice.actions.setSections({ sections: sections[pathname] }));
  }, [pathname, dispatch, sections]);

  return (
    // FIXED: Changed 'md:flex' to 'flex h-full shrink-0' 
    // This forces the component to stretch to the exact height of <main>
    <div className="hidden md:flex relative h-full z-30 shrink-0 bg-dark_bg">
      
      {/* FIXED: Using 'flex-col' and 'justify-between' forces the top items up 
        and the bottom items down, spanning the full 'h-full'
      */}
      <div className="w-[48px] h-full flex flex-col justify-between border-r border-dark_border z-40">
        
        {/* Top Icons Container */}
        <div className="flex flex-col items-center w-full pt-2">
          <Tooltip
            icon={<Explorer />}
            text="Explorer (Ctrl+Shift+E)"
            active={expanded && activeMenu === Menu.EXPLORER}
            handleMouseClick={() => {
              dispatch(expandableSlice.actions.toggleMenu({ menu: Menu.EXPLORER }));

              if (!initialLoad || window.innerWidth >= 768) return;

              dispatch(explorerSlice.actions.setInitialLoad());

              setTimeout(() => {
                dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
              }, 200);
            }}
          />
          {barItems.map((item, index) => (
            <Tooltip
              key={index}
              icon={item.icon}
              text={item.hoverText}
              active={expanded && activeMenu === item.menu}
              handleMouseClick={() => {
                dispatch(expandableSlice.actions.toggleMenu({ menu: item.menu }));
              }}
            />
          ))}
        </div>
        
        {/* Bottom Icons Container */}
        <div className="flex flex-col items-center w-full pb-2">
          <Tooltip 
            icon={<Accounts />} 
            text="Accounts" 
            active={false} 
            handleMouseClick={() => {}} 
          />
          <Tooltip
            icon={<Gear />}
            text="Manage"
            active={showManageMenu}
            handleMouseClick={() => setShowManageMenu(!showManageMenu)}
          />
        </div>
      </div>
      
      <CollapsableMenu allApps={allApps} allLeetcode={allLeetcode} />
      
      <ManageMenu
        visible={showManageMenu}
        onClose={() => setShowManageMenu(false)}
        onSettingsClick={() => {
          setShowManageMenu(false);
          setShowSettings(true);
        }}
        onThemeClick={() => {
          setShowManageMenu(false);
          setShowThemePicker(true);
        }}
      />
      {showThemePicker && <ThemePicker onClose={() => setShowThemePicker(false)} />}
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </div>
  );
}

function Tooltip({ icon, text, active, handleMouseClick }: TooltipProps) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setToolTipActive(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setToolTipActive(false);
  }, []);

  const handleFocus: React.FocusEventHandler = useCallback(() => {
    setToolTipActive(false);
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      <button
        onFocus={handleFocus}
        onClick={handleMouseClick}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        className={clsx(
          'w-[48px] h-[48px] flex items-center justify-center relative cursor-pointer outline-none transition-colors duration-150',
          active ? 'text-white' : 'text-[#858585] hover:text-white'
        )}
      >
        {active && (
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white"></div>
        )}
        
        {/* Forces all SVGs to scale perfectly to 24x24 */}
        <div className="w-6 h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
          {icon}
        </div>
      </button>
      
      {/* Tooltip positioned outside the 48px bounds */}
      <ToolTip className="top-1/2 -translate-y-1/2 left-[54px] z-50 whitespace-nowrap" active={toolTipActive} text={text} />
    </div>
  );
}

interface TooltipProps {
  icon: JSX.Element;
  text: string;
  active: boolean;
  handleMouseClick: React.MouseEventHandler;
}