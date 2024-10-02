// schemas/producto.js
export default {
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Producto',
      type: 'string',
      validation: Rule => Rule.required().error('El nombre del producto es obligatorio.')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      },
      validation: Rule => Rule.required().error('El slug es obligatorio.')
    },
    {
      name: 'ajuste',
      title: 'Ajuste',
      type: 'string',
      validation: Rule => Rule.required().error('El tipo de ajuste es obligatorio.')
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
      validation: Rule => Rule.required().min(0).error('El precio debe ser un número positivo.')
    },
    {
      name: 'precioDescuento',
      title: 'Precio con Descuento',
      type: 'number',
      description: 'El precio final con descuento si aplica.',
      hidden: ({ parent }) => !parent?.enOferta
    },
    {
      name: 'enOferta',
      title: 'En Oferta',
      type: 'boolean',
      description: 'Marcar si el producto está en oferta.'
    },
    {
      name: 'porcentajeDescuento',
      title: 'Porcentaje de Descuento',
      type: 'number',
      description: 'Porcentaje de descuento aplicado al precio (opcional).',
      hidden: ({ parent }) => !parent?.enOferta
    },
    {
      name: 'fechaInicioPromocion',
      title: 'Fecha de Inicio de la Promoción',
      type: 'datetime',
      hidden: ({ parent }) => !parent?.enOferta
    },
    {
      name: 'fechaFinPromocion',
      title: 'Fecha de Fin de la Promoción',
      type: 'datetime',
      hidden: ({ parent }) => !parent?.enOferta
    },
    {
      name: 'colores',
      title: 'Colores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'nombreColor',
              title: 'Nombre del Color',
              type: 'string',
              validation: Rule => Rule.required().error('El nombre del color es obligatorio.')
            },
            {
              name: 'codigoHex',
              title: 'Código HEX',
              type: 'string',
              description: 'Ingrese el código hexadecimal del color (por ejemplo, #FFFFFF).',
              validation: Rule => Rule.required().error('El código HEX del color es obligatorio.')
            }
          ]
        }
      ],
      description: 'Lista de colores disponibles para este producto.',
      validation: Rule => Rule.required().min(1).error('Debe especificar al menos un color.')
    },
    {
      name: 'guiaTallas',
      title: 'Guía de Tallas',
      type: 'string',
      description: 'Enlace a la guía de tallas o referencia a una tabla de tallas.'
    },
    {
      name: 'inventario',
      title: 'Inventario por Talla',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'talla',
              title: 'Talla',
              type: 'string',
              validation: Rule => Rule.required().error('La talla es obligatoria.')
            },
            {
              name: 'cantidad',
              title: 'Cantidad en Inventario',
              type: 'number',
              validation: Rule => Rule.required().min(0).error('La cantidad en inventario debe ser un número positivo.')
            }
          ]
        }
      ],
      description: 'Inventario disponible para cada talla de este producto.',
      validation: Rule => Rule.required().min(1).error('Debe especificar al menos una talla con inventario.')
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'categoria' }],
      description: 'Categoría a la que pertenece el producto.',
      validation: Rule => Rule.required().error('Debe seleccionar una categoría.')
    },
    {
      name: 'fabricante',
      title: 'Fabricante',
      type: 'reference',
      to: [{ type: 'fabricante' }],
      description: 'Fabricante del producto.',
      validation: Rule => Rule.required().error('Debe seleccionar un fabricante.')
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Código único del producto para gestionar el inventario.'
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      description: 'Descripción detallada del producto.'
    },
    {
      name: 'materiales',
      title: 'Materiales y Cuidados',
      type: 'text',
      description: 'Detalles sobre los materiales y las instrucciones de cuidado del producto.'
    },
    {
      name: 'envioDevoluciones',
      title: 'Envío y Devoluciones',
      type: 'text',
      description: 'Políticas sobre el envío y las devoluciones.'
    },
    {
      name: 'destacado',
      title: 'Destacado',
      type: 'boolean',
      description: 'Marcar si el producto es destacado en la tienda.'
    },
    {
      name: 'oferta',
      title: 'En Oferta',
      type: 'boolean',
      description: 'Marcar si el producto está en oferta.'
    },
    {
      name: 'imagenes',
      title: 'Imágenes del Producto',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true // Activar el hotspot para un mejor recorte de imagen
      },
      validation: Rule => Rule.required().min(1).error('Se requiere al menos una imagen del producto.')
    }
  ],
  preview: {
    select: {
      title: 'nombre',
      media: 'imagenes.0'
    }
  }
};
