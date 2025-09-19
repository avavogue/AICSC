
import React from 'react';
import { CoverPage } from './components/CoverPage';
import { Section } from './components/Section';
import { CurriculumFramework } from './components/CurriculumFramework';
import { TeachingPlan } from './components/TeachingPlan';
import { LearningSheet } from './components/LearningSheet';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="container mx-auto p-4 md:p-8 max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
            114學年度 教育議題融入教學活動方案
          </h1>
          <p className="text-lg text-slate-400">符合國立臺中教育大學徵選規範</p>
        </header>

        <div className="space-y-12">
          <CoverPage />

          <Section title="壹、設計理念" icon="fa-lightbulb">
            <p className="leading-relaxed">
              本教案旨在回應十二年國教課綱強調的素養導向教學，並深度結合全球關注的「永續發展目標(SDGs)」與現代公民必備的「金融理財教育」。我們觀察到國中生處於價值觀形塑與消費習慣養成的關鍵期，對消費世界充滿好奇，卻常缺乏批判性思考與長遠規劃的能力。
            </p>
            <p className="leading-relaxed mt-4">
              因此，本課程以「小小理財家，永續大未來」為核心，設計一系列體驗式與探究式活動，引導學生將個人的「消費選擇」與「理財規劃」連結至更大的「社會責任」與「環境永續」。課程將從分辨「需要」與「想要」出發，導入SDG 12「負責任的消費與生產」，進而學習實用的預算規劃、聰明消費策略，並最終將所學內化為具體的「永續消費行動宣言」。我們期望透過此教案，不僅培養學生的理財知能，更能啟發他們成為具備同理心、宏觀視野與實踐力的世界公民。
            </p>
          </Section>

          <Section title="貳、學生背景分析" icon="fa-users">
            <p className="leading-relaxed">
              本教案設計對象為國中二年級學生，約13-14歲。此階段學生的身心發展與認知特徵如下：
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-slate-300">
              <li><strong className="text-cyan-400">認知發展：</strong>正處於皮亞傑(Piaget)認知發展理論的形式運思期，開始具備抽象思維、邏輯推理與假設演繹的能力，能理解如「永續」、「機會成本」等較為抽象的概念。</li>
              <li><strong className="text-cyan-400">社群與認同：</strong>同儕影響力達到高峰，重視群體認同。消費行為常與社交、潮流及自我形象連結，易受廣告與網紅影響。</li>
              <li><strong className="text-cyan-400">金錢觀念：</strong>多數學生有零用錢或少量可支配所得，對「購買」有實際經驗，但對預算規劃、儲蓄、價值判斷等概念較為薄弱，常陷入「想要」的消費陷阱。</li>
              <li><strong className="text-cyan-400">科技使用：</strong>熟悉智慧型手機與網路社群，是數位原生代。能快速獲取資訊，但也易受演算法推薦與不實廣告影響。可利用數位工具輔助學習（如記帳APP）。</li>
              <li><strong className="text-cyan-400">社會覺知：</strong>對社會議題開始產生興趣，具備初步的正義感與同理心，是引導其關注永續發展等全球議題的良好時機。</li>
            </ul>
          </Section>

          <Section title="參、課程架構圖" icon="fa-sitemap">
              <CurriculumFramework />
          </Section>
          
          <Section title="肆、教學活動方案" icon="fa-person-chalkboard">
            <TeachingPlan />
          </section>

          <Section title="伍、學習單" icon="fa-clipboard-list">
            <LearningSheet />
          </Section>
          
          <Section title="陸、教學省思" icon="fa-brain">
            <p className="leading-relaxed">
              本課程在設計上力求理論與實踐結合，但在未實際教學前，預期學生可能面臨以下學習問題與挑戰：
            </p>
            <p className="leading-relaxed mt-4">
              首先，「SDGs」與「永續消費」對部分學生而言可能仍是抽象概念，不易與自身生活連結。教學上需透過更多元、更生活化的案例（如手搖飲的環保杯、快時尚的背後成本），將全球議題轉化為「有感」的個人選擇。其次，學生的家庭經濟背景各異，在討論消費與理財時，需特別注意引導方式，避免造成學生的比較心態或壓力，應強調「在自己能力範圍內做出最好的選擇」的核心觀念。最後，從「知道」到「做到」是最大的挑戰，課程結束後學生是否能持續實踐永續消費，需要後續的追蹤與鼓勵，或可與學校的常規活動（如園遊會、班級佈置）結合，創造實踐的場域。
            </p>
          </Section>

          <Section title="柒、參考資料" icon="fa-book">
             <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>教育部國民及學前教育署 (2018)。十二年國民基本教育課程綱要——社會領域。</li>
                <li>教育部國民及學前教育署 (2018)。十二年國民基本教育課程綱要——綜合活動領域。</li>
                <li>聯合國 (2015)。永續發展目標 (SDGs)。取自 https://www.un.org/sustainabledevelopment/</li>
                <li>金融監督管理委員會金融智慧網。https://moneywise.fsc.gov.tw/</li>
             </ul>
          </Section>
          
          <div className="text-center pt-8 mt-12 border-t-2 border-slate-700">
             <h3 className="text-lg font-semibold text-cyan-400">AI 協作說明</h3>
             <p className="text-sm text-slate-400 mt-2 max-w-2xl mx-auto">
               本教案之架構、內容發想與文字潤飾，在設計者設定之主題、教學目標與核心概念下，部分由 Gemini API 提供協力，並由設計者進行最終的篩選、修改與整合，以確保其原創性、教育價值及符合競賽規範。
             </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
