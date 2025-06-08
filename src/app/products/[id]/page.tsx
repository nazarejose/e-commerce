import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  if (!id) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Produto {id}</h1>
        <p className="text-gray-600">Esta é a página de detalhes do produto com ID: {id}</p>
        <p className="text-sm text-gray-500 mt-4">
          Local com os detalhes completos do produto, galeria de imagens, descrição, especificações, botão
          de compra, etc.
        </p>
      </div>
    </div>
  )
}
