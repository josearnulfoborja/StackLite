const express = require('express');
const ArchivoController = require('../controllers/ArchivoController');

const router = express.Router();

/**
 * @swagger
 * /api/archivos:
 *   post:
 *     summary: Crear un nuevo archivo
 *     tags:
 *       - Archivos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ruta
 *               - id_post
 *             properties:
 *               ruta:
 *                 type: string
 *               tipo:
 *                 type: string
 *               id_post:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Archivo creado exitosamente
 *       400:
 *         description: Faltan campos requeridos
 */
router.post('/', ArchivoController.crear);

/**
 * @swagger
 * /api/archivos:
 *   get:
 *     summary: Obtener todos los archivos
 *     tags:
 *       - Archivos
 *     responses:
 *       200:
 *         description: Lista de todos los archivos con información del post
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_archivo:
 *                     type: integer
 *                   ruta:
 *                     type: string
 *                   tipo:
 *                     type: string
 *                   id_post:
 *                     type: integer
 *                   post_titulo:
 *                     type: string
 */
router.get('/', ArchivoController.obtenerTodos);

/**
 * @swagger
 * /api/archivos/{id}:
 *   get:
 *     summary: Obtener archivo por ID
 *     tags:
 *       - Archivos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Archivo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Archivo'
 *       404:
 *         description: Archivo no encontrado
 */
router.get('/:id', ArchivoController.obtener);

/**
 * @swagger
 * /api/archivos/{id}:
 *   delete:
 *     summary: Eliminar archivo
 *     tags:
 *       - Archivos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Archivo eliminado exitosamente
 *       404:
 *         description: Archivo no encontrado
 */
router.delete('/:id', ArchivoController.eliminar);

/**
 * @swagger
 * /api/archivos/post/{idPost}:
 *   get:
 *     summary: Obtener archivos de un post
 *     tags:
 *       - Archivos
 *     parameters:
 *       - in: path
 *         name: idPost
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Archivos del post
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Archivo'
 */
router.get('/post/:idPost', ArchivoController.obtenerPorPost);

module.exports = router;
