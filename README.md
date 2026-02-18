# Portfólio Profissional

Site de portfólio em React (Vite), responsivo e com animações, focado em contratação CLT/PJ e captação de clientes freelance.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build para produção

```bash
npm run deploy
npm run build
npm run preview
```

A pasta `dist` conterá os arquivos estáticos para deploy (Vercel, Netlify, GitHub Pages, etc.).

## Personalização

Edite os arquivos em `src/data/`:

| Arquivo | Conteúdo |
|---------|----------|
| `profile.js` | Nome, título, bio, texto "Sobre", número WhatsApp (formato `5511999999999`), caminho da foto |
| `projects.js` | Nome, descrição, tecnologias, link GitHub e demo de cada projeto |
| `services.js` | Serviços oferecidos (título, descrição, ícone) |
| `technologies.js` | Tecnologias com ícone e cor |
| `socials.js` | Links do Instagram, LinkedIn e GitHub |

### Foto (avatar)

Coloque sua foto em `public/avatar.jpg`. Se não existir, será exibida a primeira letra do seu nome.

### WhatsApp

O número em `profile.js` deve ser apenas números: DDI + DDD + número (ex: `5511999999999`).

### SEO

Altere em `index.html`: título, `meta description`, `meta keywords`, `og:title` e `og:description` conforme seu nome e descrição.

## Tecnologias

- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion
- react-icons

## Estrutura

- `src/components/` – Navbar, Hero, About, Technologies, Projects, Services, Contact, Footer, WhatsAppButton
- `src/data/` – Dados editáveis (perfil, projetos, serviços, tecnologias, redes sociais)
- Uma única página com rolagem suave; navbar fixa e botão flutuante do WhatsApp
