const pool = require('../config/database');

class Post {
  static async crear(post) {
    const { titulo, contenido, id_usuario } = post;
    const query = 'INSERT INTO posts (titulo, contenido, id_usuario) VALUES (?, ?, ?)';
    try {
      const [result] = await pool.execute(query, [titulo, contenido, id_usuario]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorId(id) {
    const query = 'SELECT * FROM posts WHERE id_post = ?';
    try {
      const [rows] = await pool.execute(query, [id]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async obtenerTodos(pagina = 1, limite = 10) {
    const offset = (pagina - 1) * limite;
    // Usar query() en lugar de execute() para LIMIT ya que MySQL tiene problemas con placeholders en LIMIT
    const query = `SELECT p.*, u.nombre FROM posts p INNER JOIN usuarios u ON p.id_usuario = u.id_usuario ORDER BY p.fecha_creacion DESC LIMIT ${parseInt(offset)}, ${parseInt(limite)}`;
    try {
      const [rows] = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async obtenerPorUsuario(idUsuario) {
    const query = 'SELECT * FROM posts WHERE id_usuario = ? ORDER BY fecha_creacion DESC';
    try {
      const [rows] = await pool.execute(query, [idUsuario]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  static async actualizar(id, post) {
    const { titulo, contenido } = post;
    const query = 'UPDATE posts SET titulo = ?, contenido = ? WHERE id_post = ?';
    try {
      const [result] = await pool.execute(query, [titulo, contenido, id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async eliminar(id) {
    const query = 'DELETE FROM posts WHERE id_post = ?';
    try {
      const [result] = await pool.execute(query, [id]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Post;
