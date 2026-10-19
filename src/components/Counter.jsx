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
            <div className='flex flex-col content-center items-center'>
                <div className='flex flex-col content-center items-center p-2'>
                    <p className='font-bold text-lg italic'>Counter</p>
                    <span className='bg-white m-2'>{counter}</span>
                    {isCounting && <button className='all-unset border-2 border-black bg-[var(--primary-color)] px-6 py-4 font-bolder cursor-pointer' onClick={handleClick}>Count</button>}
                </div>
                <div className='text-[rgb(6,73,35)]'>
                    Coming Props: <strong> Name is {value.name} , Designation is {value.designation} </strong>
                </div>

            </div>
            <button className='all-unset mt-12 bg-[var(--hover-color)] border-2 border-black py-2 px-4 font-bolder cursor-pointer ml-4' onClick={() => navigate('/form')}>
                Go to Form Page
            </button>
            <p className='ml-4'>Current theme stored in context is : {theme}</p>
        </>

    )
}
