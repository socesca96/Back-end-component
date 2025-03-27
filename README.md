
# Web Pinturas Tomás Murillo

Proyecto final del programa profesional de desarrollo web de CODESPACE para la gestión de una tienda de pinturas, incluyendo autenticación, subida de imágenes y navegación entre vistas de usuario construida con React.

---

## Estructura del Proyecto

```
ProyectoFinal/
├── Back-end-component/
│   └── backend/ (Node.js + Express + MongoDB)
└── Front-end-component/
    └── frontend/ (React + Redux + Vite)
```

---

## Tecnologías Utilizadas

### Backend
- Node.js
- Express
- MongoDB con Mongoose
- Multer (subida de imágenes)
- JWT (autenticación)
- bcrypt (hash de contraseñas)
- dotenv
- cors
- nodemon (desarrollo)

### Frontend
- React 19
- Redux
- React Router DOM
- Vite
- reset-css-pro
- ESLint

---

## Instalación y Uso

### Backend

1. Ve a la carpeta del backend:
   ```bash
   cd ProyectoFinal/Back-end-component/backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/pinturas
   SECRET_KEY=tu_clave_secreta
   ```
4. Inicia el servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Ve a la carpeta del frontend:
   ```bash
   cd ProyectoFinal/Front-end-component/frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el proyecto en desarrollo:
   ```bash
   npm run dev
   ```

---

## Uso 

para poder comprobar el proyecto, tenemos dos usuarios registrados, uno con rol user y otro rol admin 
USER: 
"email":"laura@example.com",
"password":"123456"

ADMIN:
"email": "ana@example.com",
"password":"123456"

---

## Autora

**Soledad de Céspedes Caja**
