import React, { useState } from 'react'

const BuilIt = () => {
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Visibility Toggle</h1>
            
            <button onClick={() => setShow(!show)}>{
                show ? 'Hide details' : 'Show details'
            }</button>
            {
                show && <div ><p>This is now u can see</p></div> 
            }
        </div>
    )
}

export default BuilIt