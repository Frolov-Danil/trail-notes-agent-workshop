# Редизайн · Figma

Редагований файл створено 22 жовтня 2026 у корпоративній команді Natife Design's team
через офіційний Figma MCP.

[Відкрити всі чотири стани](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-2).

- [01 Бібліотека онлайн](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-35).
- [02 Стаття онлайн](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-92).
- [03 Бібліотека офлайн із кешем](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-126).
- [04 Офлайн без кешу](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-187).

## Для вправи

Агенту A передати 01 і 02; агенту B — 03 і 04 разом із вимогами до кешу.
Кожен учасник використовує власний MCP і власний доступ до файлу.
Перевірити доступ до зустрічі. SPEC.md описує оформлення; за розбіжностей
актуальні розміри й структура беруться з Figma.
Екран 390 × 844, шрифт Inter. У застосунку допустимі системні шрифти iOS/Android.

## Перевірено

- Чотири native Frame, редагований текст, Auto Layout і векторні ілюстрації.
- Повторні картки, обкладинки, кнопки й статус-бари — екземпляри локальних компонентів.
- 174 нащадки всередині handoff: 68 TEXT, 64 FRAME, 14 INSTANCE, 22 VECTOR, 6 RECTANGLE.
- Текст використовує Inter; растрових знімків інтерфейсу всередині макета немає.
- Загальну композицію візуально перевірено після виправлення висоти горизонтальних контейнерів.
- Структуру бібліотеки прочитано назад через get_metadata MCP.
- Стаття містить повний текст API; частина розташована нижче видимої межі екрана.
- Макет не є реалізацією редизайну в коді застосунку.

## Локальні джерела

01–04.svg і PNG — початкові статичні референси.
figma-plugin/ — запасний генератор ранніх плоских макетів; він не відтворює
поточний Auto Layout і не потрібен для роботи з готовим Figma-файлом.
figma-links.json — ключ файлу, справжні nodeId й посилання для MCP.
