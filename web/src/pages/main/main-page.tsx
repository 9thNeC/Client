import Button from '@components/button/button';

const Main = () => {
  return (
    <div className="text-gray-90 flex-col-center px-[2.4rem] pt-[5rem]">
      <h1 className="h1">타이포 heading large</h1>
      <h2 className="h2">타이포 heading medium</h2>
      <h3 className="h3">타이포 heading small</h3>
      <br />
      <p className="b1">타이포 body large</p>
      <p className="b2">타이포 body medium</p>
      <p className="b3">타이포 body small</p>

      <div className="mt-[3.2rem] flex w-full flex-col gap-[1.6rem]">
        <Button className="bg-blue-80 w-full text-white">고민 상담하기</Button>

        <Button className="w-full bg-[#B7D589] text-white">다음</Button>

        <Button className="bg-gray-10 w-full text-gray-50" disabled>
          다음
        </Button>

        <Button className="w-full bg-[#0846A5] text-white">공유하기</Button>
      </div>
    </div>
  );
};

export default Main;
