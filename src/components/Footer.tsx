import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Trust Marker Strip from user screenshot: SSL Secured • Encrypted • Verified • 100% Safe */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pb-8 border-b border-stone-800 text-stone-300 text-xs sm:text-sm font-medium tracking-wide">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>SSL Secured</span>
          </div>
          <span className="text-stone-600 hidden sm:inline" aria-hidden="true">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted</span>
          </div>
          <span className="text-stone-600 hidden sm:inline" aria-hidden="true">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Partner Network</span>
          </div>
          <span className="text-stone-600 hidden sm:inline" aria-hidden="true">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Safe</span>
          </div>
        </div>

        {/* Brand & Disclosure Notice */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-xl font-black text-white tracking-tight">
              HOBBY LOBBY REWARDS
            </div>
            <p className="mt-2 text-stone-400 text-xs leading-relaxed max-w-lg">
              This independent rewards portal connects shoppers with sponsored partner deals, surveys, and app evaluations. Trademarks, service marks, logos, and brand names of Hobby Lobby and other partners belong to their respective registered owners and do not imply direct endorsement. Rewards are fulfilled via legitimate digital e-gift cards upon meeting verified deal requirements.
            </p>
          </div>

          <div className="space-y-3 md:text-right">
            <div className="flex flex-wrap md:justify-end gap-x-5 gap-y-2 text-stone-300 font-medium">
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">FTC Disclosure</a>
              <a href="#" className="hover:text-white transition-colors">Do Not Sell My Info</a>
            </div>
            <p className="text-stone-500 text-[11px]">
              Must be 18 years or older and a legal resident of the United States to participate. No purchase necessary for free-tier qualification.
            </p>
          </div>
        </div>

        {/* Copyright notice matching user screenshot 2026 */}
        <div className="mt-8 pt-6 border-t border-stone-800/80 text-center text-stone-500 text-xs">
          © 2026 Hobby Lobby Partner Rewards Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
