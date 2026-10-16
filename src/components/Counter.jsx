import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { themeContext } from './ThemeContext';
export default function Counter({ value }) {

    const [counter, setCounter] = useState(0);
    const isCounting = true;
    const navigate = useNavigate();
    const theme = useContext(themeContext)
    useEffect(() => {
        console.log(counter)
    }, [counter]);

    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <>
            <div className='prop__counter'>
                <div className='counter'>
                    <p className='counter_paragraph'>Counter</p>
                    <span className='counter_heading'>{counter}</span>
                    {isCounting && <button className='counter_button' onClick={handleClick}>Count</button>}
                </div>
                <div className='prop_handling'>
                    Coming Props: <strong> Name is {value.name} , Designation is {value.designation} </strong>
                </div>

            </div>
            <button className='nav__button' onClick={() => navigate('/form')}>
                Go to Form Page
            </button>
            <p>Current theme stored in context is : {theme}</p>
        </>

    )
}
