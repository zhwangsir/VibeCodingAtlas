/* ============================================================
 *  Design Rocket Certificates — 邮件式落地页(AI 领导力课程)
 *  字体:Instrument Serif(标题)/ Inter(正文)
 *  配色:#050505 页面背景 / #111111 卡片 / #080808 页脚
 *  核心:640px 邮件容器 + 3 段背景视频 + Lime CTA + 4 步教学
 * ============================================================ */
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Music2,
} from 'lucide-react'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'

const HERO_VIDEO = '/videos/f120e48a-d545-45dd-a02d-facb07829888.mp4'
const SECTION_3_VIDEO = '/videos/e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4'
const SECTION_4_VIDEO = '/videos/9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4'

const STEPS = [
  'Learn how to spot AI opportunities that boost productivity across roles and deliver visible results.',
  'Build structures that support your team so AI efficiencies multiply across the organization.',
  'Gain the skills to drive culture change like securing buy-in and reducing resistance.',
  'Get frameworks to deliver AI pilots that prove impact fast and build credibility with measurable results.',
]

const SOCIAL_ICONS = [Facebook, Twitter, Instagram, Youtube, Linkedin, Music2]

function PrimaryButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 rounded-lg bg-[#DCFF00] px-6 py-3 text-[15px] font-bold text-[#0A0A0A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c9ea00]"
    >
      {label}
      <ArrowRight size={20} strokeWidth={2.5} />
    </button>
  )
}

function SolidButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-block rounded-lg bg-white px-8 py-3 text-[15px] font-bold text-[#0A0A0A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8E8E8]"
    >
      {label}
    </button>
  )
}

function Step({ number, text }: { number: number; text: string }) {
  return (
    <div className="flex items-start gap-5 last:mb-0 mb-6">
      <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-[#DCFF00] text-xs font-bold text-[#0A0A0A]">
        {number}
      </div>
      <p className="text-[17px] leading-[1.55] text-[#E8E8E8]">{text}</p>
    </div>
  )
}

function Divider() {
  return (
    <div className="flex justify-center py-8">
      <div className="h-px w-24 bg-white/20" />
    </div>
  )
}

export default function DesignRocket() {
  return (
    <div data-theme="design-rocket" className="min-h-screen bg-[#050505] px-4 py-10 font-sans">
      <div
        className="mx-auto max-w-[640px] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/5"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="bg-[#111111] text-[#F2F2F2]">
          {/* ===== Section 1 — Hero (video bg) ===== */}
          <section
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: '640 / 820' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src={HERO_VIDEO}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)',
              }}
            />
            <div className="relative z-10 flex h-full flex-col items-center px-6 pb-10 pt-12 text-center">
              {/* Top brand block */}
              <div className="text-white">
                <div
                  className="text-[28px] leading-[0.95] tracking-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Design Rocket
                </div>
                <div className="mt-1 text-[13px] font-medium tracking-[0.22em]">CERTIFICATES</div>
              </div>

              <div className="mt-40 text-[13px] font-semibold tracking-[0.28em] text-white">
                NOW AVAILABLE
              </div>

              <div className="flex-1" />

              {/* Headline */}
              <h1
                className="max-w-[560px] text-[58px] leading-[1.02] tracking-tight text-white"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Learn to lead AI
                <br />
                and unlock new value
              </h1>

              {/* CTA pill */}
              <button
                type="button"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D8F90A] px-8 py-4 text-[15px] font-semibold text-[#1E1E1E] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c9ea00]"
              >
                Enroll Now
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          </section>

          {/* ===== Section 2 — Intro copy + CTA ===== */}
          <section className="px-[78px] pb-8 pt-4 text-center">
            <p className="text-[18px] leading-[1.55]">
              Built in collaboration with Microsoft, this certificate course gives you the
              toolkit to lead AI transformation across your organization. Learn to spot
              opportunities, launch AI pilots, and scale adoption grounded in responsible
              practices and proven frameworks.
            </p>
            <div className="flex justify-center pb-14 pt-8">
              <PrimaryButton label="Get Started" />
            </div>
            <Divider />
          </section>

          {/* ===== Section 3 — Transform how you lead with AI ===== */}
          <section>
            <div className="px-9 pb-8 text-center">
              <h2
                className="text-[46px] leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Transform how you lead with AI
              </h2>
            </div>
            <div className="px-[42px] pb-10">
              <a href="#" className="group block overflow-hidden rounded-[14px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[370px] w-full rounded-[14px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  src={SECTION_3_VIDEO}
                />
              </a>
            </div>
            <div className="px-[76px] pb-10">
              <div className="mx-auto max-w-[489px]">
                {STEPS.map((s, i) => (
                  <Step key={i} number={i + 1} text={s} />
                ))}
              </div>
            </div>
            <div className="flex justify-center pb-14">
              <SolidButton label="Enroll Now" />
            </div>
            <Divider />
          </section>

          {/* ===== Section 4 — Build your AI transformation roadmap ===== */}
          <section>
            <div className="px-9 pb-7 text-center">
              <h2
                className="text-[46px] leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Build your AI
                <br />
                transformation roadmap
              </h2>
            </div>
            <div className="px-[42px] pb-10">
              <a href="#" className="group block overflow-hidden rounded-[14px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-[370px] w-full rounded-[14px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  src={SECTION_4_VIDEO}
                />
              </a>
            </div>
            <div className="px-[78px] pb-8 text-center">
              <p className="text-[18px] leading-[1.55]">
                You'll finish this hands-on course with a personal AI Transformation Plan: your
                playbook for pilot proposals, data strategy and governance. Use it to help secure
                buy-in, guide rollout, and scale adoption responsibly.
              </p>
            </div>
            <div className="flex justify-center pb-14">
              <SolidButton label="Learn More" />
            </div>
          </section>

          {/* ===== Section 5 — Lime CTA card ===== */}
          <section className="px-14 pb-12">
            <div className="rounded-[10px] bg-[#D8F90A] px-8 py-12 text-center">
              <h2
                className="mb-3 text-[52px] leading-[1.02] tracking-tight text-[#1E1E1E]"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Ready to lead AI
                <br />
                at work?
              </h2>
              <p className="mb-8 px-4 text-[18px] leading-[1.5] text-[#1E1E1E]">
                Enroll now and be the leader your team has been waiting for.
              </p>
              <div className="flex justify-center">
                <PrimaryButton label="Enroll Now" />
              </div>
            </div>
          </section>

          {/* ===== Footer ===== */}
          <footer className="border-t border-white/5 bg-[#080808] px-10 pt-12 text-center text-white">
            <div className="flex justify-center pb-8">
              <a
                href="#"
                className="text-[30px] font-bold tracking-tight text-white transition-colors hover:text-[#DCFF00]"
              >
                Design Rocket
              </a>
            </div>
            <p className="mx-auto max-w-md pb-8 text-[12px] leading-[1.5] text-[#83837D]">
              Microsoft is a collaborator on this specific course. Microsoft does not endorse
              Design Rocket generally or other Design Rocket products.
            </p>

            <div className="flex justify-center pb-8">
              <div className="h-px w-24 bg-white/20" />
            </div>

            <div className="flex justify-center gap-5 pb-5">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-[#1E1E1E]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <p className="pb-4 text-[10px] leading-[1.6] text-[#83837D]">
              If you no longer want to receive updates on Design Rocket Certificates,
              you can unsubscribe at any time by clicking &quot;unsubscribe&quot; below.
            </p>

            <div className="pb-3 text-[12px]">
              <a href="#" className="hover:underline">Support</a>
              <span className="text-[#8F8E88]"> | </span>
              <a href="#" className="hover:underline">Privacy</a>
              <span className="text-[#8F8E88]"> | </span>
              <a href="#" className="hover:underline">Terms</a>
              <span className="text-[#8F8E88]"> | </span>
              <a href="#" className="hover:underline">Unsubscribe</a>
            </div>

            <a
              href="#"
              className="inline-block pb-10 text-[12px] text-white/80 transition-colors hover:text-white"
            >
              ©2026 Design Rocket, 660 4th Street #443, San Francisco, CA 94107 USA
            </a>
          </footer>
        </div>
      </div>
    </div>
  )
}
