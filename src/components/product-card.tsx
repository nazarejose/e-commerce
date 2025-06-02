import Image from "next/image"
import Link from "next/link"
// import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  image: string
  category: string
  title: string
  originalPrice: number
  currentPrice: number
  discountPercentage?: number
  href?: string
}

export function ProductCard({
  id,
  image,
  category,
  title,
  originalPrice,
  currentPrice,
  discountPercentage,
  href = `/products/${id}`,
}: ProductCardProps) {
  const hasDiscount = discountPercentage && discountPercentage > 0
  const formatPrice = (price: number) => `$${price}`

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative aspect-square bg-gray-50 p-4">
          {hasDiscount && (
            <span className="absolute top-2 left-2 z-10 bg-[#E7FF86] text-dark-gray-2 text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-4xl">
              {discountPercentage}% OFF
            </span>
          )}
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{category}</p>

          {/* Title */}
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            {hasDiscount && <span className="text-sm text-gray-400 line-through">{formatPrice(originalPrice)}</span>}
            <span className="text-lg font-bold text-gray-900">{formatPrice(currentPrice)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
