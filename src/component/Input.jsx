import React from 'react';

function Input(props) {
    return (
        <div>
            <label htmlFor="me">what your name?</label>
            <input id="me" type="text" name="name" className='bg-slate-400' />
        </div>
    );
}

export default Input;