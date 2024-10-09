export default {
    name: 'color',
    title: 'Color',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(50)
        },
        {
            name: 'hex',
            title: 'Hex Code',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.max(200)
        }
    ]
}