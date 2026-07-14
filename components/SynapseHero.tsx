/**
 * NowakHero — landing page hero
 * Source of truth: Nowak Hero v2.dc.html (1440px desktop spec)
 *
 * Design tokens
 *  bg #FAFAFA · surface #FFFFFF · text #0D1117 · muted #5B6472
 *  border #E5E7EB · accent #4F46E5 → hover #4338CA
 *  H1: 64px/67px (105%) 700, tracking -0.025em (Geist)
 *  Sub: 20px/30px (150%) 500 (Inter)
 *  8px rhythm: eyebrow→H1 24 · H1→sub 24 · sub→CTAs 40 · CTAs→logos 64 · →visual 80 · bottom 120
 *
 * Tailwind config assumptions:
 *  fontFamily: { display: ['Geist','Inter','sans-serif'], sans: ['Inter','sans-serif'] }
 */

import { useState } from "react";

const NAV_LINKS = ["Product", "Solutions", "Pricing", "Resources"];
const LOGOS = ["Vercel", "Stripe", "Notion", "Linear", "Ramp"];

export default function NowakHero({
  onBookDemo,
  onWatchTour,
}: {
  onBookDemo?: () => void;
  onWatchTour?: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#0D1117]">
      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="flex h-[88px] items-center justify-center border-b border-[#E5E7EB] bg-white">
        <div className="flex w-full max-w-[1128px] items-center px-6 xl:px-0">
          <a
            href="/"
            className="flex items-center gap-2 font-display text-xl font-semibold leading-6"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#4F46E5] text-[13px] font-bold text-white">
              S
            </span>
            Nowak
          </a>

          <nav className="ml-16 hidden items-center gap-10 text-[15px] font-medium leading-5 lg:flex">
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase()}`}
                className="transition-colors duration-150 hover:text-[#4F46E5]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <a
              href="/signin"
              className="mr-4 hidden text-[15px] font-medium leading-5 transition-colors duration-150 hover:text-[#4F46E5] md:block"
            >
              Sign in
            </a>
            <button
              onClick={onWatchTour}
              className="hidden h-10 items-center rounded-lg border border-[#E5E7EB] px-5 text-[15px] font-semibold leading-5 transition-colors duration-150 hover:border-[#C6CBD3] hover:bg-white md:inline-flex"
            >
              Watch Product Tour
            </button>
            <button
              onClick={onBookDemo}
              className="inline-flex h-10 items-center rounded-lg bg-[#4F46E5] px-5 text-[15px] font-semibold leading-5 text-white transition-colors duration-150 hover:bg-[#4338CA]"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex flex-col items-center px-6 pb-[120px] pt-16 md:pt-24">
        <div className="flex max-w-[800px] flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#4F46E5]/[0.04] px-4 py-2 text-[13px] font-semibold uppercase leading-4 tracking-[0.5px] text-[#5B6472]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
            Trusted by 500+ finance teams
          </div>

          {/* H1 — 64/67 (105%), -0.025em */}
          <h1 className="mt-6 text-balance font-display text-[40px] font-bold leading-[1.05] tracking-[-0.025em] md:text-[56px] lg:text-[64px]">
            Enterprise Finance, Finally&nbsp;Under&nbsp;Control.
          </h1>

          {/* Subheadline — 20/30 (150%), 500 */}
          <p className="mt-6 max-w-[680px] text-pretty text-lg font-medium leading-[1.5] text-[#5B6472] md:text-xl">
            Nowak consolidates forecasting and reconciliation into a single
            source of truth, delivering a verifiable 40% efficiency boost to
            finance teams—from day one.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button
              onClick={onBookDemo}
              className="inline-flex h-[52px] items-center gap-2 rounded-[10px] bg-[#4F46E5] px-7 text-[15px] font-semibold leading-5 text-white shadow-[0_1px_2px_rgba(13,17,23,0.08),0_8px_24px_rgba(79,70,229,0.25)] transition-all duration-150 ease-out hover:scale-[1.03] hover:bg-[#4338CA] hover:shadow-[0_2px_4px_rgba(13,17,23,0.1),0_12px_32px_rgba(79,70,229,0.32)] active:scale-[0.98]"
            >
              Book a Demo <span aria-hidden>→</span>
            </button>
            <button
              onClick={onWatchTour}
              className="inline-flex h-[52px] items-center gap-2.5 rounded-[10px] border border-[#E5E7EB] bg-white px-7 text-[15px] font-semibold leading-5 transition-all duration-150 ease-out hover:scale-[1.03] hover:border-[#C6CBD3] hover:shadow-[0_4px_16px_rgba(13,17,23,0.06)] active:scale-[0.98]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F1F2F4] text-[9px]">
                ▶
              </span>
              Watch Product Tour
            </button>
          </div>

          {/* Logo strip */}
          <div className="mt-16 flex flex-col items-center gap-5">
            <span className="text-xs font-medium uppercase leading-4 tracking-[1px] text-[#9AA1AB]">
              Powering finance at
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-55 grayscale">
              {LOGOS.map((name) => (
                <span
                  key={name}
                  className="font-display text-[19px] font-semibold"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero visual slot — swap in the dashboard mock / product shot */}
        <div className="mt-20 aspect-[1128/640] w-full max-w-[1128px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_1px_2px_rgba(13,17,23,0.04),0_24px_64px_rgba(13,17,23,0.08)]" />
      </section>
    </div>
  );
}
