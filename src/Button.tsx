import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /** Provide a text for the button */
    children: ReactNode;
     
    /** which variant look would you like to use */
    variant: 'primary' | 'secondary';
    
}

/** This is a specail button */
export const Button = ({children, variant = 'primary', ...props}: Props) => {
    return (
        <button {...props} style={{background: variant === 'primary'? 'blue': 'gray', 
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        cursor: 'pointer'
        }}>
            {children}
        </button>
    )
}


