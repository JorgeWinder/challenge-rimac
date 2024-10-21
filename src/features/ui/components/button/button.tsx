import React from 'react'

type ButtonProps = {
    label: string
    type?: 'button' | 'submit' | 'reset'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const button: React.FC<ButtonProps> = (props) => {
    const { label, ...rest } = props
    return (
        <button className='bg-black text-white font-bold text-[20px] rounded-[40px] px-[40px] py-[20px]'
            {...rest}>{label}
        </button>
    )
}

export default button