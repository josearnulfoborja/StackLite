const pool = require('../config/database');

class Rol {
  static async crear(rol) {
    const { nombre_rol, descripcion } = rol;
    const query = 'INSERT INTO roles (nombre_rol, descripcion) VALUES (?, ?)';
    try {
      const [result] = await pool.execute(query, [nombre_rol, descripcion]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorId(id) {
    const query = 'SELECT * FROM roles WHERE id_rol = ?';
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async obtenerTodos() {
    const query = 'SELECT * FROM roles';
    try {
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async actualizar(id, rol) {
    const { nombre_rol, descripcion } = rol;
    const query = 'UPDATE roles SET nombre_rol = ?, descripcion = ? WHERE id_rol = ?';
    try {
      const [result] = await pool.execute(query, [nombre_rol, descripcion, id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async eliminar(id) {
    const query = 'DELETE FROM roles WHERE id_rol = ?';
    try {
      const [result] = await pool.execute(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Rol;
