# API Demo — Usuarios y Posts (Prueba Técnica)

Este proyecto es una **API REST** creada con **Node.js + Express**, diseñada para **evaluar tus habilidades prácticas** en manejo de rutas, CRUD, filtrado de datos y manipulación de JSON.

> ⚠️ Esta no es solo una guía paso a paso; requiere que interpretes y completes algunos ejercicios por tu cuenta.

---

## 🚀 Requisitos previos

* **Node.js 18 o superior**
* Conocimientos básicos de **Express** y **REST APIs**
* Terminal (CMD, PowerShell o bash)
* cURL o Postman para probar la API

---

## 📂 Instalación y puesta en marcha

1. Clona o descarga este repositorio.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Instala dependencias básicas
5. La API estará disponible en:

```
http://localhost:4000
```

---

## 📡 Endpoints disponibles (básico)

### Usuarios

| Método | Endpoint          | Descripción                    |
| ------ | ----------------- | ------------------------------ |
| GET    | /api/usuarios     | Lista todos los usuarios       |
| GET    | /api/usuarios/:id | Obtiene un usuario específico  |
| POST   | /api/usuarios     | Crea un nuevo usuario          |
| PUT    | /api/usuarios/:id | Actualiza un usuario existente |
| DELETE | /api/usuarios/:id | Elimina un usuario             |

### Posts

| Método | Endpoint       | Descripción                 |
| ------ | -------------- | --------------------------- |
| GET    | /api/posts     | Lista todos los posts       |
| POST   | /api/posts     | Crea un nuevo post          |
| PUT    | /api/posts/:id | Actualiza un post existente |
| DELETE | /api/posts/:id | Elimina un post             |

> 🔹 Observa que los posts pueden filtrarse por `usuarioId` usando query strings, pero **tendrás que implementarlo si aún no está**.

---

## 🧪 Pruebas con cURL

> Nota: En Windows CMD se usan comillas dobles `" "` y se debe escapar JSON con `\`.

Ejemplo de creación de usuario:

```cmd
curl -X POST http://localhost:4000/api/usuarios ^
-H "Content-Type: application/json" ^
-d "{\"nombre\": \"Nombre Apellido\", \"email\": \"correo@example.com\", \"rol\": \"usuario\"}"
```

---

## ⚙️ Desafíos prácticos (No resueltos)

Se espera que completes los siguientes ejercicios:

1. **Crear un nuevo usuario**
   *Debes enviar a `/api/usuarios` con los campos `nombre`, `email` y `rol`. Asegúrate de que el ID se genere correctamente o manejarlo manualmente.*

2. **Actualizar un usuario existente**
   *Usa `/api/usuarios/:id`. Solo actualiza los campos que envíes en el body los cuales seran `email` y `rol`.*

3. **Eliminar un usuario**
   *Usa `/api/usuarios/:id` y devuelve un mensaje de confirmación.*

4. **Listar un usuario específico**
   *`/api/usuarios/:id`. Despliega un usuario aleatorio y maneja el caso cuando el usuario no existe.*

5. **Listar posts de un usuario específico**
   * `/api/posts?usuarioId=ID`. Implementa filtrado en el backend si no está.*

6. **Listar todos los usuarios**
   * `/api/usuarios`. Asegúrate de devolver un JSON limpio y ordenado.*

---

## 📝 Reglas y recomendaciones

* Todos los datos se guardan en `data.json`. **No se usa base de datos**.
* Implementa **validaciones básicas**: que los campos obligatorios existan y tengan formato correcto.
* Maneja **errores HTTP**: 400 si el request es inválido, 404 si no existe, 500 para errores internos.
* Evita sobrescribir datos sin intención.

---

## ⚡ Evaluación

Se evaluará:

* Correcta implementación de CRUD
* Manejo de errores y validaciones
* Limpieza y claridad del código
* Capacidad de interpretar las instrucciones y completar los ejercicios sin soluciones directas
* Uso de buenas prácticas en Node.js y Express

---

> 💡 Tip: Cada ejercicio se puede probar con cURL, Postman o tu frontend favorito. La idea es que **demuestres que sabes leer la documentación, implementar rutas y manipular datos JSON**.
