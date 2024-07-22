import React, {useId} from 'react';

function Input({
    label,
    type="text",
    ...props
},ref) {
    const id = useId()
    return (
        <div>
            
        </div>
    );
}

export default React.forwardRef(Input)