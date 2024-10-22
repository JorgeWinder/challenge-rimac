import React from 'react'

type RadioProps = {
    id: string
    name: string
    label: string
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio: React.FC<RadioProps> = (props) => {
    const { id, name, label } = props
    return (
        <div className="flex w-full gap-3 items-start">
            <label className="w-auto relative flex items-start cursor-pointer">
                <input
                    type="radio"
                    name={name}
                    id={id}
                    className="sr-only peer"
                    value="s"
                    data-amount="2000"
                />
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:border-[#389E0D] peer-checked:bg-[#389E0D] peer-checked:ring-2 peer-checked:ring-[#ffffff] ring-inset transition-all"></div>
            </label>
            <label className="w-11/12 flex flex-col gap-1" htmlFor={id}>
                <div className="w-full flex justify-between items-start">
                    {label}
                </div>
            </label>
        </div>
    )
}
