import { Search, Store, Megaphone, Monitor, RefreshCw, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Step = {
  icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Audit & Analisis",
    desc: "Menganalisis tampilan, menu, promo, dan performa outlet",
  },
  {
    icon: Store,
    title: "Rapikan & Standarkan",
    desc: "Memperbaiki profil, banner, foto, kategori, dan struktur menu",
  },
  {
    icon: Megaphone,
    title: "Optimasi Penjualan",
    desc: "Menyusun bundling, add-on, promo, campaign, dan iklan",
  },
  {
    icon: Monitor,
    title: "Pantau Performa",
    desc: "Membaca order, omzet, biaya, dan performa tiap platform",
  },
  {
    icon: RefreshCw,
    title: "Perbaikan Berkelanjutan",
    desc: "Melakukan evaluasi dan optimasi secara berkala",
  },
]

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="scroll-mt-20 bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Cara Kerja
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            Mulai dalam 5 langkah mudah
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="contents">
              <article className="relative flex flex-1 flex-col rounded-2xl bg-white p-5 pt-7 text-center shadow-[0_8px_24px_rgba(26,20,20,0.08)]">
                <span className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 text-[15px] font-extrabold leading-snug text-brand">
                  {title}
                </h3>
                <span className="mx-auto mt-2 h-1 w-10 rounded-full bg-accent" />
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </article>

              {i < steps.length - 1 && (
                <div className="flex items-center justify-center py-1 lg:px-1.5" aria-hidden="true">
                  <ArrowRight className="h-5 w-5 rotate-90 text-accent lg:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
