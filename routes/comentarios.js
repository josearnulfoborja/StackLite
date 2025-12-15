const express = require('express');
const ComentarioController = require('../controllers/ComentarioController');

const router = express.Router();

/**
 * @swagger
 * /api/comentarios:
 *   post:
 *     summary: Crear un nuevo comentario
 *     tags:
 *       - Comentarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_post
 *               - id_usuario
 *               - texto
 *             properties:
 *               id_post:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *               texto:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente
 *       400:
 *         description: Faltan campos requeridos
 */
router.post('/', ComentarioController.crear);

/**
 * @swagger
 * /api/comentarios:
 *   get:
 *     summary: Obtener todos los comentarios
 *     tags:
 *       - Comentarios
 *     responses:
 *       200:
 *         description: Lista de todos los comentarios con información del autor y post
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_comentario:
 *                     type: integer
 *                   id_post:
 *                     type: integer
 *                   id_usuario:
 *                     type: integer
 *                   texto:
 *                     type: string
 *                   fecha:
 *                     type: string
 *                     format: date-time
 *                   autor:
 *                     type: string
 *                   post_titulo:
 *                     type: string
 */
router.get('/', ComentarioController.obtenerTodos);

/**
 * @swagger
 * /api/comentarios/{id}:
 *   get:
 *     summary: Obtener comentario por ID
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comentario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comentario'
 *       404:
 *         description: Comentario no encontrado
 */
router.get('/:id', ComentarioController.obtener);

/**
 * @swagger
 * /api/comentarios/{id}:
 *   put:
 *     summary: Actualizar comentario
 *     tags:
 *       - Comentarios
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
 *               texto:
 *                 type: string
 *     responses:
 *       200:
 *         description: Comentario actualizado exitosamente
 *       404:
 *         description: Comentario no encontrado
 */
router.put('/:id', ComentarioController.actualizar);

/**
 * @swagger
 * /api/comentarios/{id}:
 *   delete:
 *     summary: Eliminar comentario
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comentario eliminado exitosamente
 *       404:
 *         description: Comentario no encontrado
 */
router.delete('/:id', ComentarioController.eliminar);

/**
 * @swagger
 * /api/comentarios/post/{idPost}:
 *   get:
 *     summary: Obtener comentarios de un post
 *     tags:
 *       - Comentarios
 *     parameters:
 *       - in: path
 *         name: idPost
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Comentarios del post
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comentario'
 */
router.get('/post/:idPost', ComentarioController.obtenerPorPost);

module.exports = router;
