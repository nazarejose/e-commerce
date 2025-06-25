import { ProductCard } from "@/components/product-card"

export default function TrendingProducts() {

  const featuredProducts = [
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
      image: "/nike-shoe.png",
      category: "Tênis",
      title: "Air Jordan - Masculino",
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
      currentPrice: 200, // Sem desconto
    },
    {
      id: "4",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 200, // Sem desconto
    },
    {
      id: "5",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 100,
      discountPercentage: 30,
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
    {
      id: "7",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 200, // Sem desconto
    },
    {
      id: "8",
      image: "/tenisproduct.png",
      category: "Tênis",
      title: "K-Swiss V8 - Masculino",
      originalPrice: 200,
      currentPrice: 200, // Sem desconto
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Produtos em alta</h2>
          <button className="text-primary hover:text-shadow-primary text-sm font-medium">Ver todos →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              originalPrice={product.originalPrice}
              currentPrice={product.currentPrice}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
