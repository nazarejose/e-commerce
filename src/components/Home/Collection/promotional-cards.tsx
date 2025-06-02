import Image from "next/image"
import { Button } from "@/components/ui/button"

interface PromotionalCardsProps {
  cards: {
    id: string
    backgroundImage: string
    alt: string
    discount: string
  }[]
}

export default function PromotionalCards({ cards }: PromotionalCardsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-left mb-8 text-gray-800">
        Coleções em destaque
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative h-48 sm:h-52 md:h-56 rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src={card.backgroundImage || "/placeholder.svg"}
              alt={card.alt}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={true}
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="relative h-full p-3 sm:p-4 flex flex-col justify-between">
              <div className="self-start">
                <span className="bg-[#E7FF86] text-dark-gray-2 text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-4xl">
                  {card.discount}
                </span>
              </div>

              <div className="self-start">
                <Button
                  variant="destructive"
                  size="sm"
                  className="bg-light-gray-3 hover:bg-primary hover:text-light-gray-3 text-primary font-bold text-xs sm:text-sm"
                >
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
