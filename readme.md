# README.md - API Demo — Usuarios y Posts

Este proyecto es un ejemplo de **API REST** creada con **Node.js + Express**, que maneja datos almacenados en un archivo `data.json`. Ideal para pruebas, prototipos y aprendizaje.

---

## 🚀 Instalación paso a paso

1. Asegúrate de tener **Node.js 18 o superior** instalado.
2. Clona o copia esta carpeta a tu computadora.
3. Abre una terminal dentro del proyecto y ejecuta:

```cmd
npm init -y
npm install express
```

4. Luego ejecuta el servidor:

```cmd
node server.js
```

5. Abre tu navegador en:

```
http://localhost:4000
```

---

## 📡 Endpoints disponibles

### 🔹 Usuarios

| Método | Endpoint          | Descripción               |
| ------ | ----------------- | ------------------------- |
| GET    | /api/usuarios     | Listar todos los usuarios |
| GET    | /api/usuarios/:id | Obtener un usuario        |
| POST   | /api/usuarios     | Crear usuario nuevo       |
| PUT    | /api/usuarios/:id | Actualizar usuario        |
| DELETE | /api/usuarios/:id | Eliminar usuario          |

### 🔹 Posts

| Método | Endpoint       | Descripción            |
| ------ | -------------- | ---------------------- |
| GET    | /api/posts     | Listar todos los posts |
| POST   | /api/posts     | Crear nuevo post       |
| PUT    | /api/posts/:id | Actualizar post        |
| DELETE | /api/posts/:id | Eliminar post          |

---

## 🧪 Probar con cURL en CMD (Windows)

> Nota: En Windows CMD, se usan comillas dobles `"` y se debe escapar JSON con `\`.

### 1️⃣ Crear un nuevo usuario

```cmd
curl -X POST http://localhost:4000/api/usuarios ^
-H "Content-Type: application/json" ^
-d "{\"nombre\": \"Laura Mendoza\", \"email\": \"laura.mendoza@example.com\", \"rol\": \"usuario\"}"
```

### 2️⃣ Actualizar un usuario existente (ID 2)

```cmd
curl -X PUT http://localhost:4000/api/usuarios/2 ^
-H "Content-Type: application/json" ^
-d "{\"nombre\": \"María Gómez Rivas\", \"rol\": \"editor\"}"
```

### 3️⃣ Eliminar un usuario (ID 3)

```cmd
curl -X DELETE http://localhost:4000/api/usuarios/3
```

### 4️⃣ Consultar posts de un usuario específico (usuarioId = 2)

```cmd
curl "http://localhost:4000/api/posts?usuarioId=2"
```

> 💡 Asegúrate de que tu `server.js` tenga la ruta que permite filtrar posts por `usuarioId`.

### 5️⃣ Consultar información de un usuario por ID (ID 1)

```cmd
curl "http://localhost:4000/api/usuarios/1"
```

### 6️⃣ Consultar lista completa de usuarios

```cmd
curl "http://localhost:4000/api/usuarios"
```

---

## 📝 Notas importantes

* Todos los datos se guardan directamente en `data.json`.
* No necesitas instalar ninguna base de datos.
* Ideal para pruebas, prototipos o integración inicial con frontends (React, Vue, Angular…).
* Puedes ampliar este ejemplo con autenticación, validaciones, filtros o conexión a MySQL.

---

## 🏋️‍♂️ Ejercicios prácticos

1. Crear un usuario nuevo.

```cmd
{
  "id": 4,
  "nombre": "Laura Mendoza",
  "email": "laura.mendoza@example.com",
  "rol": "usuario"
}

```


2. Actualizar un usuario existente.

```cmd
{
  "id": 2,
  "nombre": "María Gómez Rivas",
  "email": "maria.gomez@example.com",
  "rol": "editor"
}

```


3. Eliminar un usuario.

```cmd
{
  "message": "Usuario eliminado correctamente"
}

```


4. Consultar un usuario específico.

```cmd
{
  "id": 1,
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "rol": "admin"
}

```


5. Consultar los posts de un usuario.

```cmd
[
  {
    "id": 2,
    "titulo": "Nueva actualización",
    "contenido": "Hemos lanzado una nueva versión del sistema.",
    "usuarioId": 2
  }
]

```


6. Consultar la lista completa de usuarios.

```cmd
[
  {
    "id": 1,
    "nombre": "Juan Pérez",
    "email": "juan.perez@example.com",
    "rol": "admin"
  },
  {
    "id": 2,
    "nombre": "María Gómez Rivas",
    "email": "maria.gomez@example.com",
    "rol": "editor"
  },
  {
    "id": 4,
    "nombre": "Laura Mendoza",
    "email": "laura.mendoza@example.com",
    "rol": "usuario"
  }
]

```



> 💡 Cada ejercicio se puede realizar directamente con los comandos `curl` de la sección anterior.
