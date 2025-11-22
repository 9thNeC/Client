import Button from '@components/button/button';
import Input, { type NicknameStatus } from '@pages/signup/components/input';
import { useMemo, useState } from 'react';

const Signup = () => {
  const [nickname, setNickname] = useState('');
  const [touched, setTouched] = useState(false);

  const { status, helperText } = useMemo(() => {
    if (!touched || nickname.length === 0) {
      return { status: 'default' as NicknameStatus, helperText: '' };
    }

    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,7}$/;

    if (!regex.test(nickname)) {
      if (nickname.length < 2) {
        return {
          status: 'error' as NicknameStatus,
          helperText: '최소 2자 이상 입력해주세요',
        };
      }

      return {
        status: 'error' as NicknameStatus,
        helperText: '2-7자의 한글, 영문, 숫자만 사용할 수 있어요',
      };
    }

    return {
      status: 'success' as NicknameStatus,
      helperText: '사용할 수 있는 닉네임이에요',
    };
  }, [nickname, touched]);

  const isValid = status === 'success';

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!touched) setTouched(true);
    setNickname(e.target.value);
  };

  const handleBlur = () => {
    if (!touched) setTouched(true);
  };

  const handleNext = () => {
    if (!isValid) return;
    // TODO: 다음 퍼널 단계로 이동
  };

  return (
    <div className="bg-gray-5 flex-col-between h-svh px-[2.4rem] pt-[3.2rem] pb-[9rem]">
      <section className="w-full flex-col gap-[3.6rem]">
        <div className="flex-col gap-[0.4rem]">
          <h1 className="h2">어떤 닉네임으로 불러드릴까요?</h1>
          <p className="b3 text-blue-60">
            2-7자의 한글, 영문, 숫자만 사용할 수 있어요
          </p>
        </div>

        <Input
          value={nickname}
          status={status}
          helperText={helperText}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </section>

      <div className="w-full">
        <Button
          title="다음"
          className={
            isValid
              ? 'bg-blue-80 text-white'
              : 'bg-gray-20 text-gray-40 cursor-default'
          }
          onClick={handleNext}
          disabled={!isValid}
        />
      </div>
    </div>
  );
};

export default Signup;
