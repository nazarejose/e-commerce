import { ProductDetails } from "@/components/product-details"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  // Simulando dados do produto
  const product = {
    id,
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    code: "Casual | Nike | REF:38416711",
    rating: 4.7,
    reviews: 90,
    currentPrice: 219.0,
    originalPrice: 319.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    sizes: ["39", "40", "41", "42", "43"],
    colors: [
      {
        name: "Azul claro",
        value: "#87CEEB",
        images: [
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
        ],
      },
      {
        name: "Vermelho",
        value: "#FF6B6B",
        images: [
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
        ],
      },
      {
        name: "Cinza",
        value: "#6B7280",
        images: [
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
        ],
      },
      {
        name: "Azul escuro",
        value: "#4F46E5",
        images: [
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
          "/tenisproduct.png",
        ],
      },
    ],
    brand: "Nike",
    category: "Tênis",
  }

  return <ProductDetails product={product} />
}
