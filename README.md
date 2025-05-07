## 1 - Estrutura do Projeto

```
e-commerce/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Layout principal (envolve todas as rotas)
│   │   ├── page.tsx            ← Página inicial (home)
│   │   ├── globals.css         ← Estilos globais
│   │   └── product/
│   │       ├── page.tsx        ← Página de listagem de produtos
│   │       └── [id]/
│   │           └── page.tsx    ← Página de detalhes do produto
│   ├── components/
│   │   ├── Header/
│   │   │   └── index.tsx
│   │   ├── Footer/
│   │   │   └── index.tsx
│   │   ├── Logo/
│   │   │   └── index.tsx
│   │   ├── ProductCard/
│   │   │   └── index.tsx
│   │   ├── ProductListing/
│   │   │   └── index.tsx
│   │   ├── ProductOptions/
│   │   │   └── index.tsx
│   │   ├── BuyBox/
│   │   │   └── index.tsx
│   │   ├── Section/
│   │   │   └── index.tsx
│   │   ├── FilterGroup/
│   │   │   └── index.tsx
│   │   └── ProductDetails/
│   │       └── index.tsx
│   ├── types/
│   │   └── productFilterProps.ts          ← Tipagens e enums (ProductProps, etc.)
├── tsconfig.json
├── next.config.ts
├── postcss.config.js
├── tailwind.config.ts (opcional)
├── package.json
└── README.md
```
