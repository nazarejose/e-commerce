# Front-end de E-commerce com Next.js

Este é o repositório do projeto de front-end para de uma moderna loja de e-commerce. A aplicação foi desenvolvida utilizando as tecnologias mais recentes do ecossistema React, como Next.js e TypeScript, e estilizada com Tailwind CSS para uma interface limpa e responsiva.

O projeto simula a experiência de um usuário navegando por uma loja virtual, incluindo uma página inicial com produtos em destaque, uma página de listagem de produtos com um sistema de filtros avançado e uma página de detalhes do produto.

## ✨ Funcionalidades

- **Página Inicial Dinâmica:** Seções para coleções em destaque, ofertas e produtos em alta.
- **Página de Listagem de Produtos (PLP):** Grade de produtos com filtros e ordenação.
- **Sistema de Filtros Responsivo:**
    - Filtro por Marca, Categoria, Gênero (seleção múltipla) e Estado (seleção única).
    - Sidebar de filtros para desktop.
    - Menu "gaveta" (drawer) animado para uma experiência otimizada em dispositivos móveis.
- **Página de Detalhes do Produto (PDP):**
    - Galeria de imagens interativa com miniaturas (thumbnails).
    - Seleção de cor e tamanho.
    - Descrição detalhada, preço e avaliações.
- **Design Totalmente Responsivo:** Interface adaptada para uma navegação fluida em desktops, tablets e celulares.

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para produção.
- **[React](https://react.dev/)** - Biblioteca para construir interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first para estilização rápida.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones.

## 📂 Estrutura do Projeto

O projeto utiliza a estrutura do App Router do Next.js, organizando o código de forma modular e intuitiva.

```
/
├── public/
│   ├── adidas.png
│   ├── asics.png
│   ├── ... (outras imagens)
│
├── src/
│   ├── app/
│   │   ├── products/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx      # Página de Detalhes do Produto (PDP)
│   │   │   ├── page.tsx          # Página de Listagem de Produtos (PLP)
│   │   │   └── product-details.tsx # Componente de cliente para detalhes
│   │   ├── globals.css
│   │   └── layout.tsx            # Layout principal da aplicação
│   │
│   ├── components/
│   │   ├── Home/                 # Componentes específicos da Home
│   │   ├── Layout/               # Componentes de layout (Header, Footer)
│   │   ├── ProductListPage/      # Componentes da PLP (FilterGroup, ProductList, etc.)
│   │   └── ui/                   # Componentes de UI genéricos (ProductCard)
│   │
│   ├── lib/
│   │   └── mocks/
│   │       └── products.ts       # Dados simulados dos produtos
│   │
│   └── types/
│       └── ProductFilterProps.ts # Tipagens TypeScript do projeto
│
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.js
└── README.md
```

## 🚀 Começando

Siga as instruções abaixo para executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/nazarejose/e-commerce](https://github.com/nazarejose/e-commerce)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd e-commerce
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    *ou, se você usa yarn:*
    ```bash
    yarn dev
    ```

5.  **Abra no navegador:**
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em funcionamento.

## 🏁 Conclusão

Este projeto foi desenvolvido como parte da formação da **Geração Tech 2.0**, em parceria com a **Digital College**. Agradeço à instituição pelo suporte, conteúdo de qualidade e pela oportunidade de aprimorar meus conhecimentos em desenvolvimento front-end. O template e o mockup utilizados neste projeto foram gentilmente fornecidos por ambas as instituições como parte do material de apoio da formação.