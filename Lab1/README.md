# Лабораторна робота №1: Налаштування середовища розробки

**Тема:** Налаштування середовища розробки для HTML, CSS, JavaScript/TypeScript
**Автор:** [Shakk1N](https://github.com/Shakk1N)
**Репозиторій:** [https://github.com/Shakk1N/HTMLCSS](https://github.com/Shakk1N/HTMLCSS)
**Live Деплой:** [https://htmlcss.lab1.shak1n.com](https://htmlcss.lab1.shak1n.com)

---

## 1. Опис проєкту

Проєкт створено в межах Лабораторної роботи №1. Метою є формування повнофункціонального, безпечного та сучасного локального середовища фронтенд-розробки:

- **IDE/Редактор коду:** Visual Studio Code / Antigravity з налаштуваннями робочого простору (`.vscode/settings.json`, `.vscode/extensions.json`).
- **Якість та стиль коду:** Статичний аналіз через **ESLint 9** (Flat Config) та автоматичне форматування через **Prettier** і **EditorConfig**.
- **Кероване використання AI-агента:** Інструкції та обмеження в `AGENTS.md` + повторювана процедура рев'ю в `.agents/skills/frontend-review/SKILL.md`.
- **Контроль версій:** Локальний **Git** + віддалений репозиторій **GitHub**.
- **Деплоймент:** Автоматизований хостинг на **Render** (Static Site) з підключенням власного субдомену `htmlcss.lab1.shak1n.com`.

---

## 2. Дисципліна роботи з AI-агентом

Для безпечної та якісної взаємодії з асистентом:

1. AI керується файлом правил `AGENTS.md` та скілом `.agents/skills/frontend-review/SKILL.md`.
2. Перед внесенням змін формується чіткий план і визначається перелік файлів.
3. Після змін запускаються перевірки: `npm run lint` та `npm run format:check`.
4. Користувач перевіряє `git diff` перед фіксацією змін у Git.
