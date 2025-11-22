import { useEffect, useRef } from 'react';

type RecordProps = {
  value?: string;
};

const Record = ({ value = '' }: RecordProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const safeValue = value ?? '';

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    autoResize();
  }, [safeValue]);

  return (
    <section className="w-full flex-col gap-[1.6rem]">
      <p className="b2 text-gray-90 gap-[0.8rem]">
        [Name]님이
        <br />
        [yyyy.mm.dd]에 알려주신 고민이에요
      </p>

      <div className="flex-col gap-[0.8rem]">
        <div className="border-blue-20 rounded-[16px] border bg-white p-[2rem] shadow-[0_0_16px_rgba(51,124,233,0.10)]">
          <textarea
            ref={textareaRef}
            value={safeValue}
            readOnly
            className="b3 text-gray-90 h-auto min-h-[24rem] w-full resize-none overflow-hidden border-none bg-transparent p-0 outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Record;
