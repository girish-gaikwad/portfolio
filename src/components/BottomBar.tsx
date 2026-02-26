'use client';
import { Bell, CloudUpload, Info, RadioTower, Remote, SourceControl, Warning } from '@/icons';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import ToolTip from './ToolTip';

const rightItems = [
  {
    icon: <span>Spaces: 2</span>,
    text: 'Select Indentation',
    position: 'center' as const,
    className: 'hidden md:flex',
  },
  {
    icon: <span>UTF-8</span>,
    text: 'Select Encoding',
    position: 'center' as const,
    className: 'hidden sm:flex',
  },
  {
    icon: <span>CRLF</span>,
    text: 'Select End of Line Sequence',
    position: 'center' as const,
    className: 'hidden sm:flex',
  },
  {
    icon: <span>{`{ }`} TypeScript JSX</span>,
    text: 'Select Language Mode',
    position: 'center' as const,
    className: 'hidden sm:flex',
  },
  {
    icon: (
      <div className="flex items-center gap-1">
        <RadioTower />
        <span>Go Live</span>
      </div>
    ),
    text: 'Click to run live server',
    position: 'right' as const,
  },
  {
    icon: <Bell />,
    text: 'No Notifications',
    position: 'right' as const,
  },
];

export default function BottomBar() {
  return (
    // Enforced strict 22px height, 12px sans-serif font, and dark-theme matching colors
    <div className="flex justify-between h-[24px] border-t border-[rgb(var(--dark-border))] bg-[rgb(var(--dark-bg))] text-[#cccccc] font-sans text-[12px] select-none z-40 relative">

      {/* Left Section */}
      <div className="flex items-center h-full">
        {/* Authentic VS Code Remote Indicator (Solid Blue) */}
        <StatusItem
          icon={<Remote />}
          text="Open a Remote Window"
          position="left"
          wrapperClass="bg-[#007fd4] hover:bg-[#1f8ad2] text-white px-3"
        />
        <StatusItem
          icon={
            <div className="flex items-center gap-1">
              <SourceControl />
              <span>main*</span>
            </div>
          }
          text="portfolio Git - main*"
          position="left"
        />
        <StatusItem
          icon={<CloudUpload />}
          text="portfolio (Git) - Publish Branch"
          position="center"
          wrapperClass="hidden sm:flex"
        />
        <StatusItem
          icon={
            <div className="flex items-center gap-1">
              <Info />
              <span>0</span>
              <span className="ml-0.5"><Warning /></span>
              <span>0</span>
            </div>
          }
          text="No Problems"
          position="center"
          wrapperClass="hidden sm:flex"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center h-full">
        {rightItems.map((item, index) => (
          <StatusItem
            key={index}
            icon={item.icon}
            text={item.text}
            position={item.position}
            wrapperClass={item.className}
          />
        ))}
      </div>
    </div>
  );
}

// Custom wrapper to handle the exact 22px hitboxes and pop-up positioning
function StatusItem({
  icon,
  text,
  position,
  wrapperClass
}: {
  icon: JSX.Element;
  text: string;
  position: 'left' | 'right' | 'center';
  wrapperClass?: string
}) {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn = useCallback(() => setToolTipActive(true), []);
  const handleMouseOut = useCallback(() => setToolTipActive(false), []);

  // Tooltips on the bottom bar pop UPWARDS in VS Code
  let tooltipClasses = 'bottom-full mb-0 ';

  switch (position) {
    case 'right':
      tooltipClasses += 'right-0';
      break;
    case 'left':
      tooltipClasses += 'left-0';
      break;
    case 'center':
      tooltipClasses += 'left-1/2 -translate-x-1/2';
      break;
  }

  return (
    <div
      className={clsx(
        'relative h-full flex items-center justify-center px-2 cursor-pointer transition-colors opacity-90 hover:opacity-100',
        wrapperClass ? wrapperClass : 'hover:bg-white/10 text-[#cccccc]'
      )}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      {/* Forces icons to be perfectly sized and centered next to text */}
      <div className="flex items-center justify-center [&>svg]:w-3.5 [&>svg]:h-3.5">
        {icon}
      </div>

      {/* We pass the tooltip position classes to your existing ToolTip component.
        Ensure your global ToolTip handles the 'bottom-full' class correctly! 
      */}
      <ToolTip active={toolTipActive} className={tooltipClasses} text={text} />
    </div>
  );
}