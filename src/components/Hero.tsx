import { Bell } from "lucide-react"
import PhoneMockup from "./PhoneMockup"

const platforms = ["GoFood", "GrabFood", "ShopeeFood"]

export default function Hero() {
  return (
    <section id="beranda" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
        {/* copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand">
            Tim Profesional Resto Online
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink text-balance md:text-5xl lg:text-6xl">
            Kelola Resto Online <span className="text-brand">Tanpa Ribet</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            Kamu fokus mengelola dapur dan penjualan offline. FoodMaster fokus
            mengelola penjualan resto onlinemu.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Mulai Sekarang
            </a>
            <a
              href="#layanan"
              className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Pelajari Layanan
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-medium text-ink-soft">Terhubung ke</span>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-ink"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* visual */}
        <div className="relative">
          <div className="absolute inset-x-6 top-6 -z-0 h-full rounded-[2.5rem] bg-brand-light" />
          <div className="relative grid grid-cols-5 items-center gap-4">
            <div className="col-span-3">
              <img
                src="/images/hero-owner.png"
                alt="Pemilik resto tersenyum sambil memegang ponsel"
                className="w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
            <div className="col-span-2">
              <PhoneMockup />
            </div>
          </div>

          {/* floating notification */}
          <div className="absolute -top-3 right-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg ring-1 ring-black/5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-accent">
              <Bell className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold text-ink">Order baru!</p>
              <p className="text-[10px] text-ink-soft">Ayam Geprek Juara</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
