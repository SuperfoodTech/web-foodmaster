import { Clock, Users, BarChart3 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Benefit = {
  icon: LucideIcon
  title: string
  desc: string
}

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: "Lebih Hemat Waktu",
    desc: "Tanpa repot merekrut, melatih, dan menggaji banyak orang.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    desc: "Desainer, marketing, admin, dan keuangan yang berpengalaman.",
  },
  {
    icon: BarChart3,
    title: "Keputusan Berbasis Data",
    desc: "Laporan performa jelas untuk mengembangkan penjualan online.",
  },
]

export default function WhyFoodMaster() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Kenapa FoodMaster
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            Alasan pemilik resto memilih kami
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
