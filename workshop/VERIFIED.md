# Перевірено 22 жовтня 2026 · React Native

- Expo SDK 57, React Native 0.86.3, React 19.2.3, Node 22.13.0.
- npm run typecheck: успішно.
- npm test: 5 тестів пройшли (контракт API, пошкоджені дані, HTTP/мережа, скасування).
- expo install --check: Dependencies are up to date.
- expo export --platform ios --platform android: обидва Hermes bundle зібрано.
- iPhone 17 Pro / iOS 26.2 / Expo Go SDK 57: бібліотека показує чотири статті.
- Перша стаття відкривається; повний текст є в accessibility tree.
- API зупинено: оновлення показує помилку й кнопку повторної спроби.
- API запущено: повторна спроба повертає чотири матеріали.
- Знімки: react-native-library.png, react-native-article.png, react-native-error.png.
- Android runtime не перевірено: Android SDK/Emulator на цій машині не знайдено.
- Вебперегляд додано до залежностей; окремої runtime-перевірки не виконували.
- Нативні Xcode/Gradle development builds не збирали; використано Expo Go.
- npm audit: 15 high у ланцюжках Expo CLI/Metro; подробиці в DEPENDENCIES.md.
- Figma MCP whoami: Natife Design, Full seat у корпоративній Pro-команді.
- Створено файл kiWvehy7xeKj7qoiu0eD8K: 4 редаговані стани, Auto Layout,
  текст Inter, компоненти й вектори, без растрового знімка інтерфейсу.
- Загальну композицію візуально перевірено; читання бібліотеки через MCP пройшло.
- Точні посилання й nodeId: design/figma-links.json.
- Початкова SwiftUI-версія доступна за старим тегом workshop-start;
  її знімки винесено в history-swiftui й вони не підтверджують поточний запуск.
