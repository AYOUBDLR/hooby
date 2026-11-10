import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faqData';

export const FAQSection: React.FC = () => {
  // Open the first two items by default (matching the user's screenshot)
  const [openIds, setOpenIds] = useState<string[]>(['faq-duration', 'faq-deals-included']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-14 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D43815] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60 mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Common Questions
          </h2>
          <p className="text-sm text-stone-600 mt-2 max-w-xl mx-auto">
            Everything you need to know about completing partner deals and claiming your $500 Hobby Lobby digital gift card.
          </p>
        </div>

        {/* The Questions Accordion Card */}
        <div className="bg-stone-50/70 rounded-3xl p-4 sm:p-7 border border-stone-200/90 shadow-sm divide-y divide-stone-200/80">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div key={item.id} className="py-4 first:pt-1 last:pb-1">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left flex items-center justify-between gap-4 py-1 text-base sm:text-lg font-bold text-stone-900 hover:text-[#D43815] transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#D43815] text-white rotate-180'
                        : 'bg-white border border-stone-300 text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-stone-600 leading-relaxed pr-6 sm:pr-10 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                    {item.highlight && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-stone-800 bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpful Contact Callout */}
        <div className="mt-8 text-center text-xs text-stone-500">
          Still have questions regarding partner deal crediting?{' '}
          <a
            href="#support"
            className="text-[#D43815] font-semibold hover:underline"
          >
            Contact Rewards Verification Support →
          </a>
        </div>
      </div>
    </section>
  );
};
