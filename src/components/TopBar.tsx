'use client';
import { ChromeClose, ChromeMenu, ChromeMinimize, ChromeRestore, SplitHorizontal, SplitVerticalUntoggled, ToggledSidebar, UntoggledSidebar, VSCode } from '@/icons';
import { Menu, SubMenu, expandableSlice, explorerSlice, selectExpanded, selectInitialLoad, useDispatch, useSelector } from '@/lib/redux';
import Image from 'next/image';

const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

export default function TopBar() {
  const menuExpanded = useSelector(selectExpanded);

  return (
    // Enforced strict 35px height, standard sans-serif font, and small text
    <div className="flex justify-between items-center text-[#cccccc] bg-dark_bg h-[35px] border-b border-dark_border select-none font-sans text-[12px] relative">
      <MenuBar />
      
      {/* Centered Title (Authentic VS Code behavior) */}
      <h1 className="absolute left-1/2 -translate-x-1/2 pointer-events-none hidden sm:flex items-center gap-1.5 opacity-80">
        <Image src="/logos/gg.png" alt="gg-logo" width={30} height={30} className="opacity-80" />
        <span>Girish Gaikwad - Portfolio</span>
      </h1>
      
      <div className="flex h-full items-center">
        <ToggleButtons menuExpanded={menuExpanded} />
        <ControlButtons />
      </div>
    </div>
  );
}

function MenuBar() {
  const initialLoad = useSelector(selectInitialLoad);
  const dispatch = useDispatch();

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(expandableSlice.actions.toggleMenu({ menu: Menu.EXPLORER }));

    if (!initialLoad) return;
    dispatch(explorerSlice.actions.setInitialLoad());

    setTimeout(() => {
      dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
    }, 200);
  };

  return (
    <div className="flex items-center h-full pl-2">
      <div className="flex items-center mr-2 ml-2">
        <VSCode/>
      </div>
      
      <div className="hidden lg:flex items-center h-full">
        {menuItems.map((item) => (
          <button key={item} className="px-2 py-1 mx-[1px] hover:bg-white/10 rounded-[4px] cursor-default transition-colors">
            {item}
          </button>
        ))}
      </div>
      
      {/* Mobile Menu Icon */}
      <div className="flex items-center lg:hidden hover:bg-white/10 px-2 py-1 ml-1 rounded-[4px] cursor-pointer transition-colors" onClick={toggleMenu}>
        <ChromeMenu />
      </div>
    </div>
  );
}

const toggleButtons = [{ icon: <SplitVerticalUntoggled /> }, { icon: <SplitHorizontal /> }];

function ToggleButtons({ menuExpanded }: { menuExpanded: boolean }) {
  const dispatch = useDispatch();

  const toggleMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(expandableSlice.actions.toggleMenu({}));
  };

  return (
    <div className="flex items-center gap-[2px] mr-2">
      <button onClick={toggleMenu} className="hover:bg-white/10 p-1 rounded-[4px] transition-colors flex items-center justify-center text-[#cccccc]">
        {menuExpanded ? <ToggledSidebar /> : <UntoggledSidebar />}
      </button>
      
      {toggleButtons.map((button, index) => (
        <button key={index} className="hover:bg-white/10 p-1 rounded-[4px] transition-colors flex items-center justify-center text-[#cccccc]">
          {button.icon}
        </button>
      ))}
    </div>
  );
}

function ControlButtons() {
  return (
    <div className="flex h-full">
      {/* Window controls are exactly 46px wide in Windows/VS Code */}
      <div className="w-[46px] h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default text-[#cccccc]">
        <ChromeMinimize />
      </div>
      <div className="w-[46px] h-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-default text-[#cccccc]">
        <ChromeRestore />
      </div>
      {/* Close button gets the standard Windows red hover */}
      <div className="w-[46px] h-full flex items-center justify-center hover:bg-[#e81123] hover:text-white transition-colors cursor-default text-[#cccccc]">
        <ChromeClose />
      </div>
    </div>
  );
}