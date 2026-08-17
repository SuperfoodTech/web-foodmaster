import { Palette, Megaphone, ClipboardList, Wallet } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  items: string[]
}

const services: Service[] = [
  {
    icon: ClipboardList,
    title: "Admin",
    items: ["Atur menu", "Harga optimal", "Kategori rapi", "Add-on & bundling"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    items: ["Campaign terjadwal", "Iklan tertarget", "Promo menarik", "Optimasi penjualan"],
  },
  {
    icon: Palette,
    title: "Desain",
    items: ["Desain menu", "Banner & promo", "Foto produk", "Brand konsisten"],
  },
  {
    icon: Wallet,
    title: "Keuangan",
    items: ["Order & omzet", "Potongan & biaya", "Laporan performa", "Laba bersih"],
  },
]

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/team/working-2.png')" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/85" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Layanan Kami
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            Satu tim profesional untuk resto online kamu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Semua tim yang kamu butuhkan untuk penjualan makanan online
            dikerjakan oleh tim FoodMaster
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, items }, i) => {
            const red = i % 2 === 1
            return (
              <div
                key={title}
                className={`rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md ${
                  red
                    ? "border-brand/20 bg-brand text-white"
                    : "border-black/5 bg-white text-ink"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    red ? "bg-white/15 text-white" : "bg-brand-light text-brand"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className={`mt-4 text-lg font-bold ${red ? "text-white" : "text-ink"}`}>
                  {title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-sm ${
                        red ? "text-white/85" : "text-ink-soft"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          red ? "bg-accent" : "bg-accent"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
