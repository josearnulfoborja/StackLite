const Post = require('../models/Post');

class PostController {
  static async crear(req, res) {
    try {
      const { titulo, contenido, id_usuario } = req.body;

      if (!titulo || !contenido || !id_usuario) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const resultado = await Post.crear({ titulo, contenido, id_usuario });
      res.status(201).json({
        mensaje: 'Post creado exitosamente',
        id_post: resultado.insertId
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtener(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.obtenerPorId(id);

      if (!post) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerTodos(req, res) {
    try {
      const { pagina = 1, limite = 10 } = req.query;
      const posts = await Post.obtenerTodos(parseInt(pagina), parseInt(limite));
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerPorUsuario(req, res) {
    try {
      const { idUsuario } = req.params;
      const posts = await Post.obtenerPorUsuario(idUsuario);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { titulo, contenido } = req.body;

      if (!titulo || !contenido) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const resultado = await Post.actualizar(id, { titulo, contenido });

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.json({ mensaje: 'Post actualizado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminar(req, res) {
    try {
      const { id } = req.params;
      const resultado = await Post.eliminar(id);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Post no encontrado' });
      }

      res.json({ mensaje: 'Post eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PostController;
