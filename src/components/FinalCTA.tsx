import { Target, ArrowRight } from "lucide-react"

const WA_LINK = "https://wa.me/6285183151531"

export default function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center text-white md:px-16">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Target className="h-7 w-7" />
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-4xl">
            Fokus pada Restomu. Biar FoodMaster Mengurus Online-nya.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Sudah dipercaya 80+ outlet di Surabaya, Sidoarjo, Malang, dan
            Jakarta. Konsultasi gratis, tanpa komitmen di awal.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand transition-colors hover:bg-accent-light"
          >
            Konsultasi Gratis via WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
