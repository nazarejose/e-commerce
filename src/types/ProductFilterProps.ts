export interface Product {
  id: string
  name: string
  title: string
  code: string
  rating: number
  reviews: number
  currentPrice: number
  originalPrice: number
  discountPercentage?: number
  image: string
  category: string
  brand: string
  gender: string
  state: string
  description: string
  sizes: string[]
  colors: {
    name: string
    value: string
    images: string[]
  }[]
}
