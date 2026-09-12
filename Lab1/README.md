# Лабораторна робота №1: Налаштування середовища розробки

**Тема:** Налаштування середовища розробки для HTML, CSS, JavaScript/TypeScript  
**Автор:** [Shakk1N](https://github.com/Shakk1N)  
**Репозиторій:** [https://github.com/Shakk1N/-HTMLCSS](https://github.com/Shakk1N/-HTMLCSS)  
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

## 2. Структура файлів проєкту

```text
Lab1/
├── index.html                           # Семантична розмітка HTML5, компоненти інтерфейсу
├── styles.css                           # Адаптивний CSS3, Custom Properties, Glassmorphism, Dark/Light теми
├── script.js                            # Модульний JavaScript (ThemeManager, Counter, Inspector)
├── package.json                         # Залежності лінтингу та скрипти валідації
├── eslint.config.js                     # Конфігурація ESLint 9 (Flat Config)
├── .prettierrc.json                     # Правила форматування коду Prettier
├── .editorconfig                        # Крос-редакторні правила форматування файлів
├── .gitignore                           # Виключення системних та тимчасових файлів
├── AGENTS.md                            # Правила та обмеження для AI-агентів
├── README.md                            # Документація проєкту
├── REPORT.md                            # Звіт з виконання лабораторної роботи
├── .vscode/
│   ├── settings.json                    # Workspace-налаштування VS Code (formatOnSave, ESLint autofix)
│   └── extensions.json                  # Рекомендовані розширення (ESLint, Prettier, Live Preview)
├── .github/
│   └── copilot-instructions.md          # Інструкції для GitHub Copilot
└── .agents/
    └── skills/
        └── frontend-review/
            └── SKILL.md                 # Agent Skill для аудиту фронтенду перед комітом
```

---

## 3. Встановлення та локальний запуск

### Вимоги до системи

- **Node.js LTS** (версія 24.x або 20.x)
- **npm** (версія 10.x / 11.x)
- **Git** (версія 2.x+)
- Сучасний браузер (Chrome, Edge, Firefox)

### Кроки налаштування:

1. Перейдіть у папку лабораторної роботи:
   ```bash
   cd Lab1
   ```
2. Встановіть інструменти розробки (ESLint, Prettier):
   ```bash
   npm install
   ```
3. Запустіть перевірку якості коду:
   ```bash
   # Запуск лінтера
   npm run lint

   # Перевірка форматування
   npm run format:check

   # Автоматичне виправлення форматування
   npm run format
   ```
4. Локальний перегляд сторінки:
   - У VS Code: правий клік на `index.html` → **Show Preview** (Live Preview) або **Open with Live Server**.
   - Або за допомогою npx:
     ```bash
     npx serve .
     ```

---

## 4. Інтеграція з Git та деплой на Render

### Відправка коду на GitHub:

```bash
git add .
git commit -m "feat: complete lab 1 frontend setup and controlled change"
git remote add origin https://github.com/Shakk1N/-HTMLCSS.git
git branch -M main
git push -u origin main
```

### Налаштування Render Static Site:

1. У панелі [Render Dashboard](https://dashboard.render.com/) оберіть **New +** → **Static Site**.
2. Підключіть репозиторій `Shakk1N/-HTMLCSS`.
3. Вкажіть параметри:
   - **Name:** `htmlcss-lab1`
   - **Branch:** `main`
   - **Root Directory:** `Lab1` (або `.` за наявності кореневого перенаправлення)
   - **Build Command:** (залишити порожнім)
   - **Publish Directory:** `.` (або `Lab1`)
4. У розділі **Settings → Custom Domains** додайте домен `htmlcss.lab1.shak1n.com` та налаштуйте CNAME/DNS.

---

## 5. Дисципліна роботи з AI-агентом

Для безпечної та якісної взаємодії з асистентом:

1. AI керується файлом правил `AGENTS.md` та скілом `.agents/skills/frontend-review/SKILL.md`.
2. Перед внесенням змін формується чіткий план і визначається перелік файлів.
3. Після змін запускаються перевірки: `npm run lint` та `npm run format:check`.
4. Користувач перевіряє `git diff` перед фіксацією змін у Git.
