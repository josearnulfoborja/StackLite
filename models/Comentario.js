const pool = require('../config/database');

class Comentario {
  static async crear(comentario) {
    const { id_post, id_usuario, texto } = comentario;
    const query = 'INSERT INTO comentarios (id_post, id_usuario, texto) VALUES (?, ?, ?)';
    try {
      const [result] = await pool.execute(query, [id_post, id_usuario, texto]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorId(id) {
    const query = 'SELECT * FROM comentarios WHERE id_comentario = ?';
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async obtenerTodos() {
    const query = `SELECT c.*, u.nombre as autor, p.titulo as post_titulo 
                   FROM comentarios c 
                   INNER JOIN usuarios u ON c.id_usuario = u.id_usuario
                   INNER JOIN posts p ON c.id_post = p.id_post
                   ORDER BY c.fecha DESC`;
    try {
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorPost(idPost) {
    const query = `SELECT c.*, u.nombre FROM comentarios c 
                   INNER JOIN usuarios u ON c.id_usuario = u.id_usuario
                   WHERE c.id_post = ? ORDER BY c.fecha DESC`;
    try {
      const [rows] = await pool.execute(query, [idPost]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async actualizar(id, comentario) {
    const { texto } = comentario;
    const query = 'UPDATE comentarios SET texto = ? WHERE id_comentario = ?';
    try {
      const [result] = await pool.execute(query, [texto, id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async eliminar(id) {
    const query = 'DELETE FROM comentarios WHERE id_comentario = ?';
    try {
      const [result] = await pool.execute(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Comentario;
