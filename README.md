# Task Manager

Este es un proyecto de gestión de tareas que permite a los usuarios crear, ver, actualizar y eliminar tareas.

## Requisitos

- Node.js: v18.18.0
- npm: 9.8.1

### Instalación de dependencias del Backend

**Clonar el repositorio**:

```bash
git clone https://github.com/LinaToBot/taskManager.git
cd SPA
```

## Backend

El backend está desarrollado con **Node.js** y **Express**, para la base de datos utilice **MongoDB** y para la autenticación **JSON Web Tokens (JWT)**.

**Instalar dependencias del Backend**:

```bash
cd backend
```

```bash
npm install
```

```bash
npm run dev
```

## Frontend

El Frontend está desarrollado con **Next.js**, **React.js** y **Tailwind CSS**.

**Instalar dependencias del Frontend**:

```bash
cd frontend
```

```bash
npm install
```

```bash
npm run dev
```

**Si tienes problemas en acceder a la app**
Dirígete a tu terminal y si puedes leer esto:

```bash
> frontend@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.2.3 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://172.23.64.1:3000
   - Environments: .env.local
```

Usar (ctrl + click) sobre los links: http://localhost:3000 o http://172.23.64.1:3000

## Adicional

Si deseas ver el devIndicators de Next ve al archivo next.config.ts
y agrega undefined en lugar de false
