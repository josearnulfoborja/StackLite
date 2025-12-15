const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

class UsuarioController {
  static async crear(req, res) {
    try {
      const { nombre, email, contraseña } = req.body;

      if (!nombre || !email || !contraseña) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const usuarioExistente = await Usuario.obtenerPorEmail(email);
      if (usuarioExistente) {
        return res.status(409).json({ error: 'El email ya está registrado' });
      }

      const contraseña_hash = await bcrypt.hash(contraseña, 10);
      const resultado = await Usuario.crear({ nombre, email, contraseña_hash });

      res.status(201).json({
        mensaje: 'Usuario creado exitosamente',
        id_usuario: resultado.insertId
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtener(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuario.obtenerPorId(id);

      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      const { contraseña_hash, ...usuarioSinPassword } = usuario;
      res.json(usuarioSinPassword);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerTodos(req, res) {
    try {
      const usuarios = await Usuario.obtenerTodos();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const { nombre, email } = req.body;

      if (!nombre || !email) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      const resultado = await Usuario.actualizar(id, { nombre, email });

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json({ mensaje: 'Usuario actualizado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminar(req, res) {
    try {
      const { id } = req.params;
      const resultado = await Usuario.eliminar(id);

      if (resultado.affectedRows === 0) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      res.json({ mensaje: 'Usuario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerRoles(req, res) {
    try {
      const { id } = req.params;
      const roles = await Usuario.obtenerRoles(id);
      res.json(roles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async asignarRol(req, res) {
    try {
      const { id } = req.params;
      const { id_rol } = req.body;

      if (!id_rol) {
        return res.status(400).json({ error: 'id_rol es requerido' });
      }

      await Usuario.asignarRol(id, id_rol);
      res.status(201).json({ mensaje: 'Rol asignado exitosamente' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsuarioController;
