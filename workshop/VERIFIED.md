# Проверено 22 октября 2026 · React Native

- Expo SDK 57, React Native 0.86.3, React 19.2.3, Node 22.13.0.
- npm run typecheck: успешно.
- npm test: 5 тестов прошли (контракт API, повреждённые данные, HTTP/сеть, отмена).
- expo install --check: Dependencies are up to date.
- expo export --platform ios --platform android: оба Hermes bundle собраны.
- iPhone 17 Pro / iOS 26.2 / Expo Go SDK 57: библиотека показывает четыре статьи.
- Первая статья открывается; полный текст присутствует в accessibility tree.
- API остановлен, обновление показывает ошибку и кнопку «Повторить».
- API запущен, «Повторить» возвращает четыре материала.
- Скриншоты: react-native-library.png, react-native-article.png, react-native-error.png.
- Android runtime не проверен: Android SDK/Emulator на этой машине не найден.
- Веб-preview включён в зависимости; отдельная runtime-проверка не выполнялась.
- Нативные Xcode/Gradle development builds не собирались; использован Expo Go.
- npm audit: 15 high в цепочках Expo CLI/Metro; подробности в DEPENDENCIES.md.
- Figma remote MCP настроен, CLI подтвердил Successful login. Callback открыт
  в Chrome-профиле Danil с корпоративной Figma. Новые MCP-инструменты в текущем
  чате ещё не доступны, whoami и создание Figma-файла пока не выполнялись.
- Исходная SwiftUI-версия доступна по старому тегу workshop-start;
  её скриншоты отделены в history-swiftui и не относятся к текущим проверкам.
