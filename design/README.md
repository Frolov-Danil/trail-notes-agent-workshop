# Редизайн · Figma

Готовый редактируемый файл создан 22 октября 2026 в корпоративной команде
Natife Design's team через официальный Figma MCP.

[Открыть все четыре состояния](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-2)

- [01 Library · Online](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-35)
- [02 Article · Online](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-92)
- [03 Library · Offline cached](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-126)
- [04 Library · Offline empty](https://www.figma.com/design/kiWvehy7xeKj7qoiu0eD8K/Trail-Notes-AI-Agent-Workshop?node-id=2-187)

## Для упражнения

Агенту A дать ссылки на 01 и 02; агенту B — 03 и 04 вместе с требованиями к кешу.
У каждого участника свой MCP и свой доступ к файлу. Проверить доступ до встречи.
SPEC.md — цвета, типографика и ограничения; при расхождениях live Figma
является источником актуальных размеров и структуры. В макете 390 × 844,
шрифт Inter; в приложении допустимы нативные системные шрифты обеих платформ.

## Проверено

- Четыре native Frame, редактируемый текст, Auto Layout и векторные иллюстрации.
- Повторные карточки, обложки, кнопки и статус-бары — экземпляры локальных компонентов.
- 174 потомка внутри handoff: 68 TEXT, 64 FRAME, 14 INSTANCE, 22 VECTOR, 6 RECTANGLE.
- Все текстовые слои используют Inter; растровых UI-снимков внутри макета нет.
- Общий скриншот визуально проверен после исправления высоты горизонтальных контейнеров.
- Структура библиотеки успешно прочитана обратно через get_metadata MCP.
- В статье находится полный текст API; часть текста ниже границы экранного viewport.
- Нативная Figma не является готовой реализацией редизайна в приложении.

## Локальные исходники

01–04.svg и PNG — первоначальные статические референсы.
figma-plugin/ — запасной генератор ранних плоских макетов; он не создаёт
текущую структуру Auto Layout и не нужен для работы с опубликованным файлом.
figma-links.json — ключ файла, реальные nodeId и ссылки для MCP.
