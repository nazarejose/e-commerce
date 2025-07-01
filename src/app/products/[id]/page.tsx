import { notFound } from 'next/navigation';
import { ProductDetails } from "@/app/products/product-details";
import { mockProducts } from "@/lib/mocks/products";
import type { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProductById(id: string) {
 
  const product = mockProducts.find((p) => p.id === id);
  return Promise.resolve(product);
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: `${product.name} | Digital Store`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    
    const { id } = await params; 

    const product = await getProductById(id);
    
    if (!product) {
        notFound();
    }
    
    return <ProductDetails product={product} />;
}