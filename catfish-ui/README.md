# catfish-ui

Scaffold mínimo para a interface Catfish (frontend React + backend Express proxy).

Estrutura:
- frontend/: Vite + React app
- server/: Node + Express proxy para a API Catfish

Variáveis de ambiente (veja `.env.example`):
- CATFISH_API_BASE_URL: URL base da API Catfish (ex.: https://api.catfish.example)
- CATFISH_API_TOKEN: Token Bearer para autenticação (opcional — o proxy adiciona se presente)
- FRONTEND_PORT: porta do frontend (padrão 3000)
- SERVER_PORT: porta do servidor proxy (padrão 4000)

Como rodar (desenvolvimento):

1. Backend
   cd catfish-ui/server
   npm install
   npm run dev

2. Frontend
   cd catfish-ui/frontend
   npm install
   npm run dev

Observações:
- Este é um scaffold inicial. Tailwind não foi configurado automaticamente; se desejar, diga que eu adiciono a configuração.
- Se quiser que eu crie um Pull Request automaticamente, peça separadamente.
