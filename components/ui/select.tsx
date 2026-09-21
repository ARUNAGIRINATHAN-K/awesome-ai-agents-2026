import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SelectItemOption {
  label: string;
  value: string;
}

interface SelectContextType {
  value?: string;
  onValueChange?: (value: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLabel: string;
  setSelectedLabel: React.Dispatch<React.SetStateAction<string>>;
}

const SelectContext = React.createContext<SelectContextType>({
  open: false,
  setOpen: () => {},
  selectedLabel: '',
  setSelectedLabel: () => {},
});

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  items?: SelectItemOption[];
  id?: string;
}

const Select: React.FC<SelectProps> = ({
  children,
  className,
  value,
  defaultValue,
  onValueChange,
  items,
  id,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || value || '');
  const [open, setOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState('');

  const containerRef = React.useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = React.useCallback(
    (val: string) => {
      setInternalValue(val);
      onValueChange?.(val);
    },
    [onValueChange]
  );

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
        selectedLabel,
        setSelectedLabel,
      }}
    >
      <div ref={containerRef} id={id} className={cn('relative w-full', className)} {...props}>
        {items ? (
          <>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {items.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </>
        ) : (
          children
        )}
      </div>
    </SelectContext.Provider>
  );
};
Select.displayName = 'Select';

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { open, setOpen } = React.useContext(SelectContext);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'flex h-9 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-xs font-mono text-neutral-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:focus-visible:ring-neutral-100',
          className
        )}
        {...props}
      >
        {children}
        <svg
          className={cn('h-3.5 w-3.5 opacity-60 transition-transform duration-200 shrink-0 ml-2', open && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }
);
SelectTrigger.displayName = 'SelectTrigger';

export interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder = 'Select an option', children, ...props }, ref) => {
    const { value, selectedLabel } = React.useContext(SelectContext);

    const displayText = selectedLabel || value || placeholder;

    return (
      <span ref={ref} className={cn('block truncate text-left w-full', className)} {...props}>
        {children || displayText}
      </span>
    );
  }
);
SelectValue.displayName = 'SelectValue';

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = React.useContext(SelectContext);

    return (
      <div
        ref={ref}
        className={cn(
          'absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-950',
          !open && 'hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
SelectContent.displayName = 'SelectContent';

export interface SelectGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-0.5', className)} {...props}>
        {children}
      </div>
    );
  }
);
SelectGroup.displayName = 'SelectGroup';

export interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, onClick, ...props }, ref) => {
    const { value: selectedValue, onValueChange, setOpen, setSelectedLabel } = React.useContext(SelectContext);

    const isSelected = selectedValue === value;
    const labelString = typeof children === 'string' ? children : String(children);

    React.useEffect(() => {
      if (isSelected && labelString) {
        setSelectedLabel(labelString);
      }
    }, [isSelected, labelString, setSelectedLabel]);

    const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      onValueChange?.(value);
      setSelectedLabel(labelString);
      setOpen(false);
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        onClick={handleSelect}
        className={cn(
          'flex cursor-pointer items-center justify-between rounded px-2.5 py-1.5 text-xs font-mono text-neutral-900 transition-colors hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-900',
          isSelected && 'bg-neutral-100 font-semibold dark:bg-neutral-900',
          className
        )}
        {...props}
      >
        <span className="truncate">{children}</span>
        {isSelected && (
          <svg className="h-3 w-3 text-neutral-900 dark:text-neutral-100 shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    );
  }
);
SelectItem.displayName = 'SelectItem';

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
};
