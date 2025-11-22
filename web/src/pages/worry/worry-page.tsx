import Button from '@components/button/button';
import StepCategory from '@pages/worry/components/step-category';
import StepDescription from '@pages/worry/components/step-description';
import { useState } from 'react';

type FunnelStep = 'CATEGORY' | 'DESCRIPTION';

const WorryFunnelPage = () => {
  const [step, setStep] = useState<FunnelStep>('CATEGORY');
  const [category, setCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const maxLength = 400;
  const minLength = 40;

  const length = description.length;

  const canNext =
    step === 'CATEGORY'
      ? category !== null
      : length >= minLength && length <= maxLength;

  const handleNext = () => {
    if (!canNext) return;

    if (step === 'CATEGORY') {
      setStep('DESCRIPTION');
      return;
    }

    // TODO: 마지막 스텝 완료 API 호출 등
  };

  return (
    <div className="flex-col-between bg-worry-funnel h-svh px-[2.4rem] pt-[2.4rem] pb-[3.2rem]">
      {step === 'CATEGORY' && (
        <StepCategory
          name="Name님"
          selectedCategory={category}
          onSelectCategory={setCategory}
        />
      )}

      {step === 'DESCRIPTION' && (
        <StepDescription
          name="Name님"
          category={category}
          value={description}
          onChange={setDescription}
          minLength={minLength}
          maxLength={maxLength}
        />
      )}

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
  );
};

export default WorryFunnelPage;
