import { Instagram, MessageCircle, Mail } from "lucide-react"
import Logo from "./Logo"

const socials = [
  { label: "Instagram", href: "https://instagram.com/byfoodmaster", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/6281252331733", icon: MessageCircle },
  { label: "Email", href: "mailto:cs@byfoodmaster.com", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <Logo />
          <p className="mt-3 text-sm text-ink-soft">
            &copy; 2026 FoodMaster. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-soft transition-colors hover:border-brand hover:bg-brand-light hover:text-brand"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
