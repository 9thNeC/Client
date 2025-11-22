import { cn } from '@libs/cn';
import type { ButtonHTMLAttributes } from 'react';

type SmallButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'title'
> & {
  className?: string;
  title: string;
};

const SmallButton = ({ className = '', title }: SmallButtonProps) => {
  const baseClass =
    'flex-row-center cursor-pointer ' +
    'px-[1.2rem] py-[1.6rem] w-full rounded-[16px] ' +
    'disabled:cursor-default';

  return (
    <button type="button" className={cn(baseClass, className)}>
      <span className="b1">{title}</span>
    </button>
  );
};

export default SmallButton;
