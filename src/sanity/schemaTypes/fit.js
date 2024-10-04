export default {
    name: 'fit',
    title: 'Fit',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the fit style, e.g., joggers, cargo, skinny, etc.',
            validation: Rule => Rule.required().min(2).max(50)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'A brief description of the fit style.',
            validation: Rule => Rule.max(200)
        }
        ,
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Image of the fit style.',
        }
        ,
        {
            name: 'guia',
            title: 'Guia de Medidas',
            type: 'image',
            description: 'Tabla de medidas acorde al fit.',
        }
    ]
}