
import React from 'react';

const planData = [
    { name: "單元名稱", content: "小小理財家，永續大未來", span: 3 },
    { name: "總節數", content: "共 4 節，180 分鐘" },
    { name: "實施年級", content: "國中二年級" },
    { name: "課程實施領域/科目", content: "社會領域、綜合活動領域" },
    { name: "設計者", content: "(系級 + 姓名)" },
    {
      name: "設計依據",
      content: (
        <div className="text-left">
          <h4 className="font-semibold text-cyan-400">【學習表現】</h4>
          <ul className="list-disc list-inside ml-2">
            <li>綜2a-IV-1 規劃、執行與評估個人及家庭的資源與財務管理計畫。</li>
            <li>社3b-IV-3 應用資料、證據，探究、思辨及解決現代社會的公共議題。</li>
          </ul>
          <h4 className="font-semibold text-cyan-400 mt-2">【學習內容】</h4>
          <ul className="list-disc list-inside ml-2">
            <li>綜Ab-IV-1 家庭與社區資源的運用與理財。</li>
            <li>社Ec-IV-2 資源稀少性、機會成本、供給與需求等經濟學基本概念。</li>
          </ul>
        </div>
      ),
      span: 3,
    },
    {
        name: "核心素養",
        content: (
            <div className="text-left">
              <ul className="list-disc list-inside ml-2">
                <li>A2-系統思考與解決問題</li>
                <li>B1-符號運用與溝通表達</li>
                <li>C2-人際關係與團隊合作</li>
              </ul>
            </div>
          ),
          span: 3,
    },
    {
        name: "議題融入",
        content: (
          <div className="text-left">
            <h4 className="font-semibold text-cyan-400">【議題名稱】</h4>
            <p>生涯規劃教育、環境教育、戶外教育、國際教育、品德教育、閱讀素養教育、<strong className="text-amber-300">金融與理財教育</strong>、<strong className="text-amber-300">聯合國永續發展目標(SDGs)</strong></p>
            <h4 className="font-semibold text-cyan-400 mt-2">【學習主題與實質內涵】</h4>
            <ul className="list-disc list-inside ml-2">
               <li><strong>環E3</strong> 覺知人類的消費型態對環境的衝擊，建立綠色消費的觀念與習慣。</li>
               <li><strong>金A1</strong> 了解個人與家庭的收入與支出，並能編列預算。</li>
               <li><strong>SDG 12</strong> 促進綠色經濟，確保永續消費及生產模式。</li>
            </ul>
          </div>
        ),
        span: 3,
    },
    {
      name: "教學設備/資源",
      content: "電腦、投影機、學習單、情境圖卡、網路資源(廣告影片、綠色產品標章網站)",
      span: 3,
    },
    {
      name: "學習目標",
      content: (
        <ol className="list-decimal list-inside text-left">
            <li>能分辨「需要」與「想要」的差別，並連結至SDG 12負責任消費的概念。</li>
            <li>能運用預算規劃與記帳，分析自己的消費習慣。</li>
            <li>能辨識常見的消費陷阱，並提出聰明的綠色消費策略。</li>
            <li>能制定個人的永續消費行動宣言，並願意在生活中實踐。</li>
        </ol>
      ),
      span: 3
    }
];

const activityPlan = [
    {
        period: "第一節：慾望的陷阱與地球的吶喊",
        activities: [
            {
                type: "【引起動機】 (10分鐘)",
                description: "教師展示兩張情境圖卡：「一個人在沙漠中，眼前有一瓶水和一台最新款手機」、「一個學生書包破了，眼前有平價實用的新書包和一個名牌潮流包」。引導學生分組討論會如何選擇，並說明理由。",
                assessment: "能參與討論並表達自己的想法。"
            },
            {
                type: "【發展活動】 (30分鐘)",
                description: "1. 教師引導學生歸納「需要」與「想要」的定義。 2. 播放SDG 12相關短片（如快時尚背後的環境問題），讓學生理解過度消費對地球造成的負擔。 3. 教師總結個人消費選擇與全球永續發展的關聯性。",
                assessment: "能說出需要與想要的區別，並舉出一個過度消費影響環境的例子。"
            },
            {
                type: "【總結活動】 (5分鐘)",
                description: "請學生在聯絡簿上寫下一個本週自己「想要」但非「需要」的物品，以及一個可以替代的滿足方式。",
                assessment: "能完成指定作業。"
            }
        ]
    },
    {
        period: "第二節：我的金錢儀表板",
        activities: [
            {
                type: "【引起動機】 (5分鐘)",
                description: "教師提問：「上個月的零用錢花到哪裡去了？還記得嗎？」讓學生感受金錢流向的「失憶」狀況。",
                assessment: "能專心聽講並思考問題。"
            },
            {
                type: "【發展活動】 (35分鐘)",
                description: "1. 教師介紹「預算」與「記帳」的概念，將其比喻為開車時的「導航」與「儀表板」。 2. 發下【學習單一：我的永續消費週記】，講解如何記錄支出與分類（食、衣、住、行、育、樂）。 3. 帶領學生預估自己一週的花費，訂下初步的預算。",
                assessment: "能理解預算與記帳的用途，並完成學習單的預算規劃部分。"
            },
            {
                type: "【總結活動】 (5分鐘)",
                description: "提醒學生本週需確實記錄消費，下週上課將進行討論。鼓勵學生可使用手機記帳APP輔助。",
                assessment: "了解回家作業內容。"
            }
        ]
    },
    {
        period: "第三節：聰明消費，綠色選擇",
        activities: [
             {
                type: "【引起動機】 (10分鐘)",
                description: "播放2-3則有趣的廣告影片，讓學生討論「廣告說的都是真的嗎？它最想讓你做什麼事？」",
                assessment: "能參與討論，並說出廣告的目的。"
            },
            {
                type: "【發展活動】 (30分鐘)",
                description: "1. 讓學生分組分享上週的記帳結果，討論「超支」或「結餘」的原因。 2. 教師介紹「聰明消費三思」：比價、比質、比需求，並介紹常見的綠色標章（如環保標章、節能標章）。 3. 引導學生思考如何用同樣的預算，做出更環保、更永續的消費選擇。",
                assessment: "能分析自己的消費紀錄，並提出至少一項綠色消費策略。"
            },
            {
                type: "【總結活動】 (5分鐘)",
                description: "教師總結：聰明消費不等於不消費，而是讓每一塊錢都發揮最大的價值，同時對地球更友善。",
                assessment: "能專心聽講。"
            }
        ]
    },
     {
        period: "第四節：我的永續消費宣言",
        activities: [
             {
                type: "【引起動機】 (5分鐘)",
                description: "回顧前三節課的學習重點：需要vs想要、記帳與預算、聰明綠色消費。",
                assessment: "能回想並說出課程重點。"
            },
            {
                type: "【發展活動】 (30分鐘)",
                description: "1. 發下圖畫紙或海報紙，讓學生以小組或個人為單位，製作「我的永續消費宣言」。 2. 內容可包含：我的消費反省、我的省錢妙招、我的綠色行動承諾等，形式不拘（文字、圖畫、心智圖皆可）。",
                assessment: "能運用所學，完成一份具體的永續消費宣言海報。"
            },
            {
                type: "【總結活動】 (10分鐘)",
                description: "邀請自願的學生上台分享自己的宣言，並將所有作品張貼於教室公佈欄，共同營造班級的永續消費文化。",
                assessment: "能上台分享或欣賞他人作品。"
            }
        ]
    }
];

export const TeachingPlan: React.FC = () => {
    return (
      <div className="overflow-x-auto">
        <div className="border border-slate-600 rounded-lg p-1 bg-slate-900/50">
          <table className="w-full text-sm md:text-base">
            <tbody>
              {planData.map((item, index) => (
                <tr key={index} className="border-b border-slate-700 last:border-b-0">
                  <td className="w-1/4 bg-slate-800 p-3 font-semibold text-cyan-400 align-top">{item.name}</td>
                  <td colSpan={item.span || 1} className="p-3 text-slate-300 align-top">{item.content}</td>
                  {item.span === undefined && index % 2 === 0 && (
                     <>
                        <td className="w-1/4 bg-slate-800 p-3 font-semibold text-cyan-400 align-top">{planData[index+1].name}</td>
                        <td className="p-3 text-slate-300 align-top">{planData[index+1].content}</td>
                     </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-bold text-cyan-400 mt-8 mb-4">教學活動設計</h3>
        
        <div className="space-y-6">
            {activityPlan.map((section, idx) => (
                <div key={idx} className="border border-slate-600 rounded-lg overflow-hidden bg-slate-900/50">
                    <h4 className="bg-slate-800 text-cyan-300 font-bold p-3 text-lg">{section.period}</h4>
                    <table className="w-full text-sm md:text-base">
                        <thead className="bg-slate-700/50">
                            <tr>
                                <th className="w-3/5 text-left p-3 font-semibold">教學活動內容及實施方式</th>
                                <th className="w-1/5 text-center p-3 font-semibold">時間</th>
                                <th className="w-1/5 text-left p-3 font-semibold">學習評量</th>
                            </tr>
                        </thead>
                        <tbody>
                            {section.activities.map((activity, actIdx) => (
                                <tr key={actIdx} className="border-t border-slate-700">
                                    <td className="p-3 align-top">
                                        <p className="font-semibold text-cyan-400">{activity.type}</p>
                                        <p className="mt-1 text-slate-300 whitespace-pre-line">{activity.description}</p>
                                    </td>
                                    <td className="p-3 text-center align-top text-slate-400">{activity.type.match(/\((\d+分鐘)\)/)?.[1]}</td>
                                    <td className="p-3 align-top text-slate-300">{activity.assessment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
      </div>
    );
};
