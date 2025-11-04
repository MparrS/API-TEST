// server.js
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

// Configuración de rutas y path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "data.json");

// Función para leer y escribir datos
function leerData() {
  const raw = fs.readFileSync(dataPath);
  return JSON.parse(raw);
}
function guardarData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// --- RUTAS DE USUARIOS --- //

// Obtener todos los usuarios
app.get("/api/usuarios", (req, res) => {
  const data = leerData();
  res.json(data.usuarios);
});

// Obtener un usuario por ID
app.get("/api/usuarios/:id", (req, res) => {
  const data = leerData();
  const user = data.usuarios.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ mensaje: "Usuario no encontrado" });
  res.json(user);
});

// Crear nuevo usuario
app.post("/api/usuarios", (req, res) => {
  const data = leerData();
  const nuevo = {
    id: data.usuarios.length ? data.usuarios[data.usuarios.length - 1].id + 1 : 1,
    nombre: req.body.nombre,
    email: req.body.email,
    rol: req.body.rol || "usuario"
  };
  data.usuarios.push(nuevo);
  guardarData(data);
  res.status(201).json(nuevo);
});

// Actualizar usuario
app.put("/api/usuarios/:id", (req, res) => {
  const data = leerData();
  const userIndex = data.usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ mensaje: "Usuario no encontrado" });

  data.usuarios[userIndex] = { ...data.usuarios[userIndex], ...req.body };
  guardarData(data);
  res.json(data.usuarios[userIndex]);
});

// Eliminar usuario
app.delete("/api/usuarios/:id", (req, res) => {
  const data = leerData();
  const index = data.usuarios.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensaje: "Usuario no encontrado" });
  const eliminado = data.usuarios.splice(index, 1);
  guardarData(data);
  res.json(eliminado[0]);
});

// --- RUTAS DE POSTS --- //

// Obtener todos los posts
app.get("/api/posts", (req, res) => {
  const data = leerData();
  res.json(data.posts);
});

// Crear post
app.post("/api/posts", (req, res) => {
  const data = leerData();
  const nuevo = {
    id: data.posts.length ? data.posts[data.posts.length - 1].id + 1 : 1,
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    usuarioId: req.body.usuarioId
  };
  data.posts.push(nuevo);
  guardarData(data);
  res.status(201).json(nuevo);
});

// Actualizar post
app.put("/api/posts/:id", (req, res) => {
  const data = leerData();
  const postIndex = data.posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).json({ mensaje: "Post no encontrado" });
  data.posts[postIndex] = { ...data.posts[postIndex], ...req.body };
  guardarData(data);
  res.json(data.posts[postIndex]);
});

// Eliminar post
app.delete("/api/posts/:id", (req, res) => {
  const data = leerData();
  const index = data.posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensaje: "Post no encontrado" });
  const eliminado = data.posts.splice(index, 1);
  guardarData(data);
  res.json(eliminado[0]);
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));
