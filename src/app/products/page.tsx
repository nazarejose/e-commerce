import Image from "next/image"
import Link from "next/link"
import { ProductCard } from "@/components/product-card"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  // Dados simulados dos produtos
  const products = [
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
    {
      id: "5",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "Tênis Nike Revolution 6 Next Nature Masculino",
      originalPrice: 319,
      currentPrice: 219,
    },
    {
      id: "6",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 100,
      discountPercentage: 30,
    },
  ]

  // Filtrando o produto específico com base no ID
  const product = products.find((p) => p.id === id)

  if (!product) {
    return <div>Produto não encontrado</div>
  }

  // Produtos relacionados
  const relatedProducts = products.filter((p) => p.id !== id)

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/produtos" className="hover:text-gray-700">
          Produtos
        </Link>
        <span className="mx-2">/</span>
        <Link href="/produtos/tenis" className="hover:text-gray-700">
          Tênis
        </Link>
        <span className="mx-2">/</span>
        <Link href="/produtos/tenis/nike" className="hover:text-gray-700">
          Nike
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-[#EEF1FF] rounded-lg overflow-hidden">
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {products.map((imageProduct, index) => (
              <div
                key={index}
                className={`relative w-20 h-20 border-2 rounded-lg overflow-hidden flex-shrink-0 ${index === 0 ? "border-primary" : "border-gray-200"}`}
              >
                <Image
                  src={imageProduct.image || "/placeholder.svg"}
                  alt={`${imageProduct.title} - imagem ${index + 1}`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>{product.category}</span>
            <span>|</span>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={(product.discountPercentage ?? 0) > 0 ? "#FFB800" : "none"}
                    stroke={(product.discountPercentage ?? 0) > 0 ? "#FFB800" : "currentColor"}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2">({relatedProducts.length} produtos relacionados)</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">R$ {product.currentPrice.toFixed(2)}</span>
              {product.originalPrice > product.currentPrice && (
                <span className="text-gray-400 line-through">R$ {product.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Descrição do produto</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Tamanho</h3>
            <div className="flex flex-wrap gap-2">
              {/* Tamanhos simulados */}
              {["38", "40", "41", "42", "43"].map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium ${
                    size === "41"
                      ? "bg-primaryborder-primary text-white border-primary"
                      : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Cor</h3>
            <div className="flex gap-2">
              {/* Cores simuladas */}
              {[
                { name: "Azul claro", value: "#66E0F7" },
                { name: "Vermelho", value: "#FF6B6B" },
                { name: "Cinza", value: "#444444" },
                { name: "Azul escuro", value: "#4A66E0" },
              ].map((color, index) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border-[1px] ${index === 1 ? "border-primary" : "border-transparent"}`}
                  style={{ backgroundColor: color.value }}
                  aria-label={`Cor ${color.name}`}
                />
              ))}
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-md transition-colors">
            COMPRAR
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Produtos Relacionados</h2>
          <Link href="/produtos" className="text-primaryborder-primary hover:text-pink-600 text-sm font-medium">
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  )
}
