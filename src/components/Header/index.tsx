"use client";
import React, { useState } from "react";
import LogoDC from "@/assets/logo-header.svg";
import Cart from "@/assets/mini-cart.svg";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  const currentRoute = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex flex-col w-full justify-between">
        <div className="flex w-full h-[196px] items-center gap-3.5 justify-self-center-safe">
          <Image
            src={LogoDC}
            className="w-[253px] h-[44px]"
            alt="Digital College"
          />
          <div className="flex w-full space-x-2 bg-light-gray-3 rounded-lg pl-6 pr-4 flex-1">
            <Input
              type="email"
              placeholder="Pesquisar produto..."
              className="w-full h-14 border-0 placeholder:text-light-gray-2 focus-visible:ring-0 flex"
            />
            <button type="submit" className="pr-4">
              <Search className="text-light-gray-2" />
            </button>
          </div>
          <div className="items-center">
            <Link
              href="#register"
              className="underline pl-[48px] pr-[30px] whitespace-nowrap"
            >
              Cadastre-se
            </Link>
            <Button className="bg-primary antialiased text-smooth-white w-28 h-10 mr-[70px]">
              Entrar
            </Button>
          </div>

          <div className="relative w-[33px] h-[29px]">
            <Image
              src={Cart}
              width={24}
              height={24}
              alt="Cart"
              className="rounded-lg"
            />
            <div className="absolute -top-1.5 -right-0.5 left w-[17px] h-[17px] bg-primary rounded-full border-0 text-center text-smooth-white text-xs font-bold">
              2
            </div>
          </div>
        </div>
        <div className="flex gap-8 ease-in-out">
          <Link
            href={"/"}
            className={`${
              currentRoute === "/" ? "border-b-2 font-bold text-primary" : ""
            } font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className={`${
              currentRoute === "/products"
                ? "border-b-2 font-bold text-primary"
                : ""
            } font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
          >
            Produtos
          </Link>
          <Link
            href={"/categories"}
            className={`${
              currentRoute === "/categories"
                ? "border-b-2 font-bold text-primary"
                : ""
            } font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
          >
            Categorias
          </Link>
          <Link
            href={"/my-orders"}
            className={`${
              currentRoute === "/my-orders"
                ? "border-b-2 font-bold text-primary"
                : ""
            } font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
          >
            Meus pedidos
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col lg:hidden">
        <div className="flex w-full justify-between items-center py-5">
          <button
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
            className="pr-16"
          >
            {isOpenMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Image
            src={LogoDC}
            className="w-[100px] h-[24px]"
            alt="Digital College"
          />
          <div className="flex flex-row gap-[13px] pl-8">
            <button
              type="submit"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search
                className={`w-5 h-5 transition-colors ${
                  isSearchOpen ? "text-primary" : "text-light-gray-2"
                }`}
              />
            </button>
            <div className="relative top-1 w-[33px] h-[29px]">
              <Image
                src={Cart}
                width={20}
                height={20}
                alt="Cart"
                className=""
              />
              <div className="absolute -top-1.5 right-0.5 left w-[15px] h-[15px] bg-primary rounded-full border-0 text-center text-smooth-white text-[10px] font-bold">
                2
              </div>
            </div>
          </div>

          {isOpenMenu && (
            <>
              <div
                className="fixed top-[69px] left-0 right-0 bottom-0 bg-black opacity-25 z-40"
                onClick={() => setIsOpenMenu(false)}
              />

              <div className="fixed top-[69px] left-0 h-[calc(100vh-69px)] w-3/4 bg-white z-50 p-6 flex flex-col justify-between overflow-y-auto">
                <div>
                  <p className="text-sm font-bold mb-4 text-zinc-800">
                    Páginas
                  </p>
                  <div className="space-y-4 flex flex-col ease-in-out">
                    <Link
                      href={"/"}
                      className={`${
                        currentRoute === "/"
                          ? "border-b-2 font-bold text-primary"
                          : ""
                      } w-fit font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
                    >
                      Home
                    </Link>
                    <Link
                      href={"/products"}
                      className={`${
                        currentRoute === "/products"
                          ? "border-b-2 font-bold text-primary"
                          : ""
                      } w-fit font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
                    >
                      Produtos
                    </Link>
                    <Link
                      href={"/categories"}
                      className={`${
                        currentRoute === "/categories"
                          ? "border-b-2 font-bold text-primary"
                          : ""
                      } w-fit font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
                    >
                      Categorias
                    </Link>
                    <Link
                      href={"/my-orders"}
                      className={`${
                        currentRoute === "/my-orders"
                          ? "border-b-2 font-bold text-primary"
                          : ""
                      } w-fit font-normal hover:border-b-2 hover:font-bold hover:text-primary duration-100 ease-out`}
                    >
                      Meus pedidos
                    </Link>
                  </div>
                </div>

                <div className="pt-6">
                  <hr className="mb-5 opacity-25" />
                  <button className="w-full bg-primary text-white py-2 rounded-lg text-center font-semibold">
                    Entrar
                  </button>
                  <p className="mt-2 text-center text-sm text-zinc-600 underline pt-[17px]">
                    Cadastre-se
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {isSearchOpen && (
          <Input
            type="email"
            placeholder="Pesquisar produto..."
            className="w-full h-14 placeholder:text-light-gray-2 border-0 focus-visible:ring-0 mt-2 p-2 rounded-lg bg-gray-100 text-sm outline-none transition-all duration-200"
          />
        )}
      </div>
    </>
  );
}
