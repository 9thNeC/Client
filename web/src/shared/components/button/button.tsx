import { cn } from '@libs/cn';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'title'
> & {
  className?: string;
  title: string;
};

const Button = ({ className = '', title }: ButtonProps) => {
  const baseClass =
    'flex-row-center cursor-pointer ' +
    'py-[1.6rem] w-full rounded-[16px] ' +
    'disabled:cursor-default';

  return (
    <button type="button" className={cn(baseClass, className)}>
      <span className="h3">{title}</span>
    </button>
  );
};

export default Button;
