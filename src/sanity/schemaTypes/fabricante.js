// schemas/fabricante.js
export default {
    name: 'fabricante',
    title: 'Fabricante',
    type: 'document',
    fields: [
      {
        name: 'nombre',
        title: 'Nombre del Fabricante',
        type: 'string',
        validation: Rule => Rule.required().error('El nombre del fabricante es obligatorio.')
      },
      {
        name: 'direccion',
        title: 'Dirección',
        type: 'string',
        description: 'Dirección física del fabricante.'
      },
      {
        name: 'telefono',
        title: 'Teléfono',
        type: 'string',
        description: 'Número de teléfono del fabricante.'
      },
      {
        name: 'correoElectronico',
        title: 'Correo Electrónico',
        type: 'string',
        description: 'Correo electrónico de contacto del fabricante.'
      },
      {
        name: 'sitioWeb',
        title: 'Sitio Web',
        type: 'url',
        description: 'URL del sitio web del fabricante.'
      }
    ],
    preview: {
      select: {
        title: 'nombre'
      }
    }
  };
  