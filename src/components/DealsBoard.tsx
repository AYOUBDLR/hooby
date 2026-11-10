import React, { useState } from 'react';
import { Check, Clock, ExternalLink, Filter, Star, Sparkles, AlertCircle } from 'lucide-react';
import { Deal, RewardTier } from '../types/rewards';
import { DEALS_CATALOG } from '../data/dealsData';

interface DealsBoardProps {
  completedDealIds: string[];
  onToggleDeal: (dealId: string) => void;
  selectedTier: RewardTier;
}

export const DealsBoard: React.FC<DealsBoardProps> = ({
  completedDealIds,
  onToggleDeal,
  selectedTier,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDealModal, setActiveDealModal] = useState<Deal | null>(null);

  const categories = [
    { id: 'all', label: 'All Verified Deals' },
    { id: 'free', label: '100% Free (No Card)' },
    { id: 'games', label: 'Mobile Games' },
    { id: 'streaming', label: 'Streaming & Media' },
    { id: 'shopping', label: 'Shopping & Food' },
  ];

  const filteredDeals =
    selectedCategory === 'all'
      ? DEALS_CATALOG
      : DEALS_CATALOG.filter((deal) => deal.category === selectedCategory);

  const remainingNeeded = Math.max(
    0,
    selectedTier.dealsRequired - completedDealIds.length
  );

  return (
    <section id="deals-catalog" className="py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
              <span>Step 2 of Quick Start</span>
              <span>·</span>
              <span>Sponsored Partner Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Select Your Partner Deals
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              Complete {selectedTier.dealsRequired} deals below to unlock your{' '}
              <strong className="text-stone-900">${selectedTier.amount} Hobby Lobby Giftcard</strong>.
              Pick any mix of free games, trials, or grocery rewards.
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="bg-white px-4 py-3 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#D43815]/10 text-[#D43815] flex items-center justify-center font-black font-mono text-lg">
              {completedDealIds.length}
            </div>
            <div>
              <div className="text-xs font-semibold text-stone-900">
                {completedDealIds.length >= selectedTier.dealsRequired
                  ? 'All Deals Unlocked!'
                  : `${remainingNeeded} more needed for $${selectedTier.amount}`}
              </div>
              <div className="text-[11px] text-stone-500">
                Target: {selectedTier.dealsRequired} verified deals
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDeals.map((deal) => {
            const isCompleted = completedDealIds.includes(deal.id);

            return (
              <div
                key={deal.id}
                className={`bg-white rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                  isCompleted
                    ? 'border-emerald-300 ring-2 ring-emerald-500/10 shadow-sm'
                    : 'border-stone-200 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top line: Partner Icon, Brand, Category, Rating */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-2xl shadow-inner shrink-0">
                        {deal.partnerLogo}
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-stone-500">
                          {deal.brand}
                        </div>
                        <h3 className="text-base font-bold text-stone-900 leading-snug">
                          {deal.title}
                        </h3>
                      </div>
                    </div>

                    {isCompleted && (
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">
                    {deal.description}
                  </p>

                  {/* Requirements Box */}
                  <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200/80 text-[11px] text-stone-700 mb-4">
                    <span className="font-semibold text-stone-900">Task: </span>
                    {deal.instruction}
                  </div>
                </div>

                <div>
                  {/* Meta strip: Cost, Time, Credits */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-4 pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-1 font-medium text-stone-700">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{deal.timeEstimate}</span>
                    </div>
                    <div className="font-semibold text-[#D43815] bg-[#D43815]/10 px-2 py-0.5 rounded-md">
                      {deal.cost}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleDeal(deal.id)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isCompleted
                          ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                          : 'bg-[#D43815] text-white hover:bg-[#b82e0e] shadow-xs'
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Deal Completed (Click to Undo)</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Complete This Deal</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setActiveDealModal(deal)}
                      title="View deal details and instructions"
                      className="p-2.5 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail & Tracking Modal */}
      {activeDealModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-3xl">
                  {activeDealModal.partnerLogo}
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">
                    {activeDealModal.brand}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    {activeDealModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveDealModal(null)}
                className="text-stone-400 hover:text-stone-600 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                  How to complete this deal:
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  {activeDealModal.instruction}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="text-stone-500">Estimated Duration</div>
                  <div className="font-bold text-stone-900 mt-0.5">
                    {activeDealModal.timeEstimate}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <div className="text-stone-500">Cost Requirement</div>
                  <div className="font-bold text-[#D43815] mt-0.5">
                    {activeDealModal.cost}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-stone-500 bg-amber-50/80 p-3 rounded-xl border border-amber-200/60">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Please ensure you use the same email address when registering with the partner offer so automated tracking can credit your Hobby Lobby reward.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
              <button
                onClick={() => {
                  onToggleDeal(activeDealModal.id);
                  setActiveDealModal(null);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#D43815] hover:bg-[#b82e0e] transition-colors cursor-pointer"
              >
                {completedDealIds.includes(activeDealModal.id)
                  ? 'Mark Deal as Incomplete'
                  : 'Mark Deal as Completed & Credit Reward'}
              </button>
              <button
                onClick={() => setActiveDealModal(null)}
                className="py-3 px-4 rounded-xl text-sm font-semibold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
