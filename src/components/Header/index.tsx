'use client';
import React from 'react'
import LogoDC from "@/assets/logo-header.svg";
import Cart from "@/assets/mini-cart.svg";
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';


export default function Header() {

  const currentRoute = usePathname()
  return (
    <div className='flex flex-col w-full'>
        <div className='flex w-full h-[196px] items-center gap-3.5 justify-self-center-safe'>
            <Image src={LogoDC} width={253} height={44} alt='Digital College'/>
            <div className="flex w-full space-x-2 bg-light-gray-3 rounded-lg pl-6 pr-4 flex-1">
                <Input type="email" placeholder="Pesquisar produto..." className='w-full h-14 border-0 placeholder:text-light-gray-2 focus-visible:ring-0'/>
                <button type="submit" className='pr-4'><Search className='text-light-gray-2'/></button>
            </div>
            <Link href="#register" className='underline pl-[48px] pr-[30px]'>Cadastre-se</Link>
            <Button className='bg-primary antialiased text-smooth-white w-28 h-10'>Entrar</Button>
            <div className='relative w-[33px] h-[29px]'>
              <Image src={Cart} width={24} height={24} alt='Cart' className='rounded-lg ml-[70px]'/>
              <div className='absolute -top-1.5 -right-17.5 left w-[17px] h-[17px] bg-primary rounded-full border-0 text-center text-smooth-white text-xs font-bold'>2</div>
            </div>
        </div>  
        <div className='flex gap-8 ease-in-out'>
            <Link href={"/"} className={`${ currentRoute === "/" ? "border-b-2 font-bold text-primary" : ""} font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}>Home</Link>
            <Link href={"/products"} className={`${ currentRoute === "/products" ? "border-b-2 font-bold text-primary" : ""} font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}>Produtos</Link>
            <Link href={"/categories"} className={`${ currentRoute === "/categories" ? "border-b-2 font-bold text-primary" : ""} font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}>Categorias</Link>
            <Link href={"/my-orders"} className={`${ currentRoute === "/my-orders" ? "border-b-2 font-bold text-primary" : ""} font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}>Meus pedidos</Link>
        </div>  
    </div>
  )
}
