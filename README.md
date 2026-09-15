# ENTHEOS — Consulta Rápida de Redução de Danos

Site estático de consulta rápida sobre interações entre substâncias, dosagens,
efeitos e cuidados práticos. Feito para ser publicado com um link simples
(sem domínio próprio) e virar um QR code.

## Estrutura

```
entheos-reducao-de-danos/
├── index.html      → conteúdo e estrutura do site
├── css/
│   └── style.css   → visual, cores do ENTHEOS
├── js/
│   └── script.js   → pequenas interações da tabela
└── README.md        → este arquivo
```

## Como visualizar localmente (antes de publicar)

1. Abra a pasta no VS Code.
2. Instale a extensão **Live Server** (Ritwick Dey).
3. Clique com o botão direito em `index.html` → "Open with Live Server".
4. O site abre no navegador e atualiza sozinho a cada alteração salva.

## Como publicar de graça (sem domínio)

**Opção mais rápida — Netlify Drop:**
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `entheos-reducao-de-danos` inteira para a página.
3. Você recebe uma URL do tipo `nome-aleatorio.netlify.app` — pronta pra virar QR code.
4. (Opcional) Crie uma conta grátis no Netlify para renomear a URL e poder
   atualizar o site depois.

**Opção mais permanente — GitHub Pages:**
1. Crie uma conta grátis em https://github.com
2. Crie um repositório novo chamado `entheos-reducao-de-danos`.
3. No VS Code, na aba "Source Control", conecte o projeto ao repositório
   (`git init`, `git add .`, `git commit -m "site inicial"`, depois publique
   pelo botão "Publish Branch").
4. No GitHub, vá em Settings → Pages → escolha a branch `main` → Save.
5. Em ~1 minuto o site estará em
   `https://SEU-USUARIO.github.io/entheos-reducao-de-danos/`

## Próximos passos sugeridos

- Expandir a seção "Dosagens e Efeitos" com mais substâncias, se necessário.
- Adicionar um campo de busca/filtro por substância (o `script.js` já tem
  uma base pronta para isso).
- Revisar todo o conteúdo com a equipe do ENTHEOS antes de divulgar o link
  publicamente no festival.
