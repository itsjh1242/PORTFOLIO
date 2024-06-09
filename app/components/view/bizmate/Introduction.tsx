"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CustomButton from "../../ui/Button";

export const IntroductionPage = () => {
  const router = useRouter();

  const handleRouter = () => {
    return router.push("/portfolio");
  };

  return (
    <main className="w-screen max-w-screen-xl h-full min-h-screen m-auto py-10 px-4">
      {/* 헤더 */}
      <header className="flex items-center gap-4 mb-12">
        <Image src="/bizmate/bizmate-logo.png" width={80} height={40} alt="logo" />
        <div>
          <h1 className="text-2xl font-bold">비즈메이트 프론트엔드 엔지니어(신입) - 김준현</h1>
          <p className="text-sm text-gray-600">필수 제출 내용</p>
        </div>
      </header>
      <Divider />
      {/* 질문 섹션 */}
      <Content
        question="질문 1. 비즈메이트 팀에 지원한 이유"
        answer={[
          "구인 플랫폼에서 비즈메이트를 발견한 것은 단순한 우연이 아니라고 생각합니다.",
          "최근 Next.js에 푹 빠져 사이드 프로젝트와 포트폴리오 웹 페이지를 개발하고 있었는데, 많은 공고 중 비즈메이트의 Next.js 프론트엔드 개발자 채용 공고를 발견했습니다. 이것이 우연이라면, 이번 기회에 우연을 필연으로 만들고 싶습니다.",
          "비즈메이트의 일원이 되어 '함께하고 싶은', '성장과 배움에 한계가 없는', '책임을 완수하는' 동료 개발자가 되고 싶습니다.",
          "또한, 비즈메이트와 함께 끝없이 성장하고 싶습니다. 나와 동료의 성장이 곧 조직의 성장이라고 생각합니다.",
        ]}
      />
      <Content
        question="질문 2. 비즈메이트 팀에서 하고 싶은 일"
        answer={[
          "비즈메이트에서 프론트엔드 개발자로서 웹이나 앱, 코드를 작성하는 일이라면 무엇이든 자신 있습니다. 경험해보지 않아서 잘 모른다는 것은, 다른 의미로 배울 수 있다는 것을 의미하기 때문입니다.",
          "저는 과거 다양한 프로젝트를 진행하며 풀스택 개발을 경험한 바 있습니다. 해당 프로젝트를 진행할 때 프론트엔드와 백엔드 서버 간의 통신이 필요했기 때문에 API 구축을 해본 경험이 있으며, 데이터 통신 동작 원리 및 백엔드와 프론트엔드의 협업 과정에 대한 기본 지식을 보유하고 있다고 생각합니다.",
          "또한, UX를 고려하여 직관적이고 사용성이 편리한 UI를 디자인하는 것을 즐깁니다. 비즈메이트의 프론트엔드 엔지니어로서 클린 코드를 잘 작성하는 것뿐만 아니라, 어떤 디자인이 사용자에게 더 많은 방문을 유도할 수 있을지 고민하고 싶습니다.",
        ]}
      />
      <Content
        question="질문 3. 프론트엔드 엔지니어의 주요 업무, 자격 요건과 관련된 경험"
        answer={[
          "[질문 2]에서 언급했듯이 지금까지 진행한 모든 프로젝트의 프론트엔드를 직접 디자인하고 개발했습니다.",
          "컴포넌트 구조를 기반으로 하는 React와 Next.js를 사용하여 개발할 때, 중복된 컴포넌트를 재사용 가능한 단위로 통합 및 병합하여 사용성을 극대화하고 성능을 최적화하는 과정에 관심을 가지고 있습니다.",
          "진행했던 프론트엔드를 포함한 모든 프로젝트에 대한 내용은 김준현 포트폴리오 웹의 프로젝트 페이지에 상세히 기술되어 있습니다.",
        ]}
      />
      {/* 포트폴리오 페이지 바로가기 */}
      <CustomButton
        type={"primary"}
        context={"포트폴리오 보러가기"}
        action={() => {
          handleRouter();
        }}
      />
    </main>
  );
};

const Divider = () => <div className="w-full h-px bg-gray-300 my-8" />;

const Content = ({ question, answer }: { question: string; answer: string[] }) => {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-2">{question}</h2>
      {answer.map((item, index) => {
        return (
          <p key={index} className="text-gray-700">
            {item}
          </p>
        );
      })}

      <Divider />
    </section>
  );
};
