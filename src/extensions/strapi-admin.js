'use strict';

module.exports = {
  // Customize the Strapi admin UI
  config: {
    admin: {
      // Define injection zones for the home page
      inject: {
        'Admin/containers/HomePage/cta': [
          {
            type: 'Component',
            name: 'CustomHomepageSection',
            Component: async () => {
              const { default: CustomHomepageSection } = await import(
                /* webpackChunkName: "custom-homepage-section" */
                './components/CustomHomepageSection'
              );
              return CustomHomepageSection;
            },
          },
        ],
      },
    },
  },
};