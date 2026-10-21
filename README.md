# Trail Notes · Agent Workshop

Стартовый SwiftUI-проект на два экрана для индивидуального практикума.
iOS 17+, Xcode 15+ с установленным iOS Simulator; Python 3 для локального API.
Зависимостей и ключей нет. Редизайн и кеширование намеренно НЕ реализованы.

## Запуск

1. В терминале из этой папки: `python3 server/serve.py`.
2. Открыть `TrailNotes.xcodeproj`, выбрать схему TrailNotes и iPhone Simulator.
3. Run. В библиотеке четыре материала, каждый открывает полный текст.

API работает на `http://127.0.0.1:8765/articles.json`. Для физического iPhone
нужно отдельно настроить адрес сервера и доступ к локальной сети; упражнение
подготовлено для Simulator. Остановите API через Ctrl+C для воспроизведения ошибки.
Стартовый клиент обходит HTTP-кеш, сервер отдаёт Cache-Control: no-store.

## Две параллельные задачи

Репозиторий подготовлен с тегом `workshop-start`. В основном клоне:

```sh
git worktree add ../TrailNotes-redesign -b exercise/redesign workshop-start
git worktree add ../TrailNotes-offline -b exercise/offline workshop-start
```

Открыть каждый worktree в отдельном чате агента. Передать соответственно
`workshop/TASK-A-REDESIGN.md` и `workshop/TASK-B-OFFLINE.md`.
Агенту A дать ссылку на целевые узлы Figma и проверить доступ через MCP.
Для каждого участника использовать свежий клон этого репозитория.

Сценарий встречи: workshop/BRIEF.md. Порядок сборки результата:
workshop/MERGE-CHECKLIST.md. Ветки упражнений заранее не создаются,
чтобы каждый участник прошёл настройку сам.

## Сборка из терминала

```sh
xcodebuild -project TrailNotes.xcodeproj -scheme TrailNotes -sdk iphonesimulator -configuration Debug -derivedDataPath build CODE_SIGNING_ALLOWED=NO build
```

## Дизайн

В `design/` лежат векторные референсы и спецификация редизайна.
Статус публикации в Figma записан в `design/README.md`; наличие SVG
само по себе не означает, что готов нативный Figma-файл или доступ через MCP.
