# 📦 Сервис Поставок

Сервис для управления поставками с возможностью создания, редактирования и удаления записей. Проект построен на **React**, **TypeScript**, **Redux Toolkit** и **JSON Server**.

---

## Локальный запуск

### 1. Клонирование репозитория

```bash
git clone https://github.com/KristinaSapega/WB-Sapega-Kristina-Suppliers.git
cd supply-service
```

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск JSON Server (mock API)

```bash
npx json-server --watch db.json --port 4000
```

#### API будет доступен по адресу:
#### http://localhost:4000/deliveries

### 4. Запуск проекта
```bash
npm run dev
```