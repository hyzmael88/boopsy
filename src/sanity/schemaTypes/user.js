// src/sanity/schemas/user.js
export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        validation: Rule => Rule.required(),
      },
    ],
  };