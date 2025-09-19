
import React from 'react';

export const LearningSheet: React.FC = () => {
    return (
        <div className="p-6 bg-slate-900/50 border-2 border-dashed border-slate-600 rounded-lg">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-cyan-300">學習單一：我的永續消費週記</h3>
                <p className="text-slate-400">班級：_______ 座號：_______ 姓名：__________</p>
            </div>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Part 1：我的週預算</h4>
                    <p className="text-slate-300 mb-2">這個禮拜，我預計會花多少錢呢？把它們分配到下面的項目吧！</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <BudgetItem label="🍔 飲食" />
                        <BudgetItem label="👕 治裝" />
                        <BudgetItem label="🚌 交通" />
                        <BudgetItem label="🎉 娛樂" />
                        <BudgetItem label="📚 學習" />
                        <BudgetItem label="🎁 其他" />
                        <div className="col-span-2 bg-slate-800 p-3 rounded-md flex items-center justify-between">
                            <span className="font-bold text-cyan-300">💰 預算總計：</span>
                            <span className="font-mono text-xl text-amber-300">NT$ _______</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Part 2：我的消費流水帳</h4>
                    <p className="text-slate-300 mb-2">每天都要記得記帳喔！看看錢都跑到哪裡去了～</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-slate-700">
                            <thead className="bg-slate-800">
                                <tr>
                                    <th className="p-2">日期</th>
                                    <th className="p-2">項目</th>
                                    <th className="p-2">金額</th>
                                    <th className="p-2">分類</th>
                                    <th className="p-2">這是「需要」還是「想要」？</th>
                                </tr>
                            </thead>
                            <tbody className="bg-slate-700/50">
                                <ExpenseRow />
                                <ExpenseRow />
                                <ExpenseRow />
                                <ExpenseRow />
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Part 3：一週回顧與反思</h4>
                    <div className="space-y-3">
                        <p className="text-slate-300">1. 這週我總共花了 ______ 元，跟我的預算比，是 <span className="font-bold text-green-400">(□省下來了 / □剛剛好 / □不小心超支了)</span>。</p>
                        <p className="text-slate-300">2. 我花最多錢的項目是 ________，我覺得原因是：__________________________。</p>
                        <p className="text-slate-300">3. 這週我買的一件「最想要」的東西是 ________，如果時光倒流，我還會買它嗎？(□會 / □不會)，因為______________________。</p>
                        <p className="text-slate-300">4. 下個禮拜，我可以做出什麼改變，讓我的消費更聰明、更永續？__________________________。</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BudgetItem: React.FC<{ label: string }> = ({ label }) => (
    <div className="bg-slate-700 p-3 rounded-md">
        <label className="block text-slate-300 mb-1">{label}</label>
        <div className="flex items-center">
            <span className="text-slate-400 mr-2">NT$</span>
            <input type="text" className="w-full bg-slate-800 rounded p-1 text-right text-amber-300" />
        </div>
    </div>
);

const ExpenseRow: React.FC = () => (
    <tr>
        <td className="border-t border-slate-700 p-2"></td>
        <td className="border-t border-slate-700 p-2"></td>
        <td className="border-t border-slate-700 p-2"></td>
        <td className="border-t border-slate-700 p-2"></td>
        <td className="border-t border-slate-700 p-2"></td>
    </tr>
);
