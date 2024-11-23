// src/extensions/components/CustomHomepageSection.js
import React from 'react';

const CustomHomepageSection = () => (
  <div style={{ padding: '16px', background: '#f4f6f8', borderRadius: '8px' }}>
    <h2>Welcome to the Customized Home Page</h2>
    <p>Here you can find your personalized tutorials, social links, and more.</p>
    <ul>
      <li><a href="https://strapi.io">Official Strapi Site</a></li>
      <li><a href="https://strapi.io/tutorials">Strapi Tutorials</a></li>
      <li><a href="https://twitter.com/strapijs">Strapi Twitter</a></li>
    </ul>
  </div>
);

export default CustomHomepageSection;
