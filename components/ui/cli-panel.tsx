import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CliLine {
  type: 'cmd' | 'output' | 'success' | 'comment';
  text: string;
}

export interface CliPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  lines: CliLine[];
}

export function CliPanel({ title = 'terminal', lines, className, ...props }: CliPanelProps) {
  return (
    <div
      className={cn(
        'rounded-[6px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 p-4 font-mono text-xs shadow-xs',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <span className="ml-2 text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
            {title}
          </span>
        </div>
        <span className="text-[10px] text-neutral-400 dark:text-neutral-600 font-mono">bash</span>
      </div>

      <div className="space-y-1.5">
        {lines.map((line, idx) => {
          if (line.type === 'cmd') {
            return (
              <div key={idx} className="flex items-start gap-2 text-neutral-900 dark:text-neutral-100 font-medium">
                <span className="text-[#171717] dark:text-[#ffffff] select-none">▲</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={idx} className="flex items-start gap-2 text-[#297a3a] dark:text-[#40c463]">
                <span className="select-none font-bold">✓</span>
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'comment') {
            return (
              <div key={idx} className="text-neutral-400 dark:text-neutral-500 italic pl-4">
                # {line.text}
              </div>
            );
          }
          return (
            <div key={idx} className="text-neutral-600 dark:text-neutral-400 pl-4">
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
