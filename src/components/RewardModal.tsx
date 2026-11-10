import React, { useState } from 'react';
import { Check, Copy, Printer, Sparkles, X, Gift, ShieldCheck } from 'lucide-react';
import { RewardTier } from '../types/rewards';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: RewardTier;
  email: string;
}

export const RewardModal: React.FC<RewardModalProps> = ({
  isOpen,
  onClose,
  tier,
  email,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const code = 'HL-500-9824-3190';
  const pin = '7419';

  const handleCopy = () => {
    navigator.clipboard.writeText(`Card Number: ${code}\nPIN: ${pin}\nValue: $${tier.amount}.00`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebratory Icon & Header */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#D43815]/10 text-[#D43815] mx-auto flex items-center justify-center mb-3">
            <Gift className="w-9 h-9 stroke-[2.2]" />
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-[#D43815] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-full">
            Deals Verified & Unlocked
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mt-2">
            Your ${tier.amount} Hobby Lobby Card!
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
            A confirmation voucher with your barcode has also been sent to{' '}
            <strong className="text-stone-900 font-semibold">{email || 'your email'}</strong>.
          </p>
        </div>

        {/* Digital Gift Card Voucher Display */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white shadow-lg border border-stone-700">
          <div className="flex items-center justify-between pb-3 border-b border-stone-700">
            <span className="text-lg font-black tracking-tight text-[#E34926]">
              HOBBY LOBBY®
            </span>
            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-600/40">
              ${tier.amount}.00 USD
            </span>
          </div>

          <div className="my-4 text-center">
            <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400 mb-1">
              Card Number (Online & Register)
            </div>
            <div className="font-mono text-xl sm:text-2xl font-black tracking-widest text-amber-200 select-all">
              {code}
            </div>

            <div className="mt-3 flex items-center justify-center gap-6 text-xs font-mono">
              <div>
                <span className="text-stone-400">PIN: </span>
                <span className="font-bold text-white text-sm">{pin}</span>
              </div>
              <div>
                <span className="text-stone-400">Exp: </span>
                <span className="font-bold text-emerald-400 text-sm">NEVER</span>
              </div>
            </div>
          </div>

          {/* Realistic Barcode for in-store cashier scan */}
          <div className="mt-4 pt-3 border-t border-stone-700/80 flex flex-col items-center">
            <div className="h-10 w-full max-w-[280px] bg-white rounded-md p-1.5 flex items-center justify-between">
              {Array.from({ length: 42 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`bg-black h-full ${
                    idx % 4 === 0
                      ? 'w-1.5'
                      : idx % 3 === 0
                      ? 'w-0.5'
                      : idx % 2 === 0
                      ? 'w-1'
                      : 'w-0.5'
                  }`}
                />
              ))}
            </div>
            <div className="text-[9px] font-mono text-stone-400 mt-1">
              Scan barcode at any Hobby Lobby register
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleCopy}
            className="py-3 px-4 rounded-xl text-xs font-bold text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Code & PIN'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#D43815] hover:bg-[#b82e0e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Voucher</span>
          </button>
        </div>

        {/* How to use */}
        <div className="mt-5 p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1.5">
          <div className="font-bold text-stone-900">How to spend your $500:</div>
          <div>• <strong>In Stores:</strong> Present the digital barcode on your mobile phone to the cashier at checkout.</div>
          <div>• <strong>Online:</strong> Enter the 16-digit card number and 4-digit PIN in the Gift Card payment field on hobbylobby.com.</div>
          <div>• <strong>Sales:</strong> Stackable with weekly 40% department sales & clearance discounts.</div>
        </div>
      </div>
    </div>
  );
};
