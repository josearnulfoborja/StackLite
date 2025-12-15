const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Crear un nuevo post
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - contenido
 *               - id_usuario
 *             properties:
 *               titulo:
 *                 type: string
 *               contenido:
 *                 type: string
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Post creado exitosamente
 *       400:
 *         description: Faltan campos requeridos
 */
router.post('/', PostController.crear);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Obtener todos los posts con paginación
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Lista de posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/', PostController.obtenerTodos);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Obtener post por ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post no encontrado
 */
router.get('/:id', PostController.obtener);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Actualizar post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               contenido:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post actualizado exitosamente
 *       404:
 *         description: Post no encontrado
 */
router.put('/:id', PostController.actualizar);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Eliminar post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post eliminado exitosamente
 *       404:
 *         description: Post no encontrado
 */
router.delete('/:id', PostController.eliminar);

/**
 * @swagger
 * /api/posts/usuario/{idUsuario}:
 *   get:
 *     summary: Obtener posts de un usuario
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Posts del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/usuario/:idUsuario', PostController.obtenerPorUsuario);

module.exports = router;
