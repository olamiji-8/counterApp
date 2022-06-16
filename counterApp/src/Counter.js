import React, {useState}from 'react';

const Counter = () => {
    const [value, setValue] = useState(0)

    const complexIncreae = () => {
        setTimeout(() => {
            setValue((prevState) => {
                return prevState +1
            })
        }, 2000)
    }
    return (
        <>
        <div>
            <h2>Basic Counter</h2>
            <h1>{value}</h1>
            <button onClick = {() => setValue(value -1)} className="btn decrease">Decrease</button>
            <button onClick = {() => setValue(0)} className="btn reset">Reset</button>
            <button onClick = {() => setValue(value +1)}className="btn increase">Increase</button>
        </div>

        <div>
        <h2>Complex Counter</h2>
            <h1>{value}</h1>
            <button onClick = {complexIncreae} className="btn delay">Delayed Increase</button>
        </div>
            
        </>
    )
} 

export default Counter