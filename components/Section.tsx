
import React from 'react';

interface SectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <section className="bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border border-slate-700">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 border-b-2 border-cyan-400/30 pb-3 flex items-center">
        <i className={`fas ${icon} mr-4 text-cyan-300`}></i>
        {title}
      </h2>
      <div className="text-slate-300 text-base md:text-lg">
        {children}
      </div>
    </section>
  );
};
