
import React from 'react';

const FrameworkNode: React.FC<{ title: string; subtitle: string; icon: string; }> = ({ title, subtitle, icon }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-cyan-500 text-slate-900 rounded-full w-20 h-20 flex items-center justify-center mb-2 shadow-lg">
      <i className={`fas ${icon} text-3xl`}></i>
    </div>
    <h3 className="font-bold text-cyan-300">{title}</h3>
    <p className="text-sm text-slate-400">{subtitle}</p>
  </div>
);

const Arrow: React.FC = () => (
    <div className="flex-1 flex items-center justify-center">
        <i className="fas fa-arrow-right text-slate-500 text-2xl mx-4 hidden md:block"></i>
        <i className="fas fa-arrow-down text-slate-500 text-2xl my-4 md:hidden"></i>
    </div>
);

export const CurriculumFramework: React.FC = () => {
    return (
        <div className="bg-slate-900/50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
                <FrameworkNode title="第一節" subtitle="慾望陷阱與地球吶喊" icon="fa-cart-shopping" />
                <Arrow />
                <FrameworkNode title="第二節" subtitle="我的金錢儀表板" icon="fa-chart-pie" />
                <Arrow />
                <FrameworkNode title="第三節" subtitle="聰明消費綠色選擇" icon="fa-seedling" />
                <Arrow />
                <FrameworkNode title="第四節" subtitle="我的永續消費宣言" icon="fa-bullhorn" />
            </div>
        </div>
    );
}
