import Image from "next/image";

export const IntroductionPage = () => {
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
          "구인 플랫폼에서 비즈메이트를 발견한건 단순히 우연이라고 생각하지 않습니다.",
          "최근 들어, Next.js에 푹 빠져 사이드 프로젝트와 포트폴리오 웹 페이지를 개발하고 있었고 수많은 공고 중 비즈메이트의 Next.js 프론트엔드 개발자 채용 공고, 이것이 우연이라면 이번 기회에 우연을 필연으로 만들고싶습니다.",
          "비즈메이트의 일원이 되어 '함께 하고싶은', '성장과 배움에 한계가 없는', '책임을 완수하는' 동료 개발자가 되고싶습니다.",
          "비즈메이트와 함께 끝없이 성장하고 싶습니다. 나와 동료의 성장이 곧 조직의 성장이라고 생각합니다.",
        ]}
      />
      <Content
        question="질문 2. 비즈메이트 팀에서 하고 싶은 일"
        answer={[
          "비즈메이트 프론트엔드 엔지니어로 지원한만큼 프론트엔드 개발을 하고싶습니다.",
          "저는 과거 다양한 프로젝트를 진행하며 풀스택 개발을 진행한 경험이 다수 있습니다. 해당 프로젝트를 진행할 때에는 프론트엔드와 백엔드 서버 간의 통신이 필요로 했기 때문에 API 구축을 해본 경험이 있어, 데이터 통신 동작 원리 및 Data Fetch의 과정에서 기본 이상의 지식을 보유하고 있다고 생각합니다.",
          "제가 가진 개발 역량을 키워가며 UX를 잘 고려하여 ",
        ]}
      />
      <Content question="질문 3. 프론트엔드 엔지니어의 주요 업무, 자격 요건과 관련된 경험" answer={[""]} />
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
