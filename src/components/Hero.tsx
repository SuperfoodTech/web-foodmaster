import { useEffect, useState } from "react"
import { Bell } from "lucide-react"
import PhoneMockup from "./PhoneMockup"

const platforms = [
  { name: "GoFood", logo: "/images/platforms/gofood.png" },
  { name: "GrabFood", logo: "/images/platforms/grabfood.png" },
  { name: "ShopeeFood", logo: "/images/platforms/shopeefood.png" },
]

const restoPhotos = [
  { src: "/images/Kebab.png", alt: "Outlet Kebab Baba Amir", name: "Kebab Baba Amir" },
  { src: "/images/Roti.png", alt: "Outlet Roti Bakar 41", name: "Roti Bakar 41" },
  { src: "/images/Depot88.png", alt: "Outlet Depot 88", name: "Depot 88" },
  { src: "/images/Bubur.png", alt: "Outlet Bubur Ayam Jakarta Bang Udin", name: "Bubur Ayam Jakarta Bang Udin" },
  { src: "/images/Sate.png", alt: "Outlet Sate Sriwijaya", name: "Sate Sriwijaya" },
  { src: "/images/Salero.png", alt: "Outlet Salero Minang Raya", name: "Salero Minang Raya" },
  { src: "/images/Minang.png", alt: "Outlet Minang Agung", name: "Minang Agung" },
  { src: "/images/Parahyangan.png", alt: "Outlet Ayam Bakar Pondok Parahyangan", name: "Ayam Bakar Pondok Parahyangan" },
  { src: "/images/Holans.png", alt: "Outlet Martabak Holans", name: "Martabak Holans" },
]

export default function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhotoIndex((i) => (i + 1) % restoPhotos.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="beranda" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-5 py-16 md:py-24 lg:grid-cols-[minmax(260px,380px)_minmax(0,1fr)]">
        <div>
          <span className="inline-flex flex-col rounded-2xl bg-brand-light px-5 py-3 text-brand">
            <span className="text-base font-bold leading-tight md:text-lg">
              Tim Profesional Resto Online
            </span>
            <span className="text-sm font-semibold leading-tight text-brand/80 md:text-[15px]">
              tanpa perlu gaji tim sendiri!
            </span>
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
              href="https://wa.me/6285183151531"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Coba sekarang!
            </a>
            <a
              href="#layanan"
              className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
            >
              Lihat layanannya
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs font-medium text-ink-soft">Terhubung ke</span>
            <div className="flex flex-wrap items-center gap-2">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-t-2xl rounded-b-lg border border-black/10 bg-white p-0.5"
                >
                  <img src={p.logo} alt={p.name} className="h-full w-full object-contain" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_300px] md:gap-5">
            {/* Box 1: 4:3 (height = 3/4 width), pink frame matches image, crop extra top/bottom */}
            <div className="min-w-0 max-w-[92%] rounded-[2rem] bg-brand-light p-2.5 sm:p-3">
              <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-white">
                {restoPhotos.map((photo, i) => (
                  <img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    className={`absolute inset-0 h-full w-full object-contain object-center p-1 transition-opacity duration-700 ${
                      i === photoIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 flex shrink-0 items-center justify-between gap-2 px-1">
                <p className="text-xs font-semibold text-ink">
                  {restoPhotos[photoIndex].name}
                </p>
                <div className="flex gap-1.5">
                  {restoPhotos.map((photo, i) => (
                    <button
                      key={photo.src}
                      type="button"
                      aria-label={`Lihat foto ${i + 1}`}
                      onClick={() => setPhotoIndex(i)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        i === photoIndex ? "bg-brand" : "bg-black/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Box 2: phone stays the same size */}
            <div className="relative mx-auto w-full max-w-[300px] rounded-[2rem] bg-brand-light px-5 pb-6 pt-10 md:mx-0">
              <div className="absolute left-1/2 top-3 z-10 flex w-max -translate-x-1/2 items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-lg ring-1 ring-black/5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Bell className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="text-[11px] font-bold text-ink">Order baru!</p>
                  <p className="text-[10px] text-ink-soft">Ayam Geprek Juara</p>
                </div>
              </div>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
