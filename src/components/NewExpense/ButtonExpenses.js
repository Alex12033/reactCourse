import React from 'react';
import './ButtonExpenses.css';

function ButtonExpenses({onPress, text}) {
    return (
        <button onClick={onPress} type='submit'>{text}</button>
    )
}

export default ButtonExpenses
