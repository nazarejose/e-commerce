import { ProductCard } from "@/components/product-card";
import { mockProducts } from "@/lib/mocks/products";
import Link from "next/link";

export default function TrendingProducts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Produtos em alta</h2>
          <Link href="/products" passHref className="text-primary hover:text-shadow-primary text-sm font-medium">
              Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
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
  );
}
