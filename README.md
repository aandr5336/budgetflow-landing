# Finance Helper — лендінг (Payload + TypeScript)

Візитка для **того самого** вебзастосунку, що в розділі 1 звіту:

**тема:** система автоматизації процесів бюджетування та аналізу ефективності витрат  
**основний код:** https://github.com/aandr5336/finance_helper_django  
**бренд у UI:** Finance Helper  

Цей репозиторій = розділ 2 (JS/TS + Payload): переконує відкрити основний Django-сайт.

## Як пов’язано

| Частина звіту | Що це | Репозиторій |
|---------------|--------|-------------|
| Розділ 1 | Django + MySQL (облік, бюджети, цілі) | `finance_helper_django` |
| Розділ 2 | Лендінг на Payload + Vite/TS | цей репо |
| Кнопка на лендінгу | веде на `http://127.0.0.1:8000/` | той самий Django |

## Структура

| Папка | Призначення |
|-------|-------------|
| `cms/` | Payload CMS (сторінки, блоки, API) |
| `frontend/` | Vite + TypeScript (стани loading / error / ready) |
| `backend/data/` | Текст лендінгу про Finance Helper |

## Запуск лендінгу (без CMS)

```powershell
cd frontend
npm install
npm run dev
```

Відкрий адресу з терміналу (часто http://localhost:5173/).  
Якщо CMS не запущена — підхопиться `public/seed/`.

Паралельно запущений Django (`python manage.py runserver`) потрібен, щоб кнопка «Відкрити Finance Helper» відкрила робочий застосунок.
