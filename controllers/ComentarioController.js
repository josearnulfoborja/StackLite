const Comentario = require('../models/Comentario');

class ComentarioController {
  static async crear(req, res) {
    try {
      const { id_post, id_usuario, texto } = req.body;

      if (!id_post || !id_usuario || !texto) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const resultado = await Comentario.crear({ id_post, id_usuario, texto });
      res.status(201).json({
        mensaje: 'Comentario creado exitosamente',
        id_comentario: resultado.insertId
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtener(req, res) {
    try {
      const { id } = req.params;
      const comentario = await Comentario.obtenerPorId(id);

      if (!comentario) {
        return res.status(404).json({ error: 'Comentario no encontrado' });
      }

      res.json(comentario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerTodos(req, res) {
    try {
      const comentarios = await Comentario.obtenerTodos();
      res.json(comentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerPorPost(req, res) {
    try {
      const { idPost } = req.params;
      const comentarios = await Comentario.obtenerPorPost(idPost);
      res.json(comentarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { texto } = req.body;

      if (!texto) {
        return res.status(400).json({ error: 'El texto es requerido' });
      }

      const resultado = await Comentario.actualizar(id, { texto });

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Comentario no encontrado' });
      }

      res.json({ mensaje: 'Comentario actualizado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminar(req, res) {
    try {
      const { id } = req.params;
      const resultado = await Comentario.eliminar(id);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Comentario no encontrado' });
      }

      res.json({ mensaje: 'Comentario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ComentarioController;
