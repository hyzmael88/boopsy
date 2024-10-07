// src/sanity/schemas/suscriptor.js
export default {
    name: 'suscriptor',
    type: 'document',
    title: 'Suscriptor',
    fields: [
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: Rule => Rule.required().email(),
      },
    ],
  };