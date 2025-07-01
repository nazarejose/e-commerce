"use client"

import { X } from 'lucide-react'
import FilterGroup from '@/components/ProductListPage/FilterGroup'

interface FilterOption {
  text: string;
  value: string;
}

type FilterType = 'brand' | 'category' | 'gender' | 'state';

interface MobileFilterDrawerProps {
  isOpen: boolean
  onClose: () => void
  onFilterChange: (filterType: FilterType, value: string, isChecked?: boolean) => void
  brandOptions: FilterOption[]
  categoriaOptions: FilterOption[]
  generoOptions: FilterOption[]
  estadoOptions: FilterOption[]
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  onFilterChange,
  brandOptions,
  categoriaOptions,
  generoOptions,
  estadoOptions,
}: MobileFilterDrawerProps) {
  return (
    <div
      className={`
        fixed inset-0 z-40 lg:hidden
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'bg-black/75 pointer-events-auto' : 'bg-transparent pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div
        className={`
          fixed top-0 left-0 h-full w-full max-w-xs bg-white z-50 
          p-6 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'transform-none' : '-translate-x-full'} 
        `}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Filtrar por</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="space-y-4">
          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={brandOptions}
            onChange={(value, isChecked) => onFilterChange('brand', value, isChecked)}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={categoriaOptions}
            onChange={(value, isChecked) => onFilterChange('category', value, isChecked)}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={generoOptions}
            onChange={(value, isChecked) => onFilterChange('gender', value, isChecked)}
          />
          <FilterGroup
            title="Estado"
            inputType="radio"
            options={estadoOptions}
            onChange={(value) => onFilterChange('state', value)}
          />
        </div>
      </div>
    </div>
  )
}