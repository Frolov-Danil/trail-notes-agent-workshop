# Trail Notes · Agent Workshop

React Native + Expo SDK 57 + TypeScript. Два экрана: библиотека и статья.
iOS, Android и веб-превью используют общий код. Редизайн и постоянный кеш
намеренно НЕ реализованы: это задания для двух агентов.

## Что установить

Node.js 22.13+ (проверено на 22.13), npm, Python 3.
Для iOS Simulator — macOS, Xcode и установленный Simulator.
Для Android Emulator — Android Studio с созданным и запущенным эмулятором.
Приложение запускается через совместимый Expo Go (SDK 57), без аккаунта Expo,
облачной сборки и API-ключей. При несовместимости Expo Go используйте версию
SDK 57 с https://expo.dev/go либо development build по документации Expo.

## Быстрый запуск

```sh
npm ci
npm run api
```

В другом терминале из этой папки:

```sh
npm start
```

В терминале Expo: `i` — iOS Simulator, `a` — Android Emulator,
`w` — браузерное превью. Для оценки мобильного интерфейса используйте Simulator
или Emulator. Кнопка «Обновить» и pull-to-refresh повторяют запрос.

## Локальный API

Python-сервер отдаёт четыре материала с полным текстом, Cache-Control: no-store.
По умолчанию: iOS/web → http://127.0.0.1:8765; Android Emulator → http://10.0.2.2:8765.
Остановите Python через Ctrl+C и нажмите «Обновить»: появится ошибка.
Запустите сервер и нажмите «Повторить»: данные загрузятся снова.

Физический телефон: скопируйте `.env.example` в `.env`, задайте
`EXPO_PUBLIC_API_URL=http://<LAN-IP-компьютера>:8765`, перезапустите Metro и API:

```sh
python3 server/serve.py --host 0.0.0.0
```

Телефон и компьютер должны быть в одной сети. Сервер не содержит закрытых
данных и привязан к loopback по умолчанию. Для задания без сети останавливайте
именно API, оставляя Metro включённым: Expo Go получает JS от Metro.

## Два worktree

React Native baseline: `workshop-react-native-start`.
Старый тег `workshop-start` сохранён как история исходной SwiftUI-версии.

```sh
git worktree add ../TrailNotes-redesign -b exercise/redesign workshop-react-native-start
git worktree add ../TrailNotes-offline -b exercise/offline workshop-react-native-start
```

В каждом worktree выполнить `npm ci`. Открыть каждый в отдельном чате агента
и передать соответственно `workshop/TASK-A-REDESIGN.md` и `workshop/TASK-B-OFFLINE.md`.
Для редизайна передать ссылки на Frame 01 и 02 в Figma и проверить их чтение через MCP.

Metro каждого worktree должен иметь свой порт:

```sh
# worktree redesign
npx expo start --port 8081
# worktree offline
npx expo start --port 8082
```

Оба могут использовать API основного клона на 8765. Если нужно независимое
отключение серверов, запустите API ветки B на 8766 и задайте EXPO_PUBLIC_API_URL
в её `.env` с подходящим хостом платформы. Для одновременной визуальной проверки
используйте разные устройства/эмуляторы, открывая нужный URL Metro в Expo Go.
Для каждого участника — свежий клон, свои ветки и порты.

## Проверки

```sh
npm run typecheck
npm test
npx expo install --check
npx expo export --platform ios --platform android --output-dir dist
```

Экспорт проверяет bundling, но не заменяет запуск на iOS/Android.
Фактически выполненные проверки: workshop/VERIFIED.md.
Замечания npm audit к транзитивным зависимостям Expo/Metro: workshop/DEPENDENCIES.md.
Сценарий встречи: workshop/BRIEF.md. Слияние: workshop/MERGE-CHECKLIST.md.
Макеты и статус Figma: design/README.md.

Если на macOS `--localhost` привязал Metro к IPv6, а Expo Go обращается к 127.0.0.1:
`NODE_OPTIONS=--dns-result-order=ipv4first npx expo start --localhost`.
