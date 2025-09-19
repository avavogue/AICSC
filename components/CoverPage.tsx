
import React from 'react';

export const CoverPage: React.FC = () => {
    return (
        <div className="bg-slate-800 rounded-xl shadow-lg p-8 border-2 border-cyan-400/50 text-center">
            <h2 className="text-xl font-semibold text-slate-300 mb-4">114 學年度國立臺中教育大學</h2>
            <h1 className="text-3xl font-bold text-cyan-400 mb-8">教育議題融入教學活動方案設計徵選</h1>

            <div className="text-left space-y-6 max-w-2xl mx-auto">
                <div className="flex flex-wrap items-center">
                    <span className="w-full md:w-1/4 font-semibold text-slate-300 text-lg">作品名稱：</span>
                    <span className="flex-1 text-cyan-300 text-lg border-b-2 border-slate-600 pb-1 mt-1 md:mt-0">小小理財家，永續大未來</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                        <h3 className="font-bold text-cyan-400 text-lg mb-2">A 類：</h3>
                        <p className="text-slate-400">(未選擇)</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg border border-cyan-500">
                        <h3 className="font-bold text-cyan-400 text-lg mb-2">B 類：<span className="text-sm font-normal text-slate-300">(V)</span></h3>
                        <p className="font-semibold text-slate-200">融入的教育議題：</p>
                        <p className="text-slate-300">1. 永續發展目標 (SDGs)</p>
                        <p className="text-slate-300">2. 金融與理財教育</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center pt-4">
                    <span className="w-full md:w-1/4 font-semibold text-slate-300 text-lg">作者：</span>
                    <span className="flex-1 text-slate-300 text-lg mt-1 md:mt-0">(學號、學系/所、姓名)</span>
                </div>
                <div className="flex flex-wrap items-center">
                    <span className="w-full md:w-1/4 font-semibold text-slate-300 text-lg">指導教授：</span>
                    <span className="flex-1 text-slate-300 text-lg mt-1 md:mt-0">(姓名)</span>
                </div>
            </div>
        </div>
    );
};
