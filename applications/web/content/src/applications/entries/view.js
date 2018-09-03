import React, { Fragment } from 'react';
import { Script } from '@app/Components/Html/Tags';

const ProductsView = () => (
  <Fragment>
    <Script src="assets/content.js" />
    <div id="root" />
  </Fragment>
);

export default ProductsView;
