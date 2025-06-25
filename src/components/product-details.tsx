"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { ProductCard } from "@/components/product-card"

interface Color {
  name: string
  value: string
  images: string[]
}

interface Product {
  id: string
  name: string
  code: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
  description: string
  sizes: string[]
  colors: Color[]
  brand: string
  category: string
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("41")
  const [selectedColorIndex, setSelectedColorIndex] = useState(1) // Vermelho selecionado por padrão
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentColor = product.colors[selectedColorIndex]
  const currentImages = currentColor.images

  // Backgrounds coloridos para as thumbnails
  const thumbnailBackgrounds = ["bg-purple-200", "bg-yellow-200", "bg-pink-200", "bg-orange-200", "bg-red-200"]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  const selectThumbnail = (index: number) => {
    setCurrentImageIndex(index)
  }

  const selectColor = (colorIndex: number) => {
    setSelectedColorIndex(colorIndex)
    setCurrentImageIndex(0) // Reset to first image when changing color
  }

  // Produtos relacionados
  const relatedProducts = [
    {
      id: "1",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 100,
      discountPercentage: 30,
    },
    {
      id: "2",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 100,
      discountPercentage: 30,
    },
    {
      id: "3",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 100,
    },
    {
      id: "4",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 100,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex text-sm text-gray-600 overflow-x-auto">
            <Link href="/" className="hover:text-gray-900 cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-gray-900 cursor-pointer whitespace-nowrap">
              Produtos
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products/tenis" className="hover:text-gray-900 cursor-pointer whitespace-nowrap">
              Tênis
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products/tenis/nike" className="hover:text-gray-900 cursor-pointer whitespace-nowrap">
              Nike
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 whitespace-nowrap">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 lg:py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12 lg:mb-16">
          {/* Product Images */}
          <div className="space-y-3 lg:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg overflow-hidden">
              <button
                onClick={prevImage}
                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 lg:p-2 shadow-lg z-10 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </button>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={currentImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - ${currentColor.name}`}
                  fill
                  className="object-contain p-4 lg:p-8 transition-all duration-500 ease-in-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <button
                onClick={nextImage}
                className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 lg:p-2 shadow-lg z-10 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 lg:gap-3 overflow-x-auto pb-2 p-2">
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectThumbnail(index)}
                  className={`relative w-16 h-16 lg:w-20 lg:h-20 border-2 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                    index === currentImageIndex ? "border-primary scale-105" : "border-gray-200 hover:border-gray-300"
                  } ${thumbnailBackgrounds[index] || "bg-gray-100"}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - imagem ${index + 1}`}
                    fill
                    className="object-contain p-1.5 lg:p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">{product.name}</h1>
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3 lg:mb-4">
                <span>{product.code}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 lg:mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 lg:w-4 lg:h-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="bg-yellow-400 text-black px-1.5 lg:px-2 py-0.5 lg:py-1 rounded text-xs lg:text-sm font-medium">
                  {product.rating}
                </span>
                <span className="text-gray-600 text-xs lg:text-sm">({product.reviews} avaliações)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                  R$ {product.currentPrice.toFixed(2).replace(".", ",")}
                </span>
                {product.originalPrice > product.currentPrice && (
                  <span className="text-base lg:text-lg text-gray-400 line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Descrição do produto</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tamanho</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer ${
                      size === selectedSize
                        ? "bg-primary text-white border-primary; scale-105"
                        : "bg-white text-gray-900 border-gray-300 hover:border-gray-400 hover:scale-105"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Cor</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => selectColor(index)}
                    className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                      index === selectedColorIndex
                        ? "border-primary scale-110 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Cor ${color.name}`}
                    title={color.name}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Cor selecionada: <span className="font-medium">{currentColor.name}</span>
              </p>
            </div>

            {/* Selected Options Summary - Hidden on mobile */}
            <div className="hidden lg:block bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Opções selecionadas:</h4>
              <div className="flex gap-4 text-sm text-gray-600">
                <span>
                  Tamanho: <strong>{selectedSize}</strong>
                </span>
                <span>
                  Cor: <strong>{currentColor.name}</strong>
                </span>
              </div>
            </div>

            {/* Buy Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 lg:py-4 px-6 rounded-lg transition-all duration-200 text-base lg:text-lg hover:scale-105 active:scale-95 cursor-pointer">
              COMPRAR
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Produtos Relacionados</h2>
            <Link
              href="/products"
              className="text-primary hover:text-primary font-medium flex items-center gap-1 cursor-pointer"
            >
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                id={relatedProduct.id}
                image={relatedProduct.image}
                category={relatedProduct.category}
                title={relatedProduct.title}
                originalPrice={relatedProduct.originalPrice}
                currentPrice={relatedProduct.currentPrice}
                discountPercentage={relatedProduct.discountPercentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
