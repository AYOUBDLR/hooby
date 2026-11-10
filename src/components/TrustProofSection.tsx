import React from 'react';
import { ShieldCheck, Lock, Sparkles, CheckCircle2, Award, Heart } from 'lucide-react';
import { RECENT_CLAIMS } from '../data/dealsData';

export const TrustProofSection: React.FC = () => {
  return (
    <section id="guarantee" className="py-14 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-stone-900 font-mono">100% Safe</div>
              <div className="text-xs text-stone-500">Verified Deal Network</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-stone-900 font-mono">256-Bit SSL</div>
              <div className="text-xs text-stone-500">Bank-Grade Encryption</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#D43815] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-stone-900 font-mono">$2.4M+</div>
              <div className="text-xs text-stone-500">Gift Cards Claimed</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-stone-900 font-mono">Instant</div>
              <div className="text-xs text-stone-500">Digital Barcode Code</div>
            </div>
          </div>
        </div>

        {/* What You Can Buy at Hobby Lobby with $500 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md border border-stone-200 relative aspect-[16/10]">
              <img
                src="/src/assets/images/craft_studio_hero_1794267072439.jpg"
                alt="Artisan craft studio supplies"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Unlimited Creative Freedom
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  Spend $500 On Anything in Store or Online
                </h3>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-xs font-bold text-[#D43815] uppercase tracking-wider">
                Crafts · Home Decor · Framing · Fabrics
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                No Restrictions. Stack with Weekly 40% Discounts.
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Your $500 digital gift card is valid across all Hobby Lobby departments: fine art canvases, acrylic paints, luxury holiday decor, farmhouse mirrors, premium quilting cottons, yarn skeins, and custom framing.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Framing Counter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Art Supplies & Easels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fabric & Sewing Notions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Seasonal Holiday Accents</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Recent Claims Activity */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Verified Claims Stream</span>
            </h3>
            <span className="text-xs text-stone-500">Updated in real time</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RECENT_CLAIMS.map((claim) => (
              <div
                key={claim.id}
                className="bg-white p-3.5 rounded-xl border border-stone-200 text-xs flex items-center justify-between shadow-2xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-[#D43815] font-bold flex items-center justify-center font-mono">
                    {claim.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">
                      {claim.name}{' '}
                      <span className="text-stone-400 font-normal">
                        ({claim.city})
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500">
                      Completed {claim.dealsCompleted} deals · {claim.timestamp}
                    </div>
                  </div>
                </div>

                <div className="font-black font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  +${claim.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
