export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'boolean',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    // {
    //   name: 'amenities',
    //   title: 'Amenities',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    // },
    {
      name: 'facility',
      title: 'Facility',
      type: 'array',
      of: [{ type: 'propertyFacility' }],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'House',
            value: 'house',
          },
          {
            title: 'Flat',
            value: 'flat',
          },
          {
            title: 'Hostel',
            value: 'hostel',
          },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'propertyImage' }],
    },
    {
      name: 'pricePerNight',
      title: 'Price Per Night',
      type: 'number',
    },
    {
      name: 'beds',
      title: 'Beds',
      type: 'number',
    },
    {
      name: 'rooms',
      title: 'Rooms',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'host',
      title: 'Host',
      type: 'host',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{ type: 'review' }],
    },
  ],
};
