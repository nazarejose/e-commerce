import React from 'react'

interface FilterOption {
  text: string
  value: string
}

interface FilterGroupProps {
  title: string;
  inputType: 'checkbox' | 'radio'
  options: FilterOption[]
  onChange?: (value: string, isChecked?: boolean) => void 
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, inputType, options, onChange }) => {
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    if (onChange) {
      if (inputType === 'checkbox') {
        onChange(e.target.value, e.target.checked)
      } else {
        onChange(e.target.value);
      }
    }
  }

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type={inputType}
              id={`${inputType}-${option.value}`}
              name={inputType === 'radio' ? title : option.value}
              value={option.value}
              onChange={handleInputChange} 
              className={`h-6 w-6 rounded border-gray-300 accent-primary text-primary focus:ring-primary`}
            />
            <label
              htmlFor={`${inputType}-${option.value}`}
              className="ml-3 text-sm text-gray-600"
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
      <hr className="mt-6 border-gray-200" />
    </div>
  );
};

export default FilterGroup;