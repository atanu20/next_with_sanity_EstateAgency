export default {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      name: 'reviewDescription',
      title: 'Review Description',
      type: 'string',
    },
    {
      name: 'traveller',
      title: 'Traveller',
      type: 'traveller',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: '5 Star', value: '5-star' },
          { title: '4 Star', value: '4-star' },
          { title: '3 Star', value: '3-star' },
          { title: '2 Star', value: '2-star' },
          { title: '1 Star', value: '1-star' },
        ],
        layout: 'radio',
      },
    },
  ],
};
