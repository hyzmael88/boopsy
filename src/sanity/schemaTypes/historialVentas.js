// schemas/historialVentas.js
export default {
    name: 'historialVentas',
    title: 'Historial de Ventas',
    type: 'document',
    fields: [
      {
        name: 'producto',
        title: 'Producto Vendido',
        type: 'reference',
        to: [{ type: 'producto' }],
        validation: Rule => Rule.required().error('Debe seleccionar un producto vendido.')
      },
      {
        name: 'cantidadVendida',
        title: 'Cantidad Vendida',
        type: 'number',
        validation: Rule => Rule.required().min(1).error('La cantidad vendida debe ser al menos 1.')
      },
      {
        name: 'fechaVenta',
        title: 'Fecha de Venta',
        type: 'datetime',
        validation: Rule => Rule.required().error('Debe especificar la fecha de la venta.')
      },
      {
        name: 'comprador',
        title: 'Nombre del Comprador',
        type: 'string',
        validation: Rule => Rule.required().error('Debe especificar el nombre del comprador.')
      },
      {
        name: 'correoComprador',
        title: 'Correo del Comprador',
        type: 'string',
        validation: Rule => Rule.required().error('Debe especificar el correo del comprador.')
      },
      {
        name: 'idTransaccionStripe',
        title: 'ID de Transacción de Stripe',
        type: 'string',
        description: 'El ID único de la transacción en Stripe.',
        validation: Rule => Rule.required().error('Debe especificar el ID de la transacción de Stripe.')
      }
    ],
    preview: {
      select: {
        title: 'producto.nombre',
        subtitle: 'cantidadVendida',
        date: 'fechaVenta'
      }
    }
  };
  