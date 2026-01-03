import { AppSidebar } from "./components/common"
import { SkeletonHotTopic, SkeletonNewTopic } from "./components/skeleton"

function App() {
  return (
    <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
      {/* 카테고리 사이드바 */}
      <AppSidebar></AppSidebar>
      {/* 토픽 컨텐츠 */}
      <section className="flex-1 flex flex-col gap-12">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/assets/fire.gif" alt="img" className="w-7 h-7" />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                HOT 토픽
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              지금 가장 주목받는 주제들을 살펴보고, 다양한 과목의 인사이트를
              얻어보세요.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <SkeletonHotTopic></SkeletonHotTopic>
            <SkeletonHotTopic></SkeletonHotTopic>
            <SkeletonHotTopic></SkeletonHotTopic>
            <SkeletonHotTopic></SkeletonHotTopic>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img
                src="/assets/writing-hand.gif"
                alt="img"
                className="w-7 h-7"
              />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                NEW 토픽
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              새로운 시선으로, 새로운 이야기를 시작하세요. 지금 바로 당신만의
              토픽을 시작하세요.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <SkeletonNewTopic></SkeletonNewTopic>
            <SkeletonNewTopic></SkeletonNewTopic>
            <SkeletonNewTopic></SkeletonNewTopic>
            <SkeletonNewTopic></SkeletonNewTopic>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
