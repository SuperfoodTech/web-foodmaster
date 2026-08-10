import { Link2, Settings, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Step = {
  icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  {
    icon: Link2,
    title: "Hubungkan Resto",
    desc: "Sambungkan akun GoFood, GrabFood, dan ShopeeFood restomu ke FoodMaster.",
  },
  {
    icon: Settings,
    title: "FoodMaster Kelola",
    desc: "Tim kami mengurus menu, promo, iklan, dan laporan penjualan online.",
  },
  {
    icon: TrendingUp,
    title: "Penjualan Online Bertumbuh",
    desc: "Kamu terima laporan performa dan omzet online yang terus meningkat.",
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
            Mulai dalam 3 langkah mudah
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-md">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-sm font-bold text-brand">Langkah {i + 1}</span>
              </div>
              <h3 className="mt-1 text-lg font-bold text-ink">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
