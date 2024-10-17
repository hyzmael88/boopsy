export default {
    name: 'cupon',
    type: 'document',
    title: 'Cupones de Descuento',
    fields: [
        {
            name: 'codigo',
            type: 'string',
            title: 'Código del Cupón',
            validation: Rule => Rule.required().min(5).max(20)
        },
        {
            name: 'descripcion',
            type: 'text',
            title: 'Descripción',
        },
        {
            name: 'descuento',
            type: 'number',
            title: 'Descuento (%)',
            validation: Rule => Rule.required().min(1).max(100)
        },
        {
            name: 'fechaInicio',
            type: 'datetime',
            title: 'Fecha de Inicio',
        },
        {
            name: 'fechaFin',
            type: 'datetime',
            title: 'Fecha de Fin',
        },
        {
            name: 'activo',
            type: 'boolean',
            title: 'Activo',
            initialValue: true
        }
    ]
}