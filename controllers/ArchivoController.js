const Archivo = require('../models/Archivo');

class ArchivoController {
  static async crear(req, res) {
    try {
      const { ruta, tipo, id_post } = req.body;

      if (!ruta || !id_post) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const resultado = await Archivo.crear({ ruta, tipo, id_post });
      res.status(201).json({
        mensaje: 'Archivo creado exitosamente',
        id_archivo: resultado.insertId
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtener(req, res) {
    try {
      const { id } = req.params;
      const archivo = await Archivo.obtenerPorId(id);

      if (!archivo) {
        return res.status(404).json({ error: 'Archivo no encontrado' });
      }

      res.json(archivo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerTodos(req, res) {
    try {
      const archivos = await Archivo.obtenerTodos();
      res.json(archivos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerPorPost(req, res) {
    try {
      const { idPost } = req.params;
      const archivos = await Archivo.obtenerPorPost(idPost);
      res.json(archivos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminar(req, res) {
    try {
      const { id } = req.params;
      const resultado = await Archivo.eliminar(id);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Archivo no encontrado' });
      }

      res.json({ mensaje: 'Archivo eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ArchivoController;
