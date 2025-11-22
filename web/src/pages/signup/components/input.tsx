import { cn } from '@libs/cn';
import type { ChangeEvent, FocusEvent, InputHTMLAttributes } from 'react';

export type NicknameStatus = 'default' | 'error' | 'success';

type NicknameInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'onBlur'
> & {
  value: string;
  status: NicknameStatus;
  helperText?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  value,
  status,
  helperText,
  onChange,
  onBlur,
  ...rest
}: NicknameInputProps) => {
  const inputBase =
    'h-[5.2rem] w-full rounded-[16px] border px-[2rem] ' +
    'bg-white text-gray-90 placeholder:text-gray-50 ' +
    'focus:outline-none b3';

  const borderClass = 'border-gray-10';

  let helperColor = 'text-gray-40';
  if (status === 'error') {
    helperColor = 'text-error';
  } else if (status === 'success') {
    helperColor = 'text-success';
  }

  return (
    <div className="flex flex-col">
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={cn(inputBase, borderClass)}
        placeholder="닉네임을 입력해주세요"
        {...rest}
      />

      {helperText && status !== 'default' && (
        <p className={cn('b4 mt-[0.8rem] pl-[0.7rem]', helperColor)}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
