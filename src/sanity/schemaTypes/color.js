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
            validation: Rule => Rule.required().regex(/^#([0-9A-F]{3}){1,2}$/i, {
                name: 'hex code', // Error message is "Does not match hex code pattern"
                invert: false // Boolean to allow any value that does NOT match pattern
            })
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.max(200)
        }
    ]
}