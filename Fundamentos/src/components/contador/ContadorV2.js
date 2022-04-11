import React, { useState } from 'react';

import Botoes from './Botoes';
import Display from './Display';

export default props => {

 const [num, setNum] = useState(0)

 const soma = () => setNum(num + 1)
 const sub = () => setNum(num - 1)

 return (
    <>
        <Display num={num} />
        <Botoes soma={soma} sub={sub}/>
    </>
  );
}