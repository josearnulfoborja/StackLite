-- Insertar roles
INSERT INTO roles (nombre_rol, descripcion) VALUES
('admin', 'Administrador del sistema con acceso total'),
('moderador', 'Moderador que puede eliminar posts inapropiados'),
('usuario', 'Usuario normal con permisos básicos'),
('editor', 'Editor que puede crear y modificar contenido');

-- Insertar usuarios (las contraseñas están hasheadas con bcryptjs)
-- Contraseña de ejemplo para todas: "password123"
INSERT INTO usuarios (nombre, email, contraseña_hash) VALUES
('Juan Pérez', 'juan@example.com', '$2a$10$hY9VJbK7CxJkZkQZqZqZzOKBpZkqZqZzOKBpZkqZqZqZqZq'),
('María García', 'maria@example.com', '$2a$10$hY9VJbK7CxJkZkQZqZqZzOKBpZkqZqZzOKBpZkqZqZqZqZq'),
('Carlos López', 'carlos@example.com', '$2a$10$hY9VJbK7CxJkZkQZqZqZzOKBpZkqZqZzOKBpZkqZqZqZqZq'),
('Ana Martínez', 'ana@example.com', '$2a$10$hY9VJbK7CxJkZkQZqZqZzOKBpZkqZqZzOKBpZkqZqZqZqZq'),
('Luis Rodríguez', 'luis@example.com', '$2a$10$hY9VJbK7CxJkZkQZqZqZzOKBpZkqZqZzOKBpZkqZqZqZqZq');

-- Asignar roles a usuarios
INSERT INTO usuario_roles (id_usuario, id_rol) VALUES
(1, 1),  -- Juan es admin
(1, 4),  -- Juan también es editor
(2, 2),  -- María es moderadora
(3, 3),  -- Carlos es usuario
(4, 3),  -- Ana es usuario
(4, 4),  -- Ana también es editora
(5, 3);  -- Luis es usuario

-- Insertar posts
INSERT INTO posts (titulo, contenido, id_usuario) VALUES
('Mi primer post', 'Este es el contenido de mi primer post. Estoy emocionado de compartir mis ideas con la comunidad.', 1),
('Tips de programación', 'Aquí te comparto algunos tips útiles para mejorar tu código y aumentar tu productividad como desarrollador.', 2),
('Introducción a Node.js', 'Node.js es un runtime de JavaScript que permite ejecutar código JavaScript en el servidor. Es muy versátil y ampliamente utilizado.', 3),
('Base de datos MySQL', 'MySQL es una base de datos relacional muy popular. En este post aprenderás los conceptos básicos de cómo trabajar con ella.', 4),
('Mejores prácticas en REST API', 'Descubre las mejores prácticas para crear APIs REST seguras, eficientes y fáciles de mantener.', 5),
('JavaScript avanzado', 'Exploraremos conceptos avanzados de JavaScript como closures, callbacks y promesas.', 1),
('Diseño de bases de datos', 'Aprende cómo diseñar bases de datos eficientes y escalables siguiendo principios de normalización.', 2);

-- Insertar comentarios
INSERT INTO comentarios (id_post, id_usuario, texto) VALUES
(1, 2, '¡Excelente primer post! Te felicito por el esfuerzo.'),
(1, 3, 'Muy buena la iniciativa de compartir tus ideas.'),
(2, 1, 'Muy útiles estos tips, gracias por compartirlos.'),
(2, 4, 'El punto 3 fue especialmente valioso para mí.'),
(3, 3, 'Node.js es increíble, este post lo explica muy bien.'),
(3, 5, 'Perfecto para quienes están empezando con Node.js'),
(4, 1, 'Excelente explicación sobre MySQL, muy clara.'),
(4, 2, 'Me gustaría un post sobre optimización de queries.'),
(5, 3, 'Las mejores prácticas son fundamentales.'),
(6, 4, 'Claros los conceptos, muy educativo.'),
(6, 5, 'Espero pronto un post sobre async/await.'),
(7, 1, 'La normalización es crucial para base de datos bien diseñadas.'),
(7, 2, 'Muy completo este contenido sobre diseño de BD.');

-- Insertar archivos
INSERT INTO archivos (ruta, tipo, id_post) VALUES
('uploads/primer-post-imagen.jpg', 'image/jpeg', 1),
('uploads/tips-programacion.pdf', 'application/pdf', 2),
('uploads/nodejs-diagram.png', 'image/png', 3),
('uploads/mysql-architecture.pdf', 'application/pdf', 4),
('uploads/rest-api-example.json', 'application/json', 5),
('uploads/javascript-code.js', 'text/javascript', 6),
('uploads/database-schema.sql', 'text/plain', 7),
('uploads/nodejs-tutorial-video.mp4', 'video/mp4', 3);
