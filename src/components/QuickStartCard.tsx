import React, { useState } from 'react';
import { CheckCircle2, Mail, ShieldAlert, ArrowRight, Sparkles, Check } from 'lucide-react';
import { RewardTier } from '../types/rewards';
import { REWARD_TIERS } from '../data/dealsData';

interface QuickStartCardProps {
  email: string;
  setEmail: (val: string) => void;
  isAgeVerified: boolean;
  setIsAgeVerified: (val: boolean) => void;
  selectedTier: RewardTier;
  setSelectedTier: (tier: RewardTier) => void;
  completedDealsCount: number;
  onJumpToDeals: () => void;
  onInstantUnlockDemo: () => void;
  isUnlocked: boolean;
}

export const QuickStartCard: React.FC<QuickStartCardProps> = ({
  email,
  setEmail,
  isAgeVerified,
  setIsAgeVerified,
  selectedTier,
  setSelectedTier,
  completedDealsCount,
  onJumpToDeals,
  onInstantUnlockDemo,
  isUnlocked,
}) => {
  const [localEmail, setLocalEmail] = useState(email);
  const [isEmailSaved, setIsEmailSaved] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!localEmail.trim()) {
      setEmailError('Please enter your email to receive your gift card code.');
      return;
    }
    if (!emailRegex.test(localEmail.trim())) {
      setEmailError('Please enter a valid email format (e.g., name@gmail.com).');
      return;
    }
    setEmailError('');
    setEmail(localEmail.trim());
    setIsEmailSaved(true);
  };

  const progressPercentage = Math.min(
    100,
    Math.round((completedDealsCount / selectedTier.dealsRequired) * 100)
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-xl shadow-stone-200/50">
      {/* Title & Kicker */}
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-stone-100">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
            <span>Quick Start Guide</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Follow the 3 mandatory qualification steps to claim your reward
          </p>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
            Target Goal
          </span>
          <span className="text-lg font-black text-[#D43815] font-mono">
            ${selectedTier.amount} Giftcard
          </span>
        </div>
      </div>

      {/* Reward Tier Selector Strip */}
      <div className="mt-5">
        <label className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-2">
          Select Your Reward Tier:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {REWARD_TIERS.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#D43815] bg-[#D43815]/5 ring-2 ring-[#D43815]/20'
                    : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${isSelected ? 'text-[#D43815]' : 'text-stone-800'}`}>
                    ${tier.amount}
                  </span>
                  {tier.popular && (
                    <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-sm">
                      HOT
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  {tier.dealsRequired} Deals req.
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* The 3 Core Steps from User Screenshot */}
      <div className="mt-6 space-y-5">
        {/* Step 1: Enter a valid email */}
        <div
          className={`p-4 rounded-2xl border transition-all ${
            isEmailSaved
              ? 'bg-emerald-50/60 border-emerald-200'
              : 'bg-stone-50/80 border-stone-200'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                isEmailSaved
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-stone-200 text-stone-700'
              }`}
            >
              {isEmailSaved ? (
                <Check className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <span className="text-xs font-bold font-mono">1</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-stone-900">
                  Enter a valid email
                </h3>
                {isEmailSaved && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                For instant confirmation, barcode delivery, and reward claim status
              </p>

              {/* Email Form */}
              <form onSubmit={handleEmailSubmit} className="mt-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={localEmail}
                      onChange={(e) => {
                        setLocalEmail(e.target.value);
                        if (isEmailSaved) setIsEmailSaved(false);
                      }}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D43815] focus:border-transparent text-stone-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer shrink-0"
                  >
                    {isEmailSaved ? 'Update Email' : 'Confirm Email'}
                  </button>
                </div>
                {emailError && (
                  <p className="text-xs text-red-600 mt-1.5 font-medium">{emailError}</p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Step 2: Complete 4-5 deals */}
        <div
          className={`p-4 rounded-2xl border transition-all ${
            completedDealsCount >= selectedTier.dealsRequired
              ? 'bg-emerald-50/60 border-emerald-200'
              : 'bg-stone-50/80 border-stone-200'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                completedDealsCount >= selectedTier.dealsRequired
                  ? 'bg-emerald-500 text-white'
                  : 'bg-stone-200 text-stone-700'
              }`}
            >
              {completedDealsCount >= selectedTier.dealsRequired ? (
                <Check className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <span className="text-xs font-bold font-mono">2</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-stone-900">
                  Complete {selectedTier.dealsRequired} partner deals
                </h3>
                <span className="text-xs font-bold text-stone-700 font-mono">
                  {completedDealsCount}/{selectedTier.dealsRequired} completed
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                More deals, more rewards · Choose games, free apps, or streaming trials
              </p>

              {/* Progress Bar */}
              <div className="mt-3">
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D43815] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    {completedDealsCount >= selectedTier.dealsRequired
                      ? 'Goal achieved! Ready for reward unlock.'
                      : `${selectedTier.dealsRequired - completedDealsCount} more needed`}
                  </span>
                  <button
                    onClick={onJumpToDeals}
                    className="text-xs font-bold text-[#D43815] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Browse Deals</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Must be 18 years or older */}
        <div
          className={`p-4 rounded-2xl border transition-all ${
            isAgeVerified
              ? 'bg-emerald-50/60 border-emerald-200'
              : 'bg-stone-50/80 border-stone-200'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                isAgeVerified
                  ? 'bg-emerald-500 text-white'
                  : 'bg-stone-200 text-stone-700'
              }`}
            >
              {isAgeVerified ? (
                <Check className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <span className="text-xs font-bold font-mono">3</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-stone-900">
                  Must be 18 years or older
                </h3>
                {isAgeVerified && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                    Eligible (18+)
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Required to participate under US promotional contest & gift card terms
              </p>

              {/* Age Verification Checkbox */}
              <label className="mt-3 flex items-center gap-2.5 text-xs text-stone-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isAgeVerified}
                  onChange={(e) => setIsAgeVerified(e.target.checked)}
                  className="w-4 h-4 rounded text-[#D43815] focus:ring-[#D43815] border-stone-300"
                />
                <span className="font-medium">
                  I certify that I am at least 18 years of age and a US resident.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer with Fast-Track Demo Button */}
      <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-stone-500">
          <ShieldAlert className="w-4 h-4 text-stone-400" />
          <span>SSL 256-bit Encrypted · Verified Partner</span>
        </div>

        <button
          onClick={onInstantUnlockDemo}
          className="text-xs font-semibold text-[#D43815] hover:text-[#b82e0e] bg-amber-50 hover:bg-amber-100/80 px-3 py-1.5 rounded-lg border border-amber-200/60 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isUnlocked ? 'Reset Progress' : 'Quick Demo: Auto-Fill & Unlock $500'}</span>
        </button>
      </div>
    </div>
  );
};
