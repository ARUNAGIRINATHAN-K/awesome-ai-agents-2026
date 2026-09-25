import * as React from 'react';
import { cn } from '@/lib/utils';

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('space-y-4 w-full', className)} {...props} />;
  }
);
FieldGroup.displayName = 'FieldGroup';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'vertical' | 'horizontal';
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = 'vertical', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'space-y-1.5',
          orientation === 'horizontal' && 'flex flex-row items-center justify-between space-y-0 gap-3',
          className
        )}
        {...props}
      />
    );
  }
);
Field.displayName = 'Field';

export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'text-[11px] font-mono tracking-[0.071em] uppercase font-semibold text-neutral-900 dark:text-neutral-100 block',
          className
        )}
        {...props}
      />
    );
  }
);
FieldLabel.displayName = 'FieldLabel';

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-[11px] font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed', className)}
        {...props}
      />
    );
  }
);
FieldDescription.displayName = 'FieldDescription';
