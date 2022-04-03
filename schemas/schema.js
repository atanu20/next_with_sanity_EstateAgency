// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import property from './property';
import propertyImage from './propertyImage';
import person from './person';
import review from './review';
import traveller from './traveller';
import host from './host';
import propertyFacility from './propertyFacility';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    property,
    propertyImage,
    person,
    review,
    traveller,
    host,
    propertyFacility,
  ]),
});
