import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/ProductFilterProps"; 

interface ProductCardProps extends Pick<Product, 
  | 'id' 
  | 'image' 
  | 'category' 
  | 'title' 
  | 'originalPrice' 
  | 'currentPrice' 
  | 'discountPercentage'
>{
  href?: string;
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
            className="object-contain scale-75 group-hover:scale-95 transition-transform duration-300 -rotate-[30deg]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        <div className="p-4 space-y-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
            {category}
          </p>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(currentPrice)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
