// src/sanity/schemas/user.js
export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: Rule => Rule.required().email(),
      },
      {
        name: 'hashedPassword',
        type: 'string',
        title: 'Password',
        validation: Rule => Rule.required(),
      },
    ],
  };