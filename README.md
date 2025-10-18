# 🎮 Biblioteca Gamer

Bienvenido a **Biblioteca Gamer**, una API para gestionar una biblioteca de videojuegos.

## 🚀 Requisitos Previos

- Node.js instalado
- npm instalado
- MySql (o el gestor de base de datos que uses)
- Herramienta para pruebas de API: [Postman](https://www.postman.com/) o [Thunder Client](https://www.thunderclient.com/)

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/CarlosDavid-AM/biblioteca_gamer.git
cd biblioteca_gamer
```

### 2. Restaurar la Base de Datos

- Ve a la carpeta `sql` y restaura el archivo de la base de datos usando tu gestor favorito.

### 3. Instalar dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### 4. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con los siguientes parámetros:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=biblioteca_juegos
DB_PORT=3306
```

> **Nota:** Ajusta los valores según tu configuración local.

### 5. Ejecutar el servidor

```bash
npm run dev
```

o

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## 🛠️ Uso de la API

Puedes probar los endpoints (GET, POST, PUT, DELETE) usando Postman o Thunder Client.

- Más información sobre los endpoints en la carpeta [`docs`](./docs).

## 📂 Estructura del Proyecto

```
biblioteca_gamer/
├── docs/
├── src/
      ├── config/
      ├── controller/
      ├── router/
      ├── sql/
      ├── app.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```
