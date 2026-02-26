'use client';
import { ChromeClose, Ellipsis, FavIcon, GitCompare, Leetcode, NextConfig, ReactIcon, Svelte, UntoggledSidebar } from '@/icons';
import { TabData, selectCurrentTab, selectTabs, tabsSlice, useDispatch, useSelector } from '@/lib/redux';
import clsx from 'clsx';
import { BookHeart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { mergeRefs } from 'react-merge-refs';

const fileType = {
  ['react' as string]: <ReactIcon />,
  ['about' as string]: <FavIcon />,
  ['next' as string]: <NextConfig />,
  ['svelte' as string]: <Svelte />,
  ['leetcode' as string]: <Leetcode />,
  ['personal-info' as string]: <BookHeart size={14} className="text-blue-400"/>,
};

export default function TabsContainer() {
  const tabs = useSelector(selectTabs);
  const currentTab = useSelector(selectCurrentTab);
  const router = useRouter();

  const navigateTo = useCallback(() => {
    router.push(currentTab);
  }, [router, currentTab]);

  useEffect(() => {
    if (!tabs.find((tab) => tab.href === window.location.pathname)) {
      navigateTo();
    }
  }, [tabs, navigateTo]);

  if (!tabs.length) return null;
  return (
    <DndProvider backend={HTML5Backend}>
      {/* Strict 35px height, font-sans, small text, and uses --menu-bg for the tab track 
      */}
      <div className="border-b bg-[rgb(var(--menu-bg))] border-[rgb(var(--dark-border))] sticky top-0 z-20 flex text-[#cccccc] overflow-y-hidden overflow-x-auto vscode-scroll flex-none h-[35px] font-sans text-[13px] relative select-none">

        {tabs.map((tab) => (
          <Tab key={tab.href} {...tab} active={tab.href === currentTab} />
        ))}

        <DropEnd />

        {/* Right Action Buttons */}
        <div className="flex items-center flex-none sticky right-0 top-0 bottom-0 bg-[rgb(var(--menu-bg))] px-2 gap-0.5 z-10 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[1px] before:bg-[rgb(var(--dark-border))] before:-translate-x-full">
          <button className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-[4px] text-[#cccccc] transition-colors [&>svg]:w-4 [&>svg]:h-4">
            <GitCompare />
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-[4px] text-[#cccccc] transition-colors [&>svg]:w-4 [&>svg]:h-4">
            <UntoggledSidebar />
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:bg-white/10 rounded-[4px] text-[#cccccc] transition-colors [&>svg]:w-4 [&>svg]:h-4">
            <Ellipsis />
          </button>
        </div>

        {/* Custom scrollbar to keep it slim */}
        <style jsx global>
          {`
            .vscode-scroll::-webkit-scrollbar {
              height: 4px;
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
          `}
        </style>
      </div>
    </DndProvider>
  );
}

const DropEnd = () => {
  const dispatch = useDispatch();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: 'tab',
    drop(item: { href: string }) {
      dispatch(tabsSlice.actions.moveToEnd({ href: item.href }));
    },
    collect: (monitor) => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  // Fills the rest of the bar. Darkens slightly when a tab is dragged over it.
  return <div ref={drop} className={clsx('flex-1 min-w-[50px] h-full transition-colors', collectedDrop.item && collectedDrop.hover && 'bg-white/5')} />;
};

const Tab = ({ href, title, type, active }: TabData & { active: boolean }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: 'tab',
    drop(item: { href: string }) {
      if (item.href === href) return;
      dispatch(tabsSlice.actions.moveTab({ from: item.href, to: href }));
    },
    collect: (monitor) => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  const [collectedDrag, dragRef]: any = useDrag(() => ({
    type: 'tab',
    item: { href },
    collect: (monitor) => ({
      dragging: monitor.isDragging(),
    }),
  }));

  const handleClickNavigation: React.MouseEventHandler<HTMLDivElement> = (e) => {
    router.push(href);
  };

  const handleCloseTab: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(tabsSlice.actions.closeTab({ href }));
  };

  const handleCloseWithWheel: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.button === 1) {
      dispatch(tabsSlice.actions.closeTab({ href }));
      return;
    }
  };

  const handleStartDrag: React.DragEventHandler<HTMLDivElement> = (e) => {
    router.push(href);
  };

  return (
    <div
      ref={mergeRefs([dragRef, drop])}
      onDragStart={handleStartDrag}
      onClick={handleClickNavigation}
      onMouseDown={handleCloseWithWheel}
      className={clsx(
        'relative flex items-center justify-between h-full px-3 border-r border-[rgb(var(--dark-border))] group cursor-pointer min-w-max shrink-0 transition-colors',
        // Active tab uses editor background. Inactive uses menu background.
        active ? 'bg-[rgb(var(--dark-bg))] text-white' : 'bg-[rgb(var(--menu-bg))] text-[#8b949e] hover:bg-[rgba(var(--dark-bg),0.5)]',
        // Drag hover state
        collectedDrop.item && collectedDrop.item.href !== href && collectedDrop.hover && 'bg-white/10'
      )}
    >
      {/* Authentic VS Code Active Line sits at the TOP, colored by your theme */}
      {active && <span className="absolute top-0 left-0 right-0 h-[2px] bg-white" />}

      <div className="flex items-center gap-1.5 w-full">
        {/* Force icons to scale perfectly */}
        <div className="w-4 h-4 flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5">
          {fileType[type]}
        </div>

        <p className="whitespace-nowrap pr-2">{title}</p>

        {/* Authentic Close Button: Tiny, hidden unless hovered or active, sharp hover state */}
        <div
          className={clsx(
            'w-5 h-5 flex items-center justify-center hover:bg-white/10 rounded-[4px] shrink-0 transition-opacity [&>svg]:w-3.5 [&>svg]:h-3.5',
            active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          )}
          onClick={handleCloseTab}
        >
          <ChromeClose />
        </div>
      </div>
    </div>
  );
};