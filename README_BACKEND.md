# StackLite Backend

Backend desarrollado con Node.js y Express para una aplicación web sencilla con gestión de usuarios, posts, comentarios, archivos y roles.

## 📋 Características

- ✅ Gestión de usuarios con autenticación por contraseña hasheada
- ✅ Sistema de roles y permisos
- ✅ CRUD completo para posts
- ✅ Sistema de comentarios para posts
- ✅ Gestión de archivos asociados a posts
- ✅ CORS habilitado para acceso desde diferentes orígenes
- ✅ Base de datos MySQL con relaciones

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MySQL2** - Driver MySQL con soporte async/await
- **bcryptjs** - Hash de contraseñas
- **CORS** - Control de origen cruzado
- **dotenv** - Gestión de variables de entorno

## 📂 Estructura del Proyecto

```
StackLite/
├── config/
│   └── database.js          # Configuración de conexión MySQL
├── models/
│   ├── Usuario.js           # Modelo Usuario
│   ├── Post.js              # Modelo Post
│   ├── Comentario.js        # Modelo Comentario
│   ├── Archivo.js           # Modelo Archivo
│   └── Rol.js               # Modelo Rol
├── controllers/
│   ├── UsuarioController.js # Controlador de usuarios
│   ├── PostController.js    # Controlador de posts
│   ├── ComentarioController.js # Controlador de comentarios
│   ├── ArchivoController.js # Controlador de archivos
│   └── RolController.js     # Controlador de roles
├── routes/
│   ├── usuarios.js          # Rutas de usuarios
│   ├── posts.js             # Rutas de posts
│   ├── comentarios.js       # Rutas de comentarios
│   ├── archivos.js          # Rutas de archivos
│   └── roles.js             # Rutas de roles
├── server.js                # Punto de entrada del servidor
├── package.json             # Dependencias del proyecto
├── .env                     # Variables de entorno
└── database.sql             # Script de base de datos
```

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
cd StackLite
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Editar `.env`:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_DATABASE=web_sencilla
DB_PORT=3306
```

4. **Crear la base de datos**
```bash
mysql -u root -p < database.sql
```

5. **Iniciar el servidor**
```bash
npm start
```

O en modo desarrollo:
```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📡 Endpoints API

### Usuarios
- `POST /api/usuarios` - Crear usuario
- `GET /api/usuarios` - Obtener todos los usuarios
- `GET /api/usuarios/:id` - Obtener usuario por ID
- `PUT /api/usuarios/:id` - Actualizar usuario
- `DELETE /api/usuarios/:id` - Eliminar usuario
- `GET /api/usuarios/:id/roles` - Obtener roles del usuario
- `POST /api/usuarios/:id/roles` - Asignar rol a usuario

### Posts
- `POST /api/posts` - Crear post
- `GET /api/posts` - Obtener todos los posts (con paginación)
- `GET /api/posts/:id` - Obtener post por ID
- `GET /api/posts/usuario/:idUsuario` - Obtener posts de un usuario
- `PUT /api/posts/:id` - Actualizar post
- `DELETE /api/posts/:id` - Eliminar post

### Comentarios
- `POST /api/comentarios` - Crear comentario
- `GET /api/comentarios/:id` - Obtener comentario por ID
- `GET /api/comentarios/post/:idPost` - Obtener comentarios de un post
- `PUT /api/comentarios/:id` - Actualizar comentario
- `DELETE /api/comentarios/:id` - Eliminar comentario

### Archivos
- `POST /api/archivos` - Crear archivo
- `GET /api/archivos/:id` - Obtener archivo por ID
- `GET /api/archivos/post/:idPost` - Obtener archivos de un post
- `DELETE /api/archivos/:id` - Eliminar archivo

### Roles
- `POST /api/roles` - Crear rol
- `GET /api/roles` - Obtener todos los roles
- `GET /api/roles/:id` - Obtener rol por ID
- `PUT /api/roles/:id` - Actualizar rol
- `DELETE /api/roles/:id` - Eliminar rol

## 📝 Ejemplos de Uso

### Crear un usuario
```bash
curl -X POST http://localhost:3000/api/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "contraseña": "micontraseña123"
  }'
```

### Crear un post
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Mi primer post",
    "contenido": "Este es el contenido de mi post",
    "id_usuario": 1
  }'
```

### Crear un comentario
```bash
curl -X POST http://localhost:3000/api/comentarios \
  -H "Content-Type: application/json" \
  -d '{
    "id_post": 1,
    "id_usuario": 1,
    "texto": "Excelente post!"
  }'
```

## 🔒 Seguridad

- Las contraseñas se hashean usando bcryptjs
- CORS está habilitado para controlar acceso desde otros dominios
- Validación de datos en los controladores
- Manejo de errores centralizado

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 📞 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.
