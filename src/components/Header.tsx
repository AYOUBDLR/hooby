import React from 'react';

interface HeaderProps {
  onClaimClick: () => void;
  completedDealsCount: number;
  totalRequired: number;
}

export const Header: React.FC<HeaderProps> = ({
  onClaimClick,
  completedDealsCount,
  totalRequired,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-black tracking-tight text-[#D43815] whitespace-nowrap shrink-0 hover:opacity-95 transition-opacity"
        >
          HOBBY LOBBY
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a
            href="#how-it-works"
            className="hover:text-[#D43815] transition-colors whitespace-nowrap shrink-0"
          >
            How It Works
          </a>
          <a
            href="#deals-catalog"
            className="hover:text-[#D43815] transition-colors whitespace-nowrap shrink-0"
          >
            Partner Deals
          </a>
          <a
            href="#card-preview"
            className="hover:text-[#D43815] transition-colors whitespace-nowrap shrink-0"
          >
            Card Preview
          </a>
          <a
            href="#faq"
            className="hover:text-[#D43815] transition-colors whitespace-nowrap shrink-0"
          >
            Common Questions
          </a>
          <a
            href="#guarantee"
            className="hover:text-[#D43815] transition-colors whitespace-nowrap shrink-0"
          >
            Security & Guarantee
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onClaimClick}
            className="px-5 py-2.5 text-sm font-bold text-white bg-[#D43815] hover:bg-[#b82e0e] active:scale-[0.98] rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Claim $500 Reward</span>
            {completedDealsCount > 0 && (
              <span className="text-xs bg-black/20 px-2 py-0.5 rounded-full font-mono font-semibold">
                {completedDealsCount}/{totalRequired}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
