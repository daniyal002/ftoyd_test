# Match Tracker

Веб-приложение для отслеживания матчей в реальном времени.

## Технологии

- [Next.js 14](https://nextjs.org/) - React фреймворк
- [TypeScript](https://www.typescriptlang.org/) - Типизированный JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Утилитарный CSS фреймворк
- [React Query](https://tanstack.com/query/latest) - Управление серверным состоянием
- [Context API](https://react.dev/learn/passing-data-deeply-with-context) - Управление состоянием приложения

## Возможности

- Просмотр списка текущих матчей
- Фильтрация матчей по статусу (Live, Finished, Match preparing)
- Автоматическое обновление данных
- Адаптивный дизайн для всех устройств

## Начало работы

1. Клонируйте репозиторий:
```bash
git clone [https://github.com/daniyal002/ftoyd_test]
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
# или
pnpm install
```

3. Запустите сервер разработки:
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
src/
├── api/              # interseptor
├── app/              # Роуты и страницы Next.js
├── components/       # React компоненты
│   ├── Card/        # Компоненты карточек матчей
│   ├── Header/      # Компоненты заголовка
│   └── Team/        # Компоненты команды для карточки матча
│   └── UI/          # Переиспользуемые UI компоненты
├── context/         # React контексты
├── hook/            # Кастомные хуки
└── interface/       # TypeScript интерфейсы
└── service/         # Axios запросы
```

## API

Приложение использует следующие эндпоинты:

- `GET /api/matches` - Получение списка всех матчей

## Скрипты

- `npm run dev` - Запуск сервера разработки
- `npm run build` - Сборка проекта
- `npm run start` - Запуск собранного проекта
- `npm run lint` - Проверка кода линтером

## Лицензия

MIT

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
