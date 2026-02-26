import clsx from 'clsx';

export default function ToolTip({ active, className, text }: TooltipProps) {
  return (
    <span
      className={clsx(
        // Authentic visibility toggling without breaking CSS transitions
        active 
          ? 'opacity-100 visible transition-opacity duration-150 delay-500' 
          : 'opacity-0 invisible pointer-events-none transition-none delay-0',
        className,
        // VS Code styling: dark background, border, sharp shadow, and 12px sans-serif font
        'absolute bg-dark_bg border border-dark_border shadow-[0_4px_10px_rgba(0,0,0,0.5)]',
        'py-[3px] px-[8px] whitespace-nowrap text-[12px] font-sans text-[#cccccc]',
        'select-none z-50 rounded-[3px]'
      )}
    >
      {text}
    </span>
  );
}

interface TooltipProps {
  active: boolean;
  className: string;
  text: string;
}