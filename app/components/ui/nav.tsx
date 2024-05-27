"use client";
interface NavInterface {
  handleQuickMove: (index: number) => void;
}

interface NavItemInterface {
  index: number;
  context: string;
  handleQuickMove: (index: number) => void;
}

export default function Nav(props: NavInterface) {
  const { handleQuickMove } = props;
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center p-6 max-sm:p-3 w-full h-full max-h-16 z-20">
      <div
        onClick={() => {
          handleQuickMove(0);
        }}
      >
        <p className="font-medium text-xl max-sm:text-sm cursor-pointer">김준현 개발자 포트폴리오</p>
      </div>
      <div className="flex gap-6 max-sm:gap-2 max-sm:text-xs">
        {["소개", "기술 스택", "경험", "프로젝트", "연락처"].map((nav_item, index) => {
          return <NavItem key={index} index={index + 1} context={nav_item} handleQuickMove={handleQuickMove} />;
        })}
      </div>
    </div>
  );
}

const NavItem = (props: NavItemInterface) => {
  const { index, context, handleQuickMove } = props;
  return (
    <a onClick={() => handleQuickMove(index)} className="p-3 max-sm:p-0 text-gray-500 hover:text-black hover:scale-110 transition cursor-pointer">
      {context}
    </a>
  );
};
