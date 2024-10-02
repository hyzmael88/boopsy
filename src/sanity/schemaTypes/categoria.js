// schemas/categoria.js
export default {
    name: 'categoria',
    title: 'Categoría',
    type: 'document',
    fields: [
      {
        name: 'nombre',
        title: 'Nombre de la Categoría',
        type: 'string',
        validation: Rule => Rule.required().error('El nombre de la categoría es obligatorio.')
      }
    ]
  };
  