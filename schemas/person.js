export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'personName',
      title: 'Person Name',
      type: 'string',
      description: 'Please use "FirstName LastName" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'personName',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
  ],
};
