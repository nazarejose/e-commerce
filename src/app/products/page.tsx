"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { mockProducts } from "@/lib/mocks/products";
import FilterGroup from "@/components/ProductListPage/FilterGroup";
import ProductList from "@/components/ProductListPage/ProductList";
import MobileFilterDrawer from "@/components/ProductListPage/MobileFilterDrawer";

interface FilterOption {
  text: string;
  value: string;
}

type FiltersState = {
  brand: string[];
  category: string[];
  gender: string[];
  state: string;
};

export default function ProductListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortBy, setSortBy] = useState<string>("");
  const [filters, setFilters] = useState<FiltersState>({
    brand: [],
    category: [],
    gender: [],
    state: "",
  });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...mockProducts];

    const hasActiveFilters =
      filters.brand.length > 0 ||
      filters.category.length > 0 ||
      filters.gender.length > 0 ||
      filters.state !== "";

    if (hasActiveFilters) {
      filtered = mockProducts.filter((product) => {
        const brandMatch =
          filters.brand.length === 0 ||
          filters.brand.includes(product.brand.toLowerCase());
        const categoryMatch =
          filters.category.length === 0 ||
          filters.category.includes(
            product.category.toLowerCase().replace(/ /g, "-")
          );
        const genderMatch =
          filters.gender.length === 0 ||
          filters.gender.includes(product.gender.toLowerCase());
        const stateMatch =
          filters.state === "" || filters.state === product.state.toLowerCase();
        return brandMatch && categoryMatch && genderMatch && stateMatch;
      });
    }

    if (sortBy === "menor-preco") {
      filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortBy === "maior-preco") {
      filtered.sort((a, b) => b.currentPrice - a.currentPrice);
    }

    return filtered;
  }, [sortBy, filters]);

  const brandOptions: FilterOption[] = useMemo(
    () =>
      [...new Set(mockProducts.map((p) => p.brand))].map((brand) => ({
        text: brand,
        value: brand.toLowerCase(),
      })),
    []
  );

  const categoriaOptions: FilterOption[] = useMemo(
    () =>
      [...new Set(mockProducts.map((p) => p.category))].map((category) => ({
        text: category,
        value: category.toLowerCase().replace(/ /g, "-"),
      })),
    []
  );

  const generoOptions: FilterOption[] = useMemo(
    () =>
      [...new Set(mockProducts.map((p) => p.gender))].map((gender) => ({
        text: gender,
        value: gender.toLowerCase(),
      })),
    []
  );

  const estadoOptions: FilterOption[] = [
    { text: "Novo", value: "novo" },
    { text: "Usado", value: "usado" },
  ];

  const handleFilterChange = (
    filterType: keyof FiltersState,
    value: string,
    isChecked?: boolean
  ) => {
    setFilters((prev) => {
      const newFilters = { ...prev };

      if (
        filterType === "brand" ||
        filterType === "category" ||
        filterType === "gender"
      ) {
        const currentValues = prev[filterType];
        if (isChecked) {
          newFilters[filterType] = [...currentValues, value];
        } else {
          newFilters[filterType] = currentValues.filter((v) => v !== value);
        }
      } else {
        newFilters.state = value;
      }
      return newFilters;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Resultados para Tênis</h1>
          <p className="text-sm text-gray-500">
            {filteredAndSortedProducts.length} produtos
          </p>
        </div>

        <div className="flex items-center justify-between mb-6 lg:hidden">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 text-sm"
          >
            <option value="">Ordenar por</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            <Filter className="w-5 h-5" />
            <span>Filtrar</span>
          </button>
        </div>

        <div className="flex gap-8">
          <aside className="w-[308px] flex-shrink-0 hidden lg:block">
            <div className="mb-6">
              <label className="block text-base font-medium text-gray-700 mb-2">
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-[50px] px-4 border border-gray-300 rounded-md focus:ring-2 accent-primary focus:ring-primary focus:border-primary"
              >
                <option value="">Mais Relevantes</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>
            </div>

            <div className="mb-6">
              <h2 className="text-base font-medium text-gray-700 mb-2">
                Filtrar por
              </h2>
              <hr className="border-gray-200" />
            </div>

            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={brandOptions}
              onChange={(value, isChecked) =>
                handleFilterChange("brand", value, isChecked)
              }
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={categoriaOptions}
              onChange={(value, isChecked) =>
                handleFilterChange("category", value, isChecked)
              }
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={generoOptions}
              onChange={(value, isChecked) =>
                handleFilterChange("gender", value, isChecked)
              }
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              options={estadoOptions}
              onChange={(value) => handleFilterChange("state", value)}
            />
          </aside>

          <main className="flex-1">
            <ProductList products={filteredAndSortedProducts} />
          </main>
        </div>
      </div>

      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onFilterChange={handleFilterChange}
        brandOptions={brandOptions}
        categoriaOptions={categoriaOptions}
        generoOptions={generoOptions}
        estadoOptions={estadoOptions}
      />
    </div>
  );
}