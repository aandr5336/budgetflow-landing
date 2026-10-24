# BudgetFlow Landing (Payload + TypeScript)

Рекламний лендінг для вебзастосунку **BudgetFlow** (практика, група ІТ-22).  
Мета сторінки — пояснити продукт і спрямувати відвідувача в основний Django-сайт.

Основний застосунок: https://github.com/aandr5336/finance_helper_django

## Структура

| Папка | Призначення |
|-------|-------------|
| `cms/` | Payload CMS 3 (колекції, блоки, API `/api/common`, `/api/page`) |
| `frontend/` | Vite + TypeScript (стани loading / error / ready, рендер блоків) |
| `backend/data/` | Seed JSON для контенту BudgetFlow |

## Швидкий старт (лише лендінг, без CMS)

Підходить для демонстрації та скрінів:

```powershell
cd frontend
npm install
npm run dev
```

Відкрий http://127.0.0.1:5173/  
Якщо CMS не запущена, фронт підхопить дані з `public/seed/`.

Кнопка «Відкрити BudgetFlow» веде на `http://127.0.0.1:8000/` (або `VITE_APP_URL`).

## Запуск з Payload CMS

1. У `cms/` скопіюй `.env.example` → `.env`, вкажи `DATABASE_URL` (Postgres / Neon) і `PAYLOAD_SECRET`.
2. `pnpm install` і `pnpm dev` у `cms/` (Node 20+).
3. У адмінці створи сторінку з блоками Hero / Features / Testimonials / Contacts.
4. У `frontend/.env` вкажи `VITE_API_URL=http://localhost:3000`.

## Змінні оточення

Див. `.env.example` у корені та `cms/.env.example`.

## Деплой

`vercel.json` залишено для фронту/CMS за потреби. Для звіту достатньо локального запуску + скріни адмінки та публічної сторінки.
