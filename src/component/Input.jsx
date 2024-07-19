import React, {useId} from 'react';

function Input({
    label,
    type="text",
    ...props
},ref) {
    const id = useId()
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input  type={type} ref={ref} id={id} {...props} className='bg-slate-400' />
        </div>
    );
}

export default React.forwardRef(Input)