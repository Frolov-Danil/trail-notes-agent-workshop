# Trail Notes · Agent Workshop

Навчальний React Native + Expo SDK 57 + TypeScript проєкт на два екрани:
бібліотека матеріалів і стаття. Редизайн та постійний кеш залишені як завдання.

Публічний GitHub: https://github.com/Frolov-Danil/trail-notes-agent-workshop

**Повний план для ведучого й учасника:** [workshop/FULL-PLAN.md](workshop/FULL-PLAN.md).
Старт заняття — тег `workshop-v1`. Попередні теги збережено як історію підготовки.

## Підготовка

Node.js 22.13.0 (`.nvmrc`), npm, Python 3, Git.
Для iOS — macOS, Xcode та iOS Simulator; для Android — Android Studio з емулятором.
Основну перевірку учасник виконує на знайомій платформі.
Запуск через Expo Go для SDK 57: https://expo.dev/go.
Ключі API та обліковий запис Expo для цієї вправи не потрібні.

```sh
git clone https://github.com/Frolov-Danil/trail-notes-agent-workshop.git
cd trail-notes-agent-workshop
npm ci
npm run api
```

В іншому терміналі з кореня проєкту:

```sh
npm start
```

У терміналі Expo: `i` — iOS Simulator, `a` — Android Emulator, `w` — вебперегляд.
Мобільну поведінку перевіряти у симуляторі/емуляторі.

## Локальний API

Python віддає чотири матеріали з повним текстом і `Cache-Control: no-store`.
Адреса вибирається автоматично: iOS/web → `127.0.0.1:8765`, Android Emulator → `10.0.2.2:8765`.
Для перевірки відсутності мережі зупинити Python через Ctrl+C, залишивши Metro
ввімкненим. У застосунку натиснути «Обновить», потім після запуску API — «Повторить».
Назви кнопок відповідають поточному стартовому інтерфейсу.

Для фізичного телефона скопіювати `.env.example` в `.env`, задати
`EXPO_PUBLIC_API_URL=http://<LAN-IP-комп’ютера>:8765` та перезапустити Metro.
API запустити командою `python3 server/serve.py --host 0.0.0.0`.
Телефон і комп’ютер мають бути в одній мережі. За замовчуванням API доступний
лише через loopback; для першої вправи рекомендуємо симулятор/емулятор.

## Дві паралельні задачі

У свіжому локальному клоні:

```sh
git worktree add ../trailnotes-redesign
git worktree add ../trailnotes-offline
```

Git автоматично створить локальні гілки; персональні назви не потрібні.
У кожному worktree виконати `npm ci`, відкрити окремий чат агента й передати
[задачу A](workshop/TASK-A-REDESIGN.md) або [задачу B](workshop/TASK-B-OFFLINE.md).
Зміни й результат об’єднання залишаються локально, без push або PR.

Metro: порт 8081 для редизайну, 8082 для офлайн-версії, 8083 для об’єднаного результату:

```sh
npx expo start --port 8081
```

Замінити порт відповідно до робочої папки. Один API з основного клону можна
використовувати для обох версій. Для незалежної перевірки B — окремий API на
8766 та EXPO_PUBLIC_API_URL у її `.env` з правильною адресою платформи.
Worktree ізолює файли, але не сервери, порти й дані симулятора.

## Перевірки

```sh
npm run typecheck
npm test
npx expo install --check
npx expo export --platform ios --platform android --output-dir dist
```

Експорт перевіряє bundling, але не замінює запуск на пристрої.
[Виконані перевірки](workshop/VERIFIED.md) · [Обмеження залежностей](workshop/DEPENDENCIES.md).

Якщо macOS прив’язала Metro до IPv6, а Expo Go звертається до 127.0.0.1:
`NODE_OPTIONS=--dns-result-order=ipv4first npx expo start --localhost`.

## Макети

[Редаговані екрани Figma](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-2).
Посилання на окремі вузли вже додано до завдань.
[Опис і структура макетів](design/README.md) · [Вимоги до оформлення](design/SPEC.md).
