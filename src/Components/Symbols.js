import React from 'react'
import {useSelector} from 'react-redux';
import {selectDisplay} from  "../redux/slices/displayCountrySlice";


const Symbols = () => {
    let currentDisplay = useSelector(selectDisplay);
  return (
    <div className='symbols'>
        <div className='stack'>
            <h2>Flag of {currentDisplay.name.common}:</h2>
            <img src={currentDisplay.flags.png}></img>
        </div>
        <div className='stack'>
            <img src={currentDisplay.coatOfArms.png}></img>
        </div>
        </div>
  )
};

export default Symbols;