export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#beranda" className={`inline-flex items-center ${className}`}>
      <img
        src="/images/FoodMaster.png"
        alt="FoodMaster"
        className="h-8 w-auto md:h-9"
        width={163}
        height={36}
      />
    </a>
  )
}
