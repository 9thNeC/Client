import Button from '@components/button/button';
import StepCategory from '@pages/worry/components/step-category';
import StepDescription from '@pages/worry/components/step-description';
import { useState } from 'react';

export const PROFANITY_LIST = ['나쁜말1', '나쁜말2'];

type FunnelStep = 'CATEGORY' | 'DESCRIPTION';

const WorryFunnelPage = () => {
  const [step, setStep] = useState<FunnelStep>('CATEGORY');
  const [category, setCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const maxLength = 400;
  const minLength = 10;

  const length = description.length;
  const containsProfanity = PROFANITY_LIST.some((bad) =>
    description.includes(bad),
  );
  const canNext =
    step === 'CATEGORY'
      ? category !== null
      : length >= minLength && length <= maxLength && !containsProfanity;

  const handleNext = () => {
    if (!canNext) return;

    if (step === 'CATEGORY') {
      setStep('DESCRIPTION');
      return;
    }

    // TODO: 마지막 스텝 완료 API 호출 등
  };

  return (
    <div className="flex-col-between bg-worry-funnel h-svh px-[2.4rem] pt-[2.4rem]">
      {step === 'CATEGORY' && (
        <StepCategory
          name="Name님"
          selectedCategory={category}
          onSelectCategory={setCategory}
        />
      )}

      {step === 'DESCRIPTION' && (
        <StepDescription
          value={description}
          onChange={setDescription}
          minLength={minLength}
          maxLength={maxLength}
        />
      )}
      <div className="w-full pt-[1rem] pb-[5rem]">
        <Button
          title="다음"
          disabled={!canNext}
          className={
            canNext
              ? 'bg-blue-80 text-white'
              : 'bg-gray-20 text-gray-40 cursor-default'
          }
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default WorryFunnelPage;
