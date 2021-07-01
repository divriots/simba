import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core';

export const Layout = (props) => (
  <MDXProvider>
    <CoreLayout
      logo={<h3 style={{ fontWeight: 700 }}>React Aria</h3>}
      {...props} />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css" />
  </MDXProvider>
);
