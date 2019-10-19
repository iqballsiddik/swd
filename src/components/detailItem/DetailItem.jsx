import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import DetailCatalog from './DetailCatalog';
import Footer from '../footer/Footer';

function DetailItem(props) {
  // this is container props detail order
  const { foo } = props.location.state;
  return (
    <div>
      <NavBar />
      <DetailCatalog data={foo} />
      <Footer />
    </div>
  );
}

export default DetailItem;
