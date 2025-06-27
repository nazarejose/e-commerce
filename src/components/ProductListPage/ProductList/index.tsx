"use client" 

import { ProductCard } from "@/components/product-card";
import type { Product } from "@/types/ProductFilterProps"; 

type ProductCardData = Pick<Product,
  | 'id'
  | 'image'
  | 'category'
  | 'title'
  | 'originalPrice'
  | 'currentPrice'
  | 'discountPercentage'
>;

interface ProductListProps {
  products: ProductCardData[];
}


export default function ProductList({ products }: ProductListProps) {
  
  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-600">Nenhum produto encontrado com os filtros selecionados.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      {products.map((product) => (
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
  )
}