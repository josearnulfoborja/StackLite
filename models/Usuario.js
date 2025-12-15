const pool = require('../config/database');

class Usuario {
  static async crear(usuario) {
    const { nombre, email, contraseña_hash } = usuario;
    const query = 'INSERT INTO usuarios (nombre, email, contraseña_hash) VALUES (?, ?, ?)';
    try {
      const [result] = await pool.execute(query, [nombre, email, contraseña_hash]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorId(id) {
    const query = 'SELECT * FROM usuarios WHERE id_usuario = ?';
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorEmail(email) {
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    try {
      const [rows] = await pool.execute(query, [email]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async obtenerTodos() {
    const query = 'SELECT id_usuario, nombre, email, fecha_registro FROM usuarios';
    try {
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async actualizar(id, usuario) {
    const { nombre, email } = usuario;
    const query = 'UPDATE usuarios SET nombre = ?, email = ? WHERE id_usuario = ?';
    try {
      const [result] = await pool.execute(query, [nombre, email, id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async eliminar(id) {
    const query = 'DELETE FROM usuarios WHERE id_usuario = ?';
    try {
      const [result] = await pool.execute(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerRoles(id) {
    const query = `SELECT r.id_rol, r.nombre_rol, r.descripcion 
                   FROM roles r
                   INNER JOIN usuario_roles ur ON r.id_rol = ur.id_rol
                   WHERE ur.id_usuario = ?`;
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async asignarRol(idUsuario, idRol) {
    const query = 'INSERT INTO usuario_roles (id_usuario, id_rol) VALUES (?, ?)';
    try {
      const [result] = await pool.execute(query, [idUsuario, idRol]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Usuario;
