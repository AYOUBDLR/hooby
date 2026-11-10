import React, { useState } from 'react';
import { Copy, Check, Sparkles, Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import { RewardTier } from '../types/rewards';

interface GiftCard3DProps {
  tier: RewardTier;
  cardholderName: string;
  email: string;
  isUnlocked: boolean;
  dealsCompleted: number;
  onRedeemModalOpen: () => void;
}

export const GiftCard3D: React.FC<GiftCard3DProps> = ({
  tier,
  cardholderName,
  email,
  isUnlocked,
  dealsCompleted,
  onRedeemModalOpen,
}) => {
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const cardNumber = isUnlocked
    ? 'HL-500-9824-3190'
    : `HL-${tier.amount}-••••-8492`;
  const pinNumber = isUnlocked ? '7419' : '••••';

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isUnlocked) return;
    navigator.clipboard.writeText(`Code: ${cardNumber} | PIN: ${pinNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayName =
    cardholderName.trim() ||
    (email ? email.split('@')[0].toUpperCase() : 'VALUED REWARDS MEMBER');

  return (
    <div className="w-full max-w-md mx-auto group perspective-1000">
      {/* The 3D Gift Card Container */}
      <div
        className={`relative w-full aspect-[1.586/1] rounded-2xl p-6 sm:p-7 text-white shadow-2xl transition-all duration-500 transform group-hover:-translate-y-1 group-hover:shadow-3xl overflow-hidden select-none border border-amber-200/30 ${
          isUnlocked
            ? 'bg-gradient-to-br from-[#E34926] via-[#D43815] to-[#8E1C03]'
            : 'bg-gradient-to-br from-[#E34926] via-[#B83010] to-[#6E1502]'
        }`}
      >
        {/* Subtle patterned craft grain background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Dynamic Holographic Sheen Sweep */}
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-25 pointer-events-none animate-card-sheen" />

        {/* Top Header of Card */}
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm flex items-center gap-1.5">
              <span>HOBBY LOBBY</span>
              <span className="text-[10px] font-bold border border-white/60 rounded-xs px-0.5 leading-none align-super">
                ®
              </span>
            </div>
            <div className="text-[11px] font-medium tracking-wider text-amber-100/90 uppercase mt-0.5">
              Official e-Giftcard & Rewards Pass
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs uppercase font-semibold text-amber-200 tracking-wider">
              Stored Value
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight drop-shadow">
              ${tier.amount}
              <span className="text-xs font-normal text-amber-200/80">.00</span>
            </div>
          </div>
        </div>

        {/* Middle Card Details: Chip, Lock Status & Balance */}
        <div className="relative z-10 my-4 sm:my-5 flex items-center justify-between">
          {/* Smart EMV Gold Chip Mockup */}
          <div className="w-11 h-8 rounded-md bg-gradient-to-tr from-amber-200 via-amber-300 to-amber-100 border border-amber-400/80 shadow-inner flex flex-col justify-around p-1 opacity-90">
            <div className="h-0.5 bg-amber-600/40 w-full rounded" />
            <div className="h-0.5 bg-amber-600/40 w-3/4 rounded" />
            <div className="h-0.5 bg-amber-600/40 w-full rounded" />
          </div>

          {/* Verification Badge */}
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 backdrop-blur-md transition-colors ${
              isUnlocked
                ? 'bg-emerald-500/90 text-white font-semibold shadow-sm'
                : 'bg-black/30 text-amber-100 border border-white/15'
            }`}
          >
            {isUnlocked ? (
              <>
                <Unlock className="w-3.5 h-3.5 text-white" />
                <span>Ready to Spend!</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-200" />
                <span>
                  {dealsCompleted}/{tier.dealsRequired} Deals Done
                </span>
              </>
            )}
          </div>
        </div>

        {/* Card Number & Expiration */}
        <div className="relative z-10 font-mono tracking-widest text-lg sm:text-xl font-bold text-white/95 drop-shadow-sm flex items-center justify-between">
          <span>{showCode && isUnlocked ? cardNumber : cardNumber}</span>
          {isUnlocked && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-xs font-sans text-amber-200 hover:text-white flex items-center gap-1 font-normal cursor-pointer"
            >
              {showCode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>

        {/* Bottom Card Footer: Cardholder & In-Store / Online Barcode */}
        <div className="relative z-10 mt-3 pt-3 border-t border-white/20 flex items-end justify-between text-xs">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-amber-100/70">
              Authorized Recipient
            </div>
            <div className="font-semibold uppercase tracking-wide truncate max-w-[170px] sm:max-w-[210px] text-white">
              {displayName}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-amber-100/70">
              Valid Stores & Web
            </div>
            <div className="font-semibold text-amber-200">
              Never Expires
            </div>
          </div>
        </div>

        {/* Barcode Strip Graphic */}
        <div className="absolute bottom-2 left-6 right-6 h-1 flex items-center justify-between opacity-30 pointer-events-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <span
              key={i}
              className={`bg-white h-full ${
                i % 3 === 0 ? 'w-1' : i % 2 === 0 ? 'w-0.5' : 'w-1.5'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Strip Below Card */}
      <div className="mt-4 flex items-center justify-between gap-3 text-xs text-stone-600 bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
        <div className="flex items-center gap-2">
          {isUnlocked ? (
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
          ) : (
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
          )}
          <span className="font-medium text-stone-800">
            {isUnlocked
              ? 'Card Unlocked & Digital PIN active'
              : `Requires ${tier.dealsRequired - dealsCompleted > 0 ? tier.dealsRequired - dealsCompleted : 0} more verified partner deals`}
          </span>
        </div>

        {isUnlocked ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 font-semibold text-stone-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Code'}</span>
            </button>
            <button
              onClick={onRedeemModalOpen}
              className="px-2.5 py-1.5 rounded-lg bg-[#D43815] hover:bg-[#b82e0e] text-white font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Redeem</span>
            </button>
          </div>
        ) : (
          <a
            href="#deals-catalog"
            className="text-[#D43815] font-semibold hover:underline"
          >
            Complete deals below →
          </a>
        )}
      </div>
    </div>
  );
};
