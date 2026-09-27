import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  MessageSquare,
  Sparkles,
  HelpCircle,
  Share2,
  ShieldCheck,
  Check
} from 'lucide-react';

const AFFILIATE_URL = "https://internetwealthtraining.selar.com/page/2k?affiliate=qd6e";

// Image asset bundled by Vite
import BLUEPRINT_BUNDLE_IMG from './assets/images/blueprint_resource_bundle_1790218664582.jpg';

export default function App() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [emailHelpOpen, setEmailHelpOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll listener for sticky quick-action bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(AFFILIATE_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-red-600 selection:text-white">
      
      {/* Top Header Notification Bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 text-xs text-slate-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="font-bold text-slate-900 tracking-wide">Step 1 Completed:</span>
            <span className="text-slate-600 hidden sm:inline">The Trust Formula has been sent to your inbox & WhatsApp</span>
            <span className="text-slate-600 sm:hidden">Formula sent to inbox</span>
          </div>

          <button
            onClick={() => setEmailHelpOpen(!emailHelpOpen)}
            className="text-red-600 hover:text-red-700 transition-colors font-bold flex items-center gap-1 cursor-pointer shrink-0"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Didn&apos;t get it?</span>
          </button>
        </div>
      </div>

      {/* Expandable deliverability helper drawer */}
      {emailHelpOpen && (
        <div className="bg-red-50/60 border-b border-red-200 px-4 py-3.5 text-xs text-slate-700 animate-fadeIn">
          <div className="max-w-4xl mx-auto space-y-2">
            <div className="flex items-center justify-between text-slate-900 font-semibold">
              <span className="flex items-center gap-1.5 text-red-700 font-bold">
                <Mail className="w-4 h-4 text-red-600" /> Quick Delivery Check
              </span>
              <button
                onClick={() => setEmailHelpOpen(false)}
                className="text-slate-500 hover:text-slate-900 cursor-pointer text-xs font-semibold"
              >
                Close ×
              </button>
            </div>
            <p className="text-slate-600 leading-relaxed">
              1. <strong>Gmail users:</strong> Check your <em>Promotions</em> or <em>Spam</em> tab and drag our message to Primary so you don&apos;t miss updates.<br />
              2. <strong>WhatsApp users:</strong> If you requested access via WhatsApp, check your latest chats or search &ldquo;Trust Formula&rdquo;.<br />
              3. Meanwhile, watch the important orientation video below right now.
            </p>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 space-y-12 md:space-y-16">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-red-700 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Special Access Session</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.15] text-balance font-display">
            Hey, You’ve Just Gotten The Trust Formula…
          </h1>

          <div className="max-w-2xl mx-auto space-y-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            <p>
              If you haven&apos;t received it yet, check your email or WhatsApp.
            </p>
            <p className="text-slate-900 font-bold">
              That&apos;s where you&apos;ll find the Trust Formula I promised you.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              Take some time to go through it because understanding how to build trust can completely change the way you approach selling online.
            </p>
          </div>

          {/* Quick confirmation chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-red-600" />
              <span className="font-medium text-slate-800">Delivered via Email</span>
            </div>
            <span className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-red-600" />
              <span className="font-medium text-slate-800">Delivered via WhatsApp</span>
            </div>
            <span className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span className="text-red-700 font-bold">Watch Video Below Before Leaving</span>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="space-y-6" aria-label="Training Video">
          <div className="max-w-[420px] sm:max-w-[460px] mx-auto w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl shadow-slate-300/80 border-2 sm:border-4 border-slate-900/10">
              <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1230647700?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Trust Formula B"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* BUTTON UNDER VIDEO NOTE */}
          <div className="bg-white border-2 border-slate-200 hover:border-red-300 transition-colors rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            {/* Top red brand bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

            {/* Note text under video */}
            <div className="space-y-1.5 pt-1">
              <p className="text-xs uppercase tracking-widest font-extrabold text-red-600">
                Action Required
              </p>
              <p className="text-base sm:text-lg font-bold text-slate-900">
                Once you finish watching, click below to access the full blueprint presentation:
              </p>
            </div>

            {/* THE REDIRECT BUTTON */}
            <div>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-base sm:text-lg rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/45 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>SEE THE 0–$2K BLUEPRINT</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>
              <p className="text-xs text-slate-500 mt-2.5 font-medium">
                Click below to see the full details.
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-4 text-slate-400 uppercase tracking-widest font-mono font-semibold">
              Beyond The Trust Formula
            </span>
          </div>
        </div>

        {/* SECTION: YOU NOW UNDERSTAND THE IMPORTANCE OF TRUST... */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
              You Now Understand The Importance Of Trust…
            </h2>
            <p className="text-lg sm:text-xl font-bold text-red-600">
              But trust is only one part of the bigger picture.
            </p>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              You now understand why someone can see your offer, show interest, ask questions—and still not buy.
            </p>
            <p>
              You also understand why building trust before asking someone to make a buying decision is so important.
            </p>
            <p className="text-slate-950 font-bold pt-2 text-lg sm:text-xl">
              But once you have someone&apos;s attention and trust, what do you do next?
            </p>
          </div>

          {/* The 6 Core Strategic Questions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 hover:border-red-300 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-red-600 font-bold">01</span>
              <h3 className="text-base font-bold text-slate-900">How to attract the right people</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Filtering out time-wasters and consistently drawing ready-to-buy prospects with zero ad spend.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 hover:border-red-300 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-red-600 font-bold">02</span>
              <h3 className="text-base font-bold text-slate-900">How to create content</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Crafting daily posts and stories that educate, spark desire, and lead directly into conversations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 hover:border-red-300 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-red-600 font-bold">03</span>
              <h3 className="text-base font-bold text-slate-900">How to choose the right affiliate products</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Selecting high-converting digital products with strong commissions and genuine buyer demand.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 hover:border-red-300 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-red-600 font-bold">04</span>
              <h3 className="text-base font-bold text-slate-900">How to communicate with potential buyers</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Running natural, high-converting 1-on-1 chats on WhatsApp without sounding pushy or desperate.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-2 hover:border-red-300 hover:shadow-md transition-all">
              <span className="text-xs font-mono text-red-600 font-bold">05</span>
              <h3 className="text-base font-bold text-slate-900">How to sell</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                Structuring your closing sequences so prospects say &ldquo;Send me the link&rdquo; willingly.
              </p>
            </div>

            <div className="bg-red-50/50 border-2 border-red-500/60 rounded-xl p-5 space-y-2 hover:border-red-600 hover:shadow-md transition-all sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-mono text-red-700 font-extrabold">06</span>
              <h3 className="text-base font-bold text-slate-900">Bringing all pieces together</h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                Unifying every single moving part into a repeatable daily process you can actually follow and scale.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: THAT'S WHERE THE 0–$2K AFFILIATE MARKETING BLUEPRINT COMES IN */}
        <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 relative overflow-hidden shadow-sm">
          {/* Subtle red ambient decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              The Complete Solution
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display text-balance">
              That&apos;s Where The 0–$2K Affiliate Marketing Blueprint Comes In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p className="text-slate-950 font-bold">
                The Trust Formula gives you one important piece of the puzzle.
              </p>
              <p>
                The 0–$2K Affiliate Marketing Blueprint takes you further by bringing together strategies around free traffic, content marketing, audience building, WhatsApp marketing, affiliate product selection, selling psychology and trust.
              </p>

              {/* Blueprint capability tags */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-800">
                <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">Free Organic Traffic</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">Content Creation</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">WhatsApp Closing</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">Product Selection</span>
                <span className="px-3 py-1.5 bg-red-100 text-red-800 rounded-lg border border-red-200 shadow-2xs">Buyer Psychology</span>
              </div>
            </div>

            {/* Blueprint Visual Representation */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-black group">
                <img
                  src={BLUEPRINT_BUNDLE_IMG}
                  alt="0 to $2K Affiliate Marketing Blueprint Materials and Training"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-black/80 px-3 py-1 rounded-md border border-white/20">
                    Comprehensive Step-by-Step System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: HERE'S WHAT YOU'LL SEE NEXT */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
              Here&apos;s What You&apos;ll See Next
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              When you click the button below, you&apos;ll be taken to the full 0–$2K Affiliate Marketing Blueprint presentation.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-center text-sm font-bold uppercase tracking-wider text-red-600">
              You&apos;ll be able to see:
            </p>

            <div className="max-w-2xl mx-auto space-y-3">
              {[
                {
                  title: "What's inside the Blueprint",
                  desc: "A complete walkthrough of every core module, template, and implementation guide."
                },
                {
                  title: "How the training is structured",
                  desc: "A progressive path from zero baseline knowledge all the way to consistent $2K commissions."
                },
                {
                  title: "The resources and bonuses included",
                  desc: "Done-for-you swipe files, objection handlers, WhatsApp scripts, and case studies."
                },
                {
                  title: "What you get access to",
                  desc: "Member community, training dashboard access, live breakdown sessions, and resources."
                },
                {
                  title: "The price and available options",
                  desc: "Clear, transparent enrollment choices and fast-action discounts available today."
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FINAL CALL TO ACTION */}
        <section className="bg-gradient-to-b from-red-50/70 via-white to-red-50/50 border-2 border-red-500/50 rounded-3xl p-8 sm:p-12 text-center space-y-7 shadow-xl shadow-red-500/5 relative overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight font-display text-balance">
              If you&apos;re ready to go beyond simply understanding trust and see how the bigger affiliate marketing system comes together, take a look at the Blueprint.
            </h2>
          </div>

          <div className="relative z-10 space-y-3">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 sm:px-14 py-5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-xl shadow-red-600/35 hover:shadow-red-600/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>SEE THE 0–$2K BLUEPRINT</span>
              <ArrowRight className="w-6 h-6 stroke-[3]" />
            </a>
            
            <p className="text-sm font-medium text-slate-500">
              Click below to see the full details.
            </p>
          </div>

          {/* Trust and security badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 relative z-10 border-t border-slate-200">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-slate-800">Official Selar Portal Link</span>
            </div>
            <span className="text-slate-300">·</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span className="text-red-700 font-bold">Instant Digital Access</span>
            </div>
            <span className="text-slate-300">·</span>
            <button
              onClick={handleCopyLink}
              className="hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer font-medium"
              title="Copy official link to clipboard"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copiedLink ? "Link Copied!" : "Share Link"}</span>
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8 px-4 text-center text-xs text-slate-500 space-y-3">
        <p className="max-w-xl mx-auto leading-relaxed text-slate-600 font-medium">
          The Trust Formula & 0–$2K Affiliate Marketing Blueprint. All rights reserved.
        </p>
        <p className="text-[11px] text-slate-400 max-w-lg mx-auto">
          Disclaimer: Results vary based on individual effort, consistency, and market execution. We do not promote get-rich-quick schemes.
        </p>
      </footer>

      {/* STICKY BOTTOM ACTION BAR (Shown on scroll past video) */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 px-4 animate-slideUp shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-slate-900">
                Ready for the full picture?
              </p>
              <p className="text-[11px] text-slate-500 truncate">
                Discover the 0–$2K Affiliate Marketing Blueprint presentation
              </p>
            </div>

            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-lg shadow-md shadow-red-600/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>SEE THE 0–$2K BLUEPRINT</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
