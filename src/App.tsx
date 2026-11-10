import React, { useState } from 'react';
import { ChevronDown, Check, X, Sparkles, Copy, Printer } from 'lucide-react';

interface DealItem {
  id: string;
  name: string;
  brand: string;
  type: string;
  time: string;
  completed: boolean;
}

export default function App() {
  // Accordion state (matches Image 2)
  const [openQuestion1, setOpenQuestion1] = useState(false);
  const [openQuestion2, setOpenQuestion2] = useState(false);

  // Interactive user state
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailError, setEmailError] = useState('');

  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showAgePrompt, setShowAgePrompt] = useState(false);

  const [showDealsModal, setShowDealsModal] = useState(false);
  const [deals, setDeals] = useState<DealItem[]>([
    {
      id: 'deal-1',
      name: 'Monopoly GO! - Reach Board 15',
      brand: 'Scopely',
      type: '100% Free Game',
      time: '~15 mins/day',
      completed: false,
    },
    {
      id: 'deal-2',
      name: 'Disney+ Special Trial',
      brand: 'Disney',
      type: 'Streaming Offer',
      time: 'Instant Credit',
      completed: false,
    },
    {
      id: 'deal-3',
      name: 'Credit Karma Free Account',
      brand: 'Credit Karma',
      type: '100% Free Utility',
      time: '3 mins',
      completed: false,
    },
    {
      id: 'deal-4',
      name: 'Fetch Grocery Receipt Scanner',
      brand: 'Fetch',
      type: '100% Free App',
      time: '2 mins',
      completed: false,
    },
    {
      id: 'deal-5',
      name: 'SiriusXM $1 Trial Pass',
      brand: 'SiriusXM',
      type: 'Audio & Music',
      time: 'Instant Credit',
      completed: false,
    },
  ]);

  const [showRewardModal, setShowRewardModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const completedDealsCount = deals.filter((d) => d.completed).length;
  const isAllComplete = isEmailSubmitted && completedDealsCount >= 4 && isAgeVerified;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setIsEmailSubmitted(true);
    setShowEmailInput(false);
  };

  const toggleDeal = (id: string) => {
    setDeals((prev) =>
      prev.map((d) => (d.id === id ? { ...d, completed: !d.completed } : d))
    );
  };

  const CLAIM_URL = 'https://linkthem.net/?offer_id=5034&aff_id=144361';

  const handleClaimClick = () => {
    window.location.href = CLAIM_URL;
  };

  const handleQuickDemoUnlock = () => {
    setEmail('shopper.deals@gmail.com');
    setIsEmailSubmitted(true);
    setIsAgeVerified(true);
    setDeals((prev) => prev.map((d) => ({ ...d, completed: true })));
    setShowRewardModal(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center justify-start pt-10 pb-16 px-4 sm:px-6">
      {/* Main Container - width matches screenshot card proportion */}
      <div className="w-full max-w-[500px]">
        {/* Header Branding (Matches Image 1) */}
        <div className="text-center mb-6">
          {/* Logo: HOBBY LOBBY */}
          <div className="inline-block">
            <span className="text-[32px] sm:text-[38px] font-black text-[#E84323] tracking-normal leading-none font-sans uppercase">
              HOBBY LOBBY<span className="text-xs align-top ml-0.5 text-[#E84323]">®</span>
            </span>
          </div>

          {/* Title: Hobby Lobby $500 Giftcard */}
          <h1 className="text-[24px] sm:text-[27px] font-bold text-[#111827] mt-4 tracking-tight leading-snug">
            Hobby Lobby $500 Giftcard
          </h1>

          {/* Subtitle: Complete the steps below to claim now */}
          <p className="text-[15px] sm:text-[16px] text-[#6B7280] mt-1.5 leading-relaxed font-normal">
            Complete the steps below to claim now
          </p>
        </div>

        {/* Card 1: Quick Start Guide (Matches Image 1) */}
        <div className="bg-white rounded-[22px] border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-6 sm:p-7">
          {/* Card Title in exact Navy Blue */}
          <h2 className="text-[19px] sm:text-[20px] font-bold text-[#074582] mb-6">
            Quick Start Guide
          </h2>

          {/* 3 Step List */}
          <div className="space-y-6">
            {/* Step 1: Enter a valid email */}
            <div>
              <div
                onClick={() => setShowEmailInput(!showEmailInput)}
                className="flex items-start gap-4 cursor-pointer select-none group"
              >
                {/* Red/Orange Checkmark Circle */}
                <div className="w-7 h-7 rounded-full border-2 border-[#E84323] text-[#E84323] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.8]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#111827] leading-snug">
                    Enter a valid email
                  </h3>
                  <p className="text-[14px] text-[#6B7280] mt-0.5 leading-snug">
                    For confirmation and updates
                  </p>
                </div>
              </div>

              {/* Expandable email input if clicked */}
              {showEmailInput && (
                <form
                  onSubmit={handleEmailSubmit}
                  className="mt-3.5 pl-11 flex flex-col gap-2"
                >
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-3.5 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#074582] text-[#111827]"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-bold text-white bg-[#074582] hover:bg-[#06396b] rounded-lg transition-colors cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                  {emailError && (
                    <span className="text-xs text-red-500 font-medium">
                      {emailError}
                    </span>
                  )}
                </form>
              )}
            </div>

            {/* Step 2: Complete 4-5 deals */}
            <div>
              <div
                onClick={() => setShowDealsModal(true)}
                className="flex items-start gap-4 cursor-pointer select-none group"
              >
                {/* Red/Orange Checkmark Circle */}
                <div className="w-7 h-7 rounded-full border-2 border-[#E84323] text-[#E84323] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.8]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#111827] leading-snug">
                    Complete 4–5 deals
                  </h3>
                  <p className="text-[14px] text-[#6B7280] mt-0.5 leading-snug">
                    More deals, more rewards
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Must be 18 years or older */}
            <div>
              <div
                onClick={() => setIsAgeVerified(!isAgeVerified)}
                className="flex items-start gap-4 cursor-pointer select-none group"
              >
                {/* Red/Orange Checkmark Circle */}
                <div className="w-7 h-7 rounded-full border-2 border-[#E84323] text-[#E84323] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.8]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#111827] leading-snug">
                    Must be 18 years or older
                  </h3>
                  <p className="text-[14px] text-[#6B7280] mt-0.5 leading-snug">
                    Required to participate
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Claim Now Button */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <a
              href={CLAIM_URL}
              onClick={handleClaimClick}
              className="block w-full text-center py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#E84323] hover:bg-[#d6381a] transition-all shadow-sm cursor-pointer select-none"
            >
              Claim Now
            </a>
          </div>
        </div>

        {/* Card 2: Common Questions (Matches Image 2) */}
        <div className="bg-white rounded-[22px] border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-6 sm:p-7 mt-5">
          {/* Card Title in exact Navy Blue */}
          <h2 className="text-[19px] sm:text-[20px] font-bold text-[#074582] mb-5">
            Common Questions
          </h2>

          <div className="space-y-4">
            {/* Question 1: How long do the deals take? */}
            <div className="border-b border-gray-100 pb-4">
              <button
                type="button"
                onClick={() => setOpenQuestion1(!openQuestion1)}
                className="w-full flex items-center justify-between text-left py-1 group cursor-pointer"
              >
                <span className="text-[15px] sm:text-[16px] font-bold text-[#111827] group-hover:text-[#074582] transition-colors leading-snug">
                  How long do the deals take?
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#111827] shrink-0 transition-transform duration-200 ${
                    openQuestion1 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openQuestion1 && (
                <div className="mt-2.5 text-[14px] text-[#4B5563] leading-relaxed pr-2 animate-in fade-in duration-150">
                  Most deals take between 2–5 minutes to complete. Free mobile apps and surveys confirm almost immediately, while trial deals typically verify within 15 to 30 minutes. Once 4–5 required deals are completed, your $500 giftcard reward is instantly unlocked and sent to your email.
                </div>
              )}
            </div>

            {/* Question 2: What kind of deals are included? (Underlined as in Image 2) */}
            <div className="pb-1">
              <button
                type="button"
                onClick={() => setOpenQuestion2(!openQuestion2)}
                className="w-full flex items-center justify-between text-left py-1 group cursor-pointer"
              >
                <span className="text-[15px] sm:text-[16px] font-bold text-[#111827] underline underline-offset-4 decoration-1 group-hover:text-[#074582] transition-colors leading-snug">
                  What kind of deals are included?
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#111827] shrink-0 transition-transform duration-200 ${
                    openQuestion2 ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openQuestion2 && (
                <div className="mt-2.5 text-[14px] text-[#4B5563] leading-relaxed pr-2 animate-in fade-in duration-150">
                  Deals include free casual mobile games (like reaching a certain board level), popular streaming subscriptions, food and meal-kit trials, and free utility apps. You choose the deals that suit you best, and free options are always available.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer (Matches Image 2 exactly) */}
        <div className="mt-8 text-center select-none">
          <div className="text-[13px] sm:text-[14px] text-[#6B7280] font-normal tracking-normal">
            SSL Secured • Encrypted • Verified • 100% Safe
          </div>
          <div className="text-[13px] sm:text-[14px] text-[#6B7280] font-normal mt-1.5">
            © 2026
          </div>
        </div>
      </div>

      {/* Deals Selection Modal */}
      {showDealsModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowDealsModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-[#074582]">
              Choose Your 4–5 Deals
            </h3>
            <p className="text-xs text-[#6B7280] mt-1 mb-4">
              Complete at least 4 deals below to claim your $500 Hobby Lobby Giftcard:
            </p>

            <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
              {deals.map((deal) => (
                <div
                  key={deal.id}
                  onClick={() => toggleDeal(deal.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                    deal.completed
                      ? 'border-emerald-300 bg-emerald-50/60'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 font-medium">
                      {deal.brand} · {deal.type}
                    </div>
                    <div className="text-sm font-bold text-gray-900 truncate">
                      {deal.name}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Est. time: {deal.time}
                    </div>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                      deal.completed
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-gray-300 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700">
                Completed: {completedDealsCount}/4 required
              </span>
              <button
                onClick={() => {
                  setShowDealsModal(false);
                  if (completedDealsCount >= 4 && isEmailSubmitted && isAgeVerified) {
                    setShowRewardModal(true);
                  }
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-[#074582] hover:bg-[#06396b] rounded-lg transition-colors cursor-pointer"
              >
                Save Progress
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unlocked Gift Card Voucher Modal */}
      {showRewardModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 relative animate-in fade-in zoom-in-95 duration-150 text-center">
            <button
              onClick={() => setShowRewardModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-[#E84323] uppercase tracking-wider">
              Verification Successful
            </span>
            <h3 className="text-xl font-extrabold text-gray-900 mt-1">
              Hobby Lobby $500 Giftcard
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Redeemable at any Hobby Lobby store or online at hobbylobby.com
            </p>

            {/* Gift Card Box */}
            <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-[#E84323] to-[#B82B0E] text-white shadow-md text-left relative overflow-hidden">
              <div className="flex justify-between items-start">
                <span className="font-black text-xl tracking-tight">HOBBY LOBBY</span>
                <span className="font-bold text-lg font-mono">$500.00</span>
              </div>

              <div className="mt-4 font-mono text-center tracking-widest text-lg font-bold bg-black/20 py-2 rounded-lg border border-white/20">
                HL-500-9824-3190
              </div>

              <div className="mt-3 flex justify-between text-xs font-mono text-amber-100">
                <span>PIN: 7419</span>
                <span>EXP: NEVER</span>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText('HL-500-9824-3190 (PIN: 7419)');
                  setCopiedCode(true);
                  setTimeout(() => setCopiedCode(false), 2000);
                }}
                className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCode ? 'Copied!' : 'Copy Code & PIN'}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="py-2.5 px-4 rounded-lg text-xs font-bold text-white bg-[#074582] hover:bg-[#06396b] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
