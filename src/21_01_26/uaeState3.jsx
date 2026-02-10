import React, { useState } from 'react';

export default function UseState() {
    const [arr1, setArr1] = useState([10, 20, 30, 40, 50]);
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const addElement = (v1) => {
        setArr1([...arr1, v1]);
    }
    const removeElement = (v1) => {
        setArr1(arr1.filter((X) => X !== v1));
    }
    const updateElement = (k1, v1) => {
        const updatedArr = arr1.map((X) => (X === k1 ? v1 : X));
        setArr1(updatedArr);
    }
    return (<>
        <h2>Array Elements:{arr1}</h2>
        <br />
        <input type="number" onChange={(e) => setVal1(parseInt(e.target.value))} placeholder='Enter value to add' />
        <br />
        <input type="number" onChange={(e) => setVal2(parseInt(e.target.value))} placeholder='Enter value to remove' />
        <br />
        <button onClick={() => addElement(val1)}>Add </button>
        <button onClick={() => removeElement(val2)}>Remove </button>
        <button onClick={() => updateElement(val1, val2)}>Update </button>
    </>
    );
}
