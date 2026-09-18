import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'filled' | 'outline' | 'ghost' | 'pill' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center whitespace-nowrap rounded-[6px] text-xs font-medium font-sans transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]';

    const variants = {
      default:
        'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-xs border border-transparent',
      filled:
        'bg-[#171717] text-white dark:bg-[#ededed] dark:text-[#0a0a0a] hover:bg-black dark:hover:bg-white shadow-xs border border-transparent',
      outline:
        'border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900',
      ghost:
        'border border-transparent bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100',
      pill:
        'rounded-full bg-[#171717] text-white dark:bg-[#ededed] dark:text-[#0a0a0a] hover:bg-black dark:hover:bg-white px-3 py-1 text-xs font-mono',
      link:
        'text-neutral-900 dark:text-neutral-100 underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes = {
      default: 'h-9 px-3.5 py-1.5',
      sm: 'h-7 rounded-[6px] px-2.5 text-xs',
      lg: 'h-10 rounded-[6px] px-5 text-sm',
      icon: 'h-8 w-8 rounded-[6px]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
