<div align="center">

# ✦ Lucas Gomes — Portfolio 3D

**Engenheiro de Software AI-Native · 16 anos · Indaiatuba, SP**

[![Live](https://img.shields.io/badge/Live-gomeslxy.vercel.app-c2a4ff?style=flat-square&logo=vercel&logoColor=white)](https://gomeslxy.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=flat-square&logo=greensock&logoColor=black)](https://gsap.com)

</div>

---

## Visão Geral

Portfolio pessoal com personagem 3D interativo, animações GSAP, smooth scroll e estética minimalista/futurista. Desenvolvido do zero com foco em performance, criatividade visual e código limpo.

```
Dark theme · Accent roxo #c2a4ff · Fonte Geist · WebGL em tempo real
```

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + Vite |
| Linguagem | TypeScript |
| 3D / WebGL | Three.js + React Three Fiber + Drei |
| Animações | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis |
| Roteamento | React Router v6 |
| Ícones | React Icons |
| Deploy | Vercel (Analytics + Speed Insights) |

---

## Funcionalidades

- **Personagem 3D** — modelo `.glb` animado, roda no desktop via WebGL
- **Scroll animado** — GSAP ScrollTrigger em cada seção, com stagger e blur
- **Smooth scroll** — Lenis com easing customizado
- **Cursor customizado** — cursor com data-attributes para interação
- **Seções** — Landing · Sobre · O que faço · Carreira · Projetos · Tech Stack · Contato
- **Responsivo** — mobile-first, foto estática substitui 3D em telas pequenas
- **Copy de email** — botão com feedback visual na seção de contato

---

## Estrutura

```
src/
├── components/
│   ├── About.tsx
│   ├── Career.tsx
│   ├── Character.tsx        # modelo 3D
│   ├── Contact.tsx
│   ├── Cursor.tsx
│   ├── Landing.tsx
│   ├── MainContainer.tsx
│   ├── Navbar.tsx
│   ├── SocialIcons.tsx
│   ├── TechStackNew.tsx
│   ├── WhatIDo.tsx
│   ├── Work.tsx
│   └── styles/             # CSS por componente
├── context/
│   └── LoadingProvider.tsx
├── pages/
│   └── MyWorks.tsx
├── config.ts               # todas as informações do dev aqui
└── index.css               # variáveis globais e reset
public/
├── models/character.glb
└── images/
```

---

## Rodar Localmente

```bash
# clonar
git clone https://github.com/gomeslxy/portfolio-lucas.git
cd portfolio-lucas

# instalar dependências
npm install

# dev server
npm run dev
```

Abre em `http://localhost:5173`

---

## Configuração

Tudo editável em [`src/config.ts`](src/config.ts):

```ts
export const config = {
  developer: { name, fullName, title, description, badges },
  contact: { email, github, linkedin, instagram },
  social: { location },
  projects: [ ... ],
  experiences: [ ... ],
  skills: { ... }
}
```

---

## Deploy

Hospedado na **Vercel** com deploy automático a cada push na branch `main`.

```bash
npm run build
```

---

## Projetos em Destaque

| Projeto | Stack | Link |
|---------|-------|------|
| Bonds Agence | Next.js, OpenAI, TailwindCSS | [bonds-agence.vercel.app](https://bonds-agence.vercel.app) |
| 3D Portfolio | React, Three.js, GSAP | [gomeslxy.vercel.app](https://gomeslxy.vercel.app) |
| Gomes Bot v2 | Python, Discord API, IA | [github.com/gomeslxy](https://github.com/gomeslxy/gomes-bot-v2) |

---

<div align="center">

**Desenvolvido por Lucas Gomes**

[github.com/gomeslxy](https://github.com/gomeslxy) · [linkedin](https://www.linkedin.com/in/lucas-gomes-amaral-8b058b391/) · [la181009@gmail.com](mailto:la181009@gmail.com)

</div>
