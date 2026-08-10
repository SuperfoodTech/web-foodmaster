import { Palette, Megaphone, ClipboardList, Wallet } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  items: string[]
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Desainer",
    items: ["Desain menu", "Banner & promo", "Foto produk", "Brand konsisten"],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    items: ["Campaign terjadwal", "Iklan tertarget", "Promo menarik", "Optimasi penjualan"],
  },
  {
    icon: ClipboardList,
    title: "Admin",
    items: ["Atur menu", "Harga optimal", "Kategori rapi", "Add-on & bundling"],
  },
  {
    icon: Wallet,
    title: "Keuangan",
    items: ["Order & omzet", "Potongan & biaya", "Laporan performa", "Laba bersih"],
  },
]

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Layanan Kami
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            Satu tim lengkap untuk resto online kamu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Semua peran yang kamu butuhkan untuk berjualan online, dikerjakan
            oleh tim FoodMaster.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
