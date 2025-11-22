import companyIcon from '@icons/category-company.svg';
import dreamIcon from '@icons/category-dream.svg';
import etcIcon from '@icons/category-etc.svg';
import familyIcon from '@icons/category-family.svg';
import healthIcon from '@icons/category-health.svg';
import moneyIcon from '@icons/category-money.svg';
import pencilIcon from '@icons/category-pencil.svg';
import relationIcon from '@icons/category-relation.svg';

type StepCategoryProps = {
  name: string;
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
};

const CATEGORY_ITEMS = [
  { label: '학업', icon: pencilIcon },
  { label: '직장', icon: companyIcon },
  { label: '가족', icon: familyIcon },
  { label: '진로', icon: dreamIcon },
  { label: '건강', icon: healthIcon },
  { label: '관계', icon: relationIcon },
  { label: '경제', icon: moneyIcon },
  { label: '기타', icon: etcIcon },
] as const;

const StepCategory = ({
  name,
  selectedCategory,
  onSelectCategory,
}: StepCategoryProps) => {
  return (
    <section className="w-full flex-col gap-[3.2rem]">
      <h1 className="h3">
        {name}이 가지고 계신 고민의
        <br />
        카테고리를 선택해주세요!
      </h1>

      <div className="grid w-full grid-cols-3 gap-[1.0rem]">
        {CATEGORY_ITEMS.map(({ label, icon }) => {
          const isActive = selectedCategory === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => onSelectCategory(label)}
              className={
                'flex-col-center b1 gap-[1rem] rounded-[8px] border px-[1.6rem] pt-[1.6rem] pb-[1rem] text-black ' +
                (isActive
                  ? 'bg-blue-10 border-blue-50'
                  : 'border-gray-10 bg-white')
              }
            >
              <div className="flex-col-center gap-[1rem]">
                <img
                  src={icon}
                  alt={`${label} 아이콘`}
                  className="h-[2.4rem] w-auto"
                />
                <span className="b1">{label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default StepCategory;
