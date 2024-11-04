import React, { useState } from 'react'
import IncreaseDecreaseCount from './IncreaseDecreaseCount';
import UseEffectForTitle from './UseEffectForTitle';

function List() {
    const [show,setshow] =useState(false);

    const status=()=>{
        setshow(!show);
    }
  return (
    <div>
        <div>{show? <IncreaseDecreaseCount/> : <UseEffectForTitle/>}</div>
        <button onClick={status}>{show? 'Increment': 'UseEffect'}</button>

    </div>
  )
}

export default List;