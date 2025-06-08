## 1 - Estrutura do Projeto

```
e-commerce/
├── .next/
├── node_modules/
├── public/                ← Arquivos estáticos públicos (imagens, fontes, etc.)
├── src/
│   ├── app/               ← Diretório principal do App Router
│   │   ├── layout.tsx     ← Layout principal que envolve todas as rotas
│   │   ├── page.tsx       ← Página inicial (Home)
│   │   ├── globals.css    ← Estilos globais da aplicação
│   │   └── products/
│   │       ├── page.tsx   ← Página de listagem de todos os produtos
│   │       └── [id]/
│   │           └── page.tsx ← Página dinâmica para detalhes de um produto
│   │
│   ├── assets/            ← Ativos estáticos internos (imagens de componentes, etc.)
│   │
│   ├── components/        ← Componentes React reutilizáveis
│   │   ├── Home/          ← Componentes específicos da página Home
│   │   │   ├── Carrousel/
│   │   │   ├── Collection/
│   │   │   ├── OfferSection/
│   │   │   └── TrendingProducts/
│   │   ├── Layout/        ← Componentes estruturais (Header, Footer)
│   │   │   ├── Footer/
│   │   │   └── Header/
│   │   ├── ui/            ← Componentes de UI genéricos (botões, inputs, etc.)
│   │   └── product-card.tsx ← Componente de Card de Produto, usado em várias páginas
│   │
│   ├── lib/               ← Funções utilitárias, hooks, helpers, etc.
│   │
│   └── types/             ← Definições de tipos e interfaces TypeScript
│       └── ProductFilterProps.ts
│
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
