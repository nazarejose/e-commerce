import PromotionalCards from "./promotional-cards"
import FeaturedCollections from "./featured-collections"
// Dados de exemplo para os cards promocionais
const promotionalCardsData = [
  {
    id: "supreme",
    discount: "30% OFF",
    backgroundImage: "/collection-1.png",
    alt: "Supreme hoodie collection",
  },
  {
    id: "adidas",
    discount: "30% OFF",
    backgroundImage: "/collection-2.png",
    alt: "Adidas sneaker collection",
  },
  {
    id: "beats",
    discount: "30% OFF",
    backgroundImage: "/collection-3.png",
    alt: "Beats headphones collection",
  },
]

export default function Collection() {
  return (
    <main className="min-h-full bg-gray-50">

      <section className="pt-8">
        <PromotionalCards cards={promotionalCardsData} />
      </section>

      <section className="pb-8">
        <FeaturedCollections />
      </section>
    </main>
  )
}
