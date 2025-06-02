"use client";

import Image from "next/image";

interface CollectionItem {
  id: string;
  name: string;
  iconPath: string;
}

const collections: CollectionItem[] = [
  {
    id: "camisetas",
    name: "Camisetas",
    iconPath: "/collection/shirt.svg",
  },
  {
    id: "calcas",
    name: "Calças",
    iconPath: "/collection/pants.svg",
  },
  {
    id: "bones",
    name: "Bonés",
    iconPath: "/collection/bone.svg",
  },
  {
    id: "headphones",
    name: "Headphones",
    iconPath: "/collection/headphones.svg",
  },
  {
    id: "tenis",
    name: "Tênis",
    iconPath: "/collection/tenis.svg",
  },
];

export default function FeaturedCollections() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Coleções em destaque
      </h2>

      <div className="flex justify-center items-center gap-8 flex-wrap">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col items-center space-y-2 cursor-pointer group"
          >
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center transition-all duration-300 ">
              <div className="w-16 h-16 relative transition-all duration-300 group-hover:brightness-0 group-hover:saturate-100 group-hover:contrast-200 group-hover:hue-rotate-[320deg]">
                <Image
                  src={collection.iconPath || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <span className="text-sm font-medium text-dark-gray-2">
              {collection.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .group:hover .w-16 {
          filter: brightness(0) saturate(100%) invert(18%) sepia(99%)
            saturate(3537%) hue-rotate(327deg) brightness(86%) contrast(100%);
        }
      `}</style>
    </div>
  );
}
