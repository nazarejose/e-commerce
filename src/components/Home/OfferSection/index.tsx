import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function OfferSection() {
  return (
    <div className="bg-white rounded-2xl mx-auto h-auto py-8 md:py-12 lg:py-16 lg:h-[555px]">
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 md:px-8 lg:px-12">
        <div className="relative 2xl:w-1/2 2xl:mx-auto order-1 lg:order-1">
          <Image
            src="/tenisoffercolection.png"
            alt="Air Jordan edição de colecionador"
            width={543}
            height={300}
            className="w-full max-w-[543px] h-auto object-contain mx-auto"
            priority
          />
          <div className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] xl:w-[466px] xl:h-[466px] rounded-full opacity-40 bg-gradient-to-t from-10% from-[#4400ff1d] via-[#4400ff44] via-55% to-[#4400ff44]" />
        </div>

        <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left pt-10 md:pt-0">
          <div className="space-y-4">
            <p className="text-primary font-medium text-sm uppercase tracking-wide">Oferta especial</p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark-gray-2 leading-tight max-w-full lg:max-w-[500px]">
              Air Jordan edição de colecionador
            </h2>

            <p className="text-dark-gray-2 leading-relaxed font-normal text-sm sm:text-base max-w-full lg:max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
          </div>

          <Button className="bg-primary hover:bg-primary text-light-gray-3 w-auto lg:w-52 px-8 py-3 rounded-lg font-bold transition-colors">
            Ver Oferta
          </Button>
        </div>
      </div>
    </div>
  )
}
