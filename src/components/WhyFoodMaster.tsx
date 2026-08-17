import { Users, BarChart3, RefreshCw, Store, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const platformLogos = [
  { name: "GoFood", src: "/images/platforms/gofood.png" },
  { name: "GrabFood", src: "/images/platforms/grabfood.png" },
  { name: "ShopeeFood", src: "/images/platforms/shopeefood.png" },
]

type Benefit = {
  title: string
  desc: string
  descAccent?: string
  icon?: LucideIcon
  logos?: boolean
}

const benefits: Benefit[] = [
  {
    title: "Spesialis Online Food",
    desc: "GoFood, GrabFood, dan ShopeeFood",
    logos: true,
  },
  {
    icon: Users,
    title: "Tim Profesional Lengkap",
    desc: "Dari strategi hingga eksekusi",
  },
  {
    icon: BarChart3,
    title: "Berbasis Data & Hasil",
    desc: "Strategi disusun dari performa aktual, dengan metode bagi hasil",
  },
  {
    icon: RefreshCw,
    title: "Optimasi Berkelanjutan",
    desc: "Bukan hanya diperbaiki di awal, lalu ditinggalkan",
  },
  {
    icon: Store,
    title: "Dipercaya Banyak Outlet",
    desc: "Sudah mengelola 80+ outlet kuliner",
  },
  {
    icon: ShieldCheck,
    title: "Ada Garansi",
    desc: "Target tidak tercapai? Kamu boleh berhenti, ",
    descAccent: "aset digital tetap bisa digunakan",
  },
]

export default function WhyFoodMaster() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/images/team/working-3.png')" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-neutral-50/90" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            Kenapa Harus Pilih FoodMaster?
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc, descAccent, logos }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-t-2xl rounded-b-xl bg-brand-light">
                {logos ? (
                  <span className="flex items-center -space-x-1">
                    {platformLogos.map((p) => (
                      <img
                        key={p.name}
                        src={p.src}
                        alt=""
                        className="h-6 w-6 rounded-t-md rounded-b-sm bg-white object-contain ring-1 ring-white"
                      />
                    ))}
                  </span>
                ) : (
                  Icon && <Icon className="h-7 w-7 text-brand" strokeWidth={2.2} />
                )}
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-base font-extrabold text-brand">{title}</h3>
                <span className="mt-1.5 block h-1 w-10 rounded-full bg-accent" />
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {desc}
                  {descAccent && <span className="font-semibold text-brand">{descAccent}</span>}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
