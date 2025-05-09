import Image from "next/image";
import React from "react";
import { FooterLogo, FacebookLogo, InstagramLogo, TwitterLogo } from "@/assets";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="overflow-hidden -mx-[calc(50vw-50%)] font-normal flex flex-col gap-y-10 md:flex-row min-h-[805px] md:min-h-[450px] md:flex-wrap px-5 lg:px-[100px] pt-[50px] md:pt-[72px] pb-[22px] md:pb-[46px] bg-dark-gray text-smooth-white">
      
      <div className="flex flex-wrap gap-y-6 w-full md:w-1/3 2xl:flex-col 2xl:justify-center">
        <Image src={FooterLogo} className="w-44 h-8 2xl:mb-7" alt="Digital College" />
        <p className="flex flex-wrap w-[305px] md:w-[235px] lg:w-[305px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex flex-row gap-x-8">
          <Link href="https://www.facebook.com/" target="_blank">
            <Image src={FacebookLogo} alt="Facebook" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <Image src={InstagramLogo} alt="Instagram" />
          </Link>
          <Link href="https://x.com/" target="_blank">
            <Image src={TwitterLogo} alt="Twitter" />
          </Link>
        </div>
      </div>

      <div className="flex flex-row md:w-1/3 2xl:flex-col 2xl:justify-center">
        <div className="flex flex-row gap-x-8">
          <div>
            <h1 className="font-semibold mb-7 2xl:mt-7">Informação</h1>
            <ul className="space-y-2">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold mb-7 2xl:mt-7">Categorias</h1>
            <ul className="space-y-2">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-[14px] md:w-1/3 2xl:flex-col 2xl:justify-center gap-0">
        <h1 className="font-semibold mb-4 2xl:mb-7">Contato</h1>
        <div className="flex flex-col gap-10">
          <p className="m-0 text-justify flex flex-wrap w-[281px] md:w-[231px]">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-y-6 w-full md:mt-10">
        <hr className="border text-light-gray w-full" />
        <p>@ 2022 Digital College</p>
      </div>
    </div>
  );
}
