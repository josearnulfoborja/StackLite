const pool = require('../config/database');

class Archivo {
  static async crear(archivo) {
    const { ruta, tipo, id_post } = archivo;
    const query = 'INSERT INTO archivos (ruta, tipo, id_post) VALUES (?, ?, ?)';
    try {
      const [result] = await pool.execute(query, [ruta, tipo, id_post]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorId(id) {
    const query = 'SELECT * FROM archivos WHERE id_archivo = ?';
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async obtenerTodos() {
    const query = 'SELECT a.*, p.titulo as post_titulo FROM archivos a INNER JOIN posts p ON a.id_post = p.id_post ORDER BY a.id_archivo DESC';
    try {
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorPost(idPost) {
    const query = 'SELECT * FROM archivos WHERE id_post = ?';
    try {
      const [rows] = await pool.execute(query, [idPost]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async eliminar(id) {
    const query = 'DELETE FROM archivos WHERE id_archivo = ?';
    try {
      const [result] = await pool.execute(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Archivo;
