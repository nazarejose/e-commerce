import { notFound } from 'next/navigation'; 
import { ProductDetails } from "@/app/products/product-details";
import { mockProducts } from "@/lib/mocks/products";

interface ProductPageProps {
    params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
   
    const { id } = await params; 

    const product = mockProducts.find((p) => p.id === id);
    
    if (!product) {
        notFound();
    }
    
    return <ProductDetails product={product} />;
}