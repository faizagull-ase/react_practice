import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../counter/counter'
export default function Redux() {
    const count = useSelector((state) => state.reducer.value);
    const dispatch = useDispatch();
    return (
        <div>
            Redux Counter
            <h2>
                Count : {count}
            </h2>
            <button onClick={()=>dispatch(increment())}>
                    Increment counter
            </button>
            <button onClick={()=>dispatch(decrement())}>
                    Decrement counter
            </button>
        </div>
    )
}
