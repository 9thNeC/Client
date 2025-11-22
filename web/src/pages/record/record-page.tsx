import { cn } from '@libs/cn';
import RecordSection from '@pages/record/components/record';
import ChallengePostit from '@pages/worry/components/challenge-postit';
import { useLocation, useNavigate } from 'react-router-dom';

import { getHeaderContent } from '@/shared/utils/get-header';

const RecordPage = () => {
  const location = useLocation();
  const state = location.state as { value?: string } | undefined;
  const value = state?.value ?? '';

  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const urlParams = new URLSearchParams(search);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={cn('flex h-svh flex-col', 'bg-worry-funnel')}>
      <header className="header-layout">
        {getHeaderContent(pathname, urlParams, handleBack)}
      </header>

      <main className="flex-col gap-[2.4rem] overflow-y-auto px-[2.4rem] pt-[2.4rem] pb-[3.2rem]">
        <RecordSection value={value} />

        <section className="w-full flex-col gap-[1.6rem]">
          <p className="b2 text-gray-90">
            [Name]님을 위한
            <br />
            위로와 극복 챌린지예요
          </p>

          <div className="flex w-full justify-center pt-[0.8rem]">
            <div className="border-blue-20 flex w-full rounded-[16px] border bg-white px-[2.5rem] py-[2.8rem]">
              <div className="flex-col gap-[2.4rem]">
                <p className="b3 text-gray-80 whitespace-pre-line">dfsdf</p>

                <ChallengePostit
                  title="와작와작 과자먹기"
                  body={
                    '나만을 위한 작은 보상 타임이에요.\n오늘 하루 수고한 나에게 과자를 선물해 보세요.'
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RecordPage;
