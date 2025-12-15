const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
require('dotenv').config();

const usuariosRoutes = require('./routes/usuarios');
const postsRoutes = require('./routes/posts');
const comentariosRoutes = require('./routes/comentarios');
const archivosRoutes = require('./routes/archivos');
const rolesRoutes = require('./routes/roles');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerSpec));

// Rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comentarios', comentariosRoutes);
app.use('/api/archivos', archivosRoutes);
app.use('/api/roles', rolesRoutes);

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Verificar salud del servidor
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Servidor funcionando correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});
