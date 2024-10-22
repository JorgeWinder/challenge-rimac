import React from 'react'

type ButtonProps = {
    label: string
    type?: 'button' | 'submit' | 'reset'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const button: React.FC<ButtonProps> = (props) => {
    const { label, ...rest } = props
    return (
        <button
            className='w-full lg:w-[195px] bg-[#03050F] text-white font-bold text-[20px] rounded-[40px] px-[40px] py-[18px] lg:py-[20px]'
            {...rest}>
            {label}
        </button>
    )
}

export default button