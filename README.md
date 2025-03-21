# Task Manager

Este es un proyecto de gestión de tareas que permite a los usuarios crear, ver, actualizar y eliminar tareas.

Cada usuario podrá crear su sesión donde puede ver todas sus tareas. Si desea cerrar la sesión puede hacerlo y su tareas se guardan.

También el usuario puede identificar las tareas pendientes, ya que, están señaladas con un circulo amarillo.

Y para marcarlas como completadas puedes dar click en el mismo circulo y cambia a verde, lo que indica que se ha completado.

## Requisitos

Para poder usar está aplicación se necesita:

- Node.js: v18.18.0
- npm: 9.8.1
- navegador Chrome (se sugiere esta opción para una mejor compatibilidad y experiencia de usuario )

### Instalación de dependencias del Backend

**Clonar el repositorio**:

```bash
git clone https://github.com/LinaToBot/taskManager.git
```

```bash
cd SPA
```

## Backend

El backend está desarrollado con **Node.js** y **Express**, para la base de datos utilice **MongoDB** y para la autenticación **JSON Web Tokens (JWT)**.

Y este estará corriendo en: http://localhost:5000/api/tasks o http://172.23.64.1:5000/api/tasks

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
