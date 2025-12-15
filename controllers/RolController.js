const Rol = require('../models/Rol');

class RolController {
  static async crear(req, res) {
    try {
      const { nombre_rol, descripcion } = req.body;

      if (!nombre_rol) {
        return res.status(400).json({ error: 'El nombre del rol es requerido' });
      }

      const resultado = await Rol.crear({ nombre_rol, descripcion });
      res.status(201).json({
        mensaje: 'Rol creado exitosamente',
        id_rol: resultado.insertId
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtener(req, res) {
    try {
      const { id } = req.params;
      const rol = await Rol.obtenerPorId(id);

      if (!rol) {
        return res.status(404).json({ error: 'Rol no encontrado' });
      }

      res.json(rol);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerTodos(req, res) {
    try {
      const roles = await Rol.obtenerTodos();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { nombre_rol, descripcion } = req.body;

      if (!nombre_rol) {
        return res.status(400).json({ error: 'El nombre del rol es requerido' });
      }

      const resultado = await Rol.actualizar(id, { nombre_rol, descripcion });

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Rol no encontrado' });
      }

      res.json({ mensaje: 'Rol actualizado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminar(req, res) {
    try {
      const { id } = req.params;
      const resultado = await Rol.eliminar(id);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Rol no encontrado' });
      }

      res.json({ mensaje: 'Rol eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = RolController;
