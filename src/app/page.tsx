"use client";
import React, { useState } from "react";

// ── Image imports ──────────────────────────────────────────────────────
const imgImage3 = "/images/image3.png";
const imgImage2 = "/images/image2.png";
const imgImage1 = "/images/image1.png";
const imgImage7 = "/images/image7.png";
const imgPixilFrame01 = "/images/pixilFrame01.png";
const imgGeminiImage = "/images/geminiImage.png";
const img7f2e = "/images/7f2e.png";
const imgImage8 = "/images/image8.png";
const img605b = "/images/605b.png";
const imgGeminiPreview2 = "/images/geminiPreview2.png";
const imgRectangle1 = "/images/rectangle1.png";
const img5c27 = "/images/5c27.png";
const imgVector = "/images/vector.png";
const imgVector1 = "/images/vector1.png";
const imgVector2 = "/images/vector2.png";
const imgRectangle = "/images/rectangle.png";
const imgVector3 = "/images/vector3.png";
const imgVector4 = "/images/vector4.png";
const imgVector5 = "/images/vector5.png";
const imgVector6 = "/images/vector6.png";
const imgEllipse2 = "/images/ellipse2.png";
const imgVector7 = "/images/vector7.png";
const imgVector8 = "/images/vector8.png";
const imgVector9 = "/images/vector9.png";
const imgVector10 = "/images/vector10.png";
const imgVector11 = "/images/vector11.png";

// ── Status Ticker Bar ──────────────────────────────────────────────────
function TickerBar() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-gradient-to-r from-[#190934] via-[#2c225a] to-[#190934] py-2 sm:py-3 md:py-4">
        <p className="font-vt323 text-white text-center text-[14px] sm:text-[20px] md:text-[26px] lg:text-[30px] xl:text-[34px] leading-normal whitespace-nowrap overflow-x-auto px-4">
          System status: Mission : AL/ML Innovation | Environment | Pixel-Space | Connectivity: 100% Hyper-Linked
        </p>
      </div>
    </div>
  );
}

// ── CTA Button ─────────────────────────────────────────────────────────
function CTAButton() {
  return (
    <div className="relative inline-block">
      <div className="border-[1.5px] border-solid border-[#be059d] rounded-[78px] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5">
        <p className="font-vt323 text-[#ff41dd] text-[24px] sm:text-[30px] md:text-[35px] lg:text-[39px] leading-normal text-center">
          Secure Your Spot →
        </p>
      </div>
    </div>
  );
}

// ── Hero Logo Banner (3 layered images) ────────────────────────────────
function HeroLogoBanner() {
  return (
    <div className="relative w-full aspect-[1152/88]">
      <div className="absolute left-[0.61%] right-0 top-px aspect-[1408/98]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImage3} />
      </div>
      <div className="absolute left-0 right-[0.17%] top-0 aspect-[1408/98]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImage2} />
      </div>
      <div className="absolute left-[0.35%] right-[0.78%] top-[10%] aspect-[1408/98]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgImage1} />
      </div>
    </div>
  );
}

// ── GDG Logo (CSS mask-image assembly) ─────────────────────────────────
function GDGLogo() {
  return (
    <div className="relative w-[180px] h-[95px] sm:w-[240px] sm:h-[127px] md:w-[300px] md:h-[158px] lg:w-[360px] lg:h-[190px] overflow-clip">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-full"
            style={{ maskImage: `url('${imgVector}')` }}
          >
            <img alt="" className="absolute block w-full h-full" src={imgVector1} />
          </div>
          <div
            className="absolute inset-[10.48%_9.61%_35.01%_9.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.6%_-10.48%] mask-size-[277.78%_152.67%]"
            style={{ maskImage: `url('${imgVector}')` }}
          >
            <img alt="" className="absolute block w-full h-full" src={imgVector2} />
          </div>
          <div className="absolute inset-[10.48%_9.61%_35.01%_9.61%]">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 mask-position-[-9.6%_-10.48%,_0px_0px]"
                style={{ maskImage: `url('${imgVector}'), url('${imgRectangle}')` }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 top-0 w-full h-full" src={imgRectangle1} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[63.85%_0_5.99%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-63.85%] mask-size-[100%_331.57%]"
            style={{ maskImage: `url('${imgVector}')` }}
          >
            <img alt="" className="absolute block w-full h-full" src={imgVector3} />
          </div>
          <div
            className="absolute inset-[69.08%_70.31%_21.66%_3.93%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.93%_-69.08%] mask-size-[388.2%_1077.5%]"
            style={{ maskImage: `url('${imgVector}')` }}
          >
            <img alt="" className="absolute block w-full h-full" src={imgVector4} />
          </div>
          <div
            className="absolute inset-[69.14%_4.02%_21.5%_31.35%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-31.35%_-69.14%] mask-size-[154.7%_1065.6%]"
            style={{ maskImage: `url('${imgVector}')` }}
          >
            <img alt="" className="absolute block w-full h-full" src={imgVector5} />
          </div>
          <div
            className="absolute inset-[80.97%_37.32%_9.77%_37.39%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-37.39%_-80.97%] mask-size-[395.56%_1081.08%]"
            style={{ maskImage: `url('${imgVector}')` }}
          >
            <img alt="" className="absolute block w-full h-full" src={imgVector6} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Social Icon (Instagram) ────────────────────────────────────────────
function InstagramIcon() {
  return (
    <div className="relative">
      <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
        <img alt="" className="absolute inset-[-6%] w-[112%] h-[112%]" src={imgEllipse2} />
      </div>
      <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 border border-[#961ad2] border-solid overflow-clip">
        <div className="absolute inset-[-2.13%_2.13%_2.13%_-2.13%]">
          <img alt="" className="absolute block w-full h-full" src={imgVector7} />
        </div>
        <div className="absolute inset-[-2.13%_2.13%_2.13%_-2.13%]">
          <img alt="" className="absolute block w-full h-full" src={imgVector8} />
        </div>
        <div className="absolute inset-[8.81%_13.07%_13.06%_8.81%]">
          <img alt="" className="absolute block w-full h-full" src={imgVector9} />
        </div>
      </div>
    </div>
  );
}

// ── Social Icon (LinkedIn) ─────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <div className="relative">
      <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
        <img alt="" className="absolute inset-[-6%] w-[112%] h-[112%]" src={imgEllipse2} />
      </div>
      <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 border border-[#961ad2] border-solid overflow-clip">
        <div className="absolute inset-[0.26%_4.43%_4.43%_0.26%]">
          <img alt="" className="absolute block w-full h-full" src={imgVector10} />
        </div>
        <div className="absolute inset-[13.33%_18.49%_18.49%_13.24%]">
          <img alt="" className="absolute block w-full h-full" src={imgVector11} />
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden flex flex-col">
      {/* ══════════ BACKGROUND IMAGE (image7) — covers the hero area ══════════ */}
      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-0">
          <img
            alt=""
            className="w-full h-full object-cover pointer-events-none"
            src={imgImage7}
          />
        </div>

        {/* ──────── NAVIGATION ──────── */}
        <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-4 sm:py-5 md:py-6">
          {/* GDG Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0">
            <img
              alt="GDG Logo"
              className="w-full h-full object-cover pointer-events-none"
              src={img7f2e}
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            <p className="decoration-solid font-vt323 leading-normal text-[28px] xl:text-[34px] 2xl:text-[39px] text-white underline cursor-pointer">
              HOME
            </p>
            <p className="decoration-solid font-vt323 leading-normal text-[28px] xl:text-[34px] 2xl:text-[39px] text-white underline cursor-pointer">
              ABOUT THE EVENT
            </p>
            <p className="decoration-solid font-vt323 leading-normal text-[28px] xl:text-[34px] 2xl:text-[39px] text-white underline cursor-pointer">
              LEAD
            </p>
          </div>

          {/* Hamburger Button (mobile/tablet) */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-7 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-8">
            <button
              className="absolute top-5 right-5 p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block w-7 h-0.5 bg-white rotate-45 translate-y-[1px]" />
              <span className="block w-7 h-0.5 bg-white -rotate-45 -translate-y-[1px]" />
            </button>
            <p
              className="decoration-solid font-vt323 leading-normal text-[36px] sm:text-[42px] text-white underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </p>
            <p
              className="decoration-solid font-vt323 leading-normal text-[36px] sm:text-[42px] text-white underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT THE EVENT
            </p>
            <p
              className="decoration-solid font-vt323 leading-normal text-[36px] sm:text-[42px] text-white underline cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              LEAD
            </p>
          </div>
        )}

        {/* ──────── HERO SECTION ──────── */}
        <section className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
            {/* Left Column: Banner + Text + CTA */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-[55%] xl:w-[50%]">
              {/* Logo Banner */}
              <HeroLogoBanner />

              {/* Loading text */}
              <p className="font-vt323 leading-normal text-[#07bdff] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] xl:text-[39px]">
                {`00:01:27 > LOADING... > TOKENIZE >INFERENCE > GLITCH > RESTART`}
              </p>

              {/* Intelligence paragraph */}
              <p className="font-vt323 leading-normal text-[#d5eef8] text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[39px]">
                Loading intelligence…
                <br />
                Tokenizing reality into patterns.
                <br />
                Restarting cognition.
              </p>

              {/* Event details */}
              <div className="font-vt323 leading-[1.3] text-white text-[18px] sm:text-[24px] md:text-[30px] lg:text-[34px] xl:text-[39px]">
                <p>{`📅 March 25 `}</p>
                <p>{`📍 Campus Auditorium `}</p>
                <p>👩‍💻 Open to All Departments</p>
              </div>

              {/* CTA Button */}
              <div className="mt-2 sm:mt-4">
                <CTAButton />
              </div>
            </div>

            {/* Right Column: Robot + Decorative images */}
            <div className="relative flex justify-center items-center mt-8 lg:mt-0 w-full lg:w-[45%] xl:w-[50%]">
              {/* Decorative 605b image (flipped) behind robot */}
              <div className="absolute -top-[10%] -right-[5%] w-[70%] sm:w-[60%] lg:w-[80%] aspect-[618/605] -scale-y-100 rotate-180 opacity-60 pointer-events-none">
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    alt=""
                    className="absolute h-[187.09%] left-[-12.51%] top-[-38.61%] w-[122.05%]"
                    src={img605b}
                  />
                </div>
              </div>

              {/* Robot */}
              <img
                alt="Pixel Art Robot"
                className="relative w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-full max-w-[500px] xl:max-w-[620px] 2xl:max-w-[730px] h-auto pointer-events-none"
                src={imgPixilFrame01}
              />

              {/* Gemini preview (small rotated) */}
              <div className="absolute bottom-0 left-0 w-[18vw] sm:w-[14vw] md:w-[12vw] lg:w-[25%] max-w-[161px] aspect-square flex items-center justify-center pointer-events-none">
                <div className="-scale-y-100 rotate-[179.53deg]">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={imgGeminiPreview2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════ TICKER BAR 1 ══════════ */}
      <TickerBar />

      {/* ══════════ "THE NEURAL NET" SECTION ══════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Background: geminiImage */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgGeminiImage}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
          {/* Decorative 5c27 image (top-left, tilted) */}
          <div className="absolute top-4 left-0 sm:top-8 sm:left-4 w-[20vw] sm:w-[16vw] md:w-[14vw] lg:w-[12vw] max-w-[210px] aspect-square flex items-center justify-center pointer-events-none opacity-80">
            <div className="-rotate-[22deg]">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={img5c27}
              />
            </div>
          </div>

          {/* Small purple diamond (decorative) */}
          <div className="absolute top-[15%] left-[8%] hidden sm:flex items-center justify-center pointer-events-none opacity-70">
            <div className="-rotate-[22deg]">
              <div className="bg-[#e7cbff] w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
            </div>
          </div>

          {/* Decorative 7f2e (top-right, rotated) */}
          <div className="absolute top-[35%] right-0 sm:right-4 lg:right-8 w-[22vw] sm:w-[18vw] md:w-[16vw] lg:w-[14vw] max-w-[270px] aspect-square flex items-center justify-center pointer-events-none opacity-80">
            <div className="rotate-[21.74deg]">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={img7f2e}
              />
            </div>
          </div>

          {/* Title block */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-center w-full max-w-[1090px]">
            <h2 className="font-vt323 text-white text-center text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] xl:text-[88px] leading-normal">
              The Neural Net
            </h2>
            <p className="font-vt323 text-[#7fe986] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px] leading-normal w-full">
              {`28.02.26 > LOADING... > TOKENIZE... > DEREFERENCE > GLITCH > RESTART`}
            </p>
          </div>

          {/* Description paragraph */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-[72px] w-full max-w-[1339px]">
            <p className="font-vt323 text-white text-center text-[22px] sm:text-[30px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-normal">
              Welcome to our pixelated corner of the cosmos! We are navigating the vast space of technology—learning, building, and sharing knowledge about Machine Learning and AI. Join us as we delve into the core of neural models, break boundaries, and build the future of intelligence together. Your adventure starts here.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ TICKER BAR 2 ══════════ */}
      <TickerBar />

      {/* ══════════ "EVENT RESOURCES" SECTION ══════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Background: image8 */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgImage8}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Section header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="font-vt323 text-white text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[122px] leading-normal">
              EVENT RESOURCES
            </h2>
            <p className="font-vt323 text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] xl:text-[68px] leading-normal">
              Subheading
            </p>
          </div>

          {/* Cards layout with decoratives on the sides */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
            {/* Left decorative image (605b) */}
            <div className="hidden md:block relative w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[18vw] max-w-[400px] aspect-[400/391] shrink-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[187.09%] left-[-12.51%] top-[-38.61%] w-[122.05%]"
                  src={img605b}
                />
              </div>
            </div>

            {/* Resource Cards */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full max-w-[1019px]">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-[rgba(31,23,112,0.68)] rounded-[14px] h-[60px] sm:h-[75px] md:h-[90px] lg:h-[105px] xl:h-[120px] w-full"
                />
              ))}
            </div>

            {/* Right decorative image (geminiPreview2, rotated) */}
            <div className="hidden md:flex relative w-[20vw] lg:w-[16vw] max-w-[277px] aspect-square items-center justify-center shrink-0 pointer-events-none">
              <div className="-scale-y-100 rotate-[179.53deg]">
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={imgGeminiPreview2}
                />
              </div>
            </div>
          </div>

          {/* Mobile: show decoratives in a row below cards */}
          <div className="flex md:hidden justify-center gap-6 mt-6">
            <div className="relative w-[30vw] max-w-[160px] aspect-[400/391] pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  className="absolute h-[187.09%] left-[-12.51%] top-[-38.61%] w-[122.05%]"
                  src={img605b}
                />
              </div>
            </div>
            <div className="w-[25vw] max-w-[140px] aspect-square flex items-center justify-center pointer-events-none">
              <div className="-scale-y-100 rotate-[179.53deg]">
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={imgGeminiPreview2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TICKER BAR 3 ══════════ */}
      <TickerBar />

      {/* ══════════ "BREAKING AN LLM SIGNING OFF" + FOOTER ══════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Background: geminiImage slice (bottom portion) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            alt=""
            className="w-full h-full object-cover object-bottom"
            src={imgGeminiImage}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 sm:py-14 md:py-18 lg:py-24">
          {/* Heading */}
          <h2 className="font-vt323 text-white text-center text-[32px] sm:text-[48px] md:text-[64px] lg:text-[84px] xl:text-[104px] leading-normal mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            BREAKING AN LLM SIGNING OFF
          </h2>

          {/* Footer content */}
          <footer className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
            {/* Left: GDG Logo + Back to Top */}
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6">
              <GDGLogo />

              {/* BACK TO TOP */}
              <div className="flex items-center gap-3">
                <div className="border-2 border-[#961ad2] border-solid rounded-[71px] px-4 sm:px-5 md:px-6 py-2 sm:py-3">
                  <p className="font-vt323 text-white text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-normal">
                    BACK TO TOP
                  </p>
                </div>
              </div>
            </div>

            {/* Center: Footer links */}
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <p className="decoration-solid font-vt323 leading-normal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] text-white underline cursor-pointer">
                LEAD
              </p>
              <p className="decoration-solid font-vt323 leading-normal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] text-white underline cursor-pointer">
                CONTACT
              </p>
              <p className="decoration-solid font-vt323 leading-normal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] text-white underline cursor-pointer">
                VISIT US
              </p>
              <p className="decoration-solid font-vt323 leading-normal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] text-white underline cursor-pointer">
                ABOUT THE EVENT
              </p>
            </div>

            {/* Right: Social icons + Follow Us */}
            <div className="flex flex-col items-center lg:items-end gap-3 sm:gap-4">
              <p className="font-vt323 text-white text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] leading-normal">
                FOLLOW US
              </p>
              <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
                <LinkedInIcon />
                <InstagramIcon />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
