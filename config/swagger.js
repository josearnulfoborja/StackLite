const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'StackLite API',
      version: '1.0.0',
      description: 'API REST para gestión de usuarios, posts, comentarios, archivos y roles',
      contact: {
        name: 'StackLite Support',
        email: 'support@stacklite.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
      {
        url: 'http://localhost:3000/api',
        description: 'API Base URL',
      },
    ],
    components: {
      schemas: {
        Usuario: {
          type: 'object',
          required: ['nombre', 'email', 'contraseña'],
          properties: {
            id_usuario: {
              type: 'integer',
              description: 'ID único del usuario',
            },
            nombre: {
              type: 'string',
              description: 'Nombre del usuario',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email único del usuario',
            },
            contraseña: {
              type: 'string',
              format: 'password',
              description: 'Contraseña del usuario',
            },
            fecha_registro: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de registro',
            },
          },
        },
        Post: {
          type: 'object',
          required: ['titulo', 'contenido', 'id_usuario'],
          properties: {
            id_post: {
              type: 'integer',
              description: 'ID único del post',
            },
            titulo: {
              type: 'string',
              description: 'Título del post',
            },
            contenido: {
              type: 'string',
              description: 'Contenido del post',
            },
            id_usuario: {
              type: 'integer',
              description: 'ID del usuario que creó el post',
            },
            fecha_creacion: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación del post',
            },
          },
        },
        Comentario: {
          type: 'object',
          required: ['id_post', 'id_usuario', 'texto'],
          properties: {
            id_comentario: {
              type: 'integer',
              description: 'ID único del comentario',
            },
            id_post: {
              type: 'integer',
              description: 'ID del post',
            },
            id_usuario: {
              type: 'integer',
              description: 'ID del usuario',
            },
            texto: {
              type: 'string',
              description: 'Texto del comentario',
            },
            fecha: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha del comentario',
            },
          },
        },
        Archivo: {
          type: 'object',
          required: ['ruta', 'id_post'],
          properties: {
            id_archivo: {
              type: 'integer',
              description: 'ID único del archivo',
            },
            ruta: {
              type: 'string',
              description: 'Ruta del archivo',
            },
            tipo: {
              type: 'string',
              description: 'Tipo de archivo',
            },
            id_post: {
              type: 'integer',
              description: 'ID del post asociado',
            },
          },
        },
        Rol: {
          type: 'object',
          required: ['nombre_rol'],
          properties: {
            id_rol: {
              type: 'integer',
              description: 'ID único del rol',
            },
            nombre_rol: {
              type: 'string',
              description: 'Nombre del rol',
            },
            descripcion: {
              type: 'string',
              description: 'Descripción del rol',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Mensaje de error',
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js', './server.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
