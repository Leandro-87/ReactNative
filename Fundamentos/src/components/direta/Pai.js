import React from 'react';

import Filho from './Filho';

export default props => {
 let x = 13
 let y = 100
    return (
        <>
            <Filho filhoA={x} filhoB={y} />
            <Filho filhoA={x + 100} filhoB={y + 10} />
        </>
  );
}