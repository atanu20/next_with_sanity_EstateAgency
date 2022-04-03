import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: 'production',
  projectId: 'k9yxbne1',
  apiVersion: '2022-04-03',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN_KEY,
  ignoreBrowserTokenWarning: true,
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
};
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => ImageUrlBuilder(config).image(source).url();

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
