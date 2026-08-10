import { ChefHat } from "lucide-react"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#beranda" className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
        <ChefHat className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="text-xl font-extrabold tracking-tight text-ink">
        Food<span className="text-brand">Master</span>
        <sup className="text-brand">&reg;</sup>
      </span>
    </a>
  )
}
