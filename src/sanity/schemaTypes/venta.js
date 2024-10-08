// src/sanity/schemas/venta.js
export default {
    name: 'venta',
    type: 'document',
    title: 'Venta',
    fields: [
      {
        name: 'sessionId',
        type: 'string',
        title: 'Session ID',
      },
      {
        name: 'amount_total',
        type: 'number',
        title: 'Total Amount',
      },
      {
        name: 'currency',
        type: 'string',
        title: 'Currency',
      },
      {
        name: 'customer_email',
        type: 'string',
        title: 'Customer Email',
      },
      {
        name: 'line_items',
        type: 'array',
        title: 'Line Items',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string', title: 'Name' },
              { name: 'quantity', type: 'number', title: 'Quantity' },
              { name: 'price', type: 'number', title: 'Price' },
            ],
          },
        ],
      },
    ],
  };