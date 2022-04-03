export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
    },
    {
      title: 'Directors',
      name: 'directors',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
