import React, { useEffect } from 'react'
import Image from 'next/image'
import router from 'next/router'
import { useFormContext } from '@app/features/contacts/contexts'

type PlanProps = {
    name: string
    age: number
    price: number
    description: string[]
}


type PlansCardProps = {
    plans: PlanProps[]
}

export const PlansCard: React.FC<PlansCardProps> = ({ plans }) => {

    const { formData, setFormData } = useFormContext()

    // handle click event redireccionar a la siguiente página
    const handleClick = (price: number, name: string) => {
        setFormData({
            ...formData,
            price: price,
            name: name
        })
        router.push('/resumen')
    }

    useEffect(() => {
        console.log('card', plans)
    }, [plans])

    return (
        <>
            {plans.map((plan: PlanProps, index: number) => (
                <div key={index} className='lg:w-[288px] w-full rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-6 relative cursor-pointer'>

                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <span className='font-bold text-2xl'>{plan.name}</span>
                            <Image src='/home.svg' alt='' width={56} height={56} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-[#7981B2] font-semibold'>COSTO DEL PLAN</span>
                            <span className='text-xl font-bold'>${plan.price} al mes</span>
                        </div>
                    </div>

                    <div className="bg-black h-[1px] flex pb-[1px] opacity-20 lg:hidden"></div>

                    <div className='flex flex-col gap-10'>

                        <div className='flex flex-col gap-6'>

                            {plan.description.map((item: string, index: number) => (
                                <ul key={index} className="ml-5 marker:text-[#141938] marker:text-[16px] list-disc text-[16px] text-[#141938] gap-spacing-md flex flex-col">
                                    <li className="text-xs font-bold">
                                        <p className="font-medium text-2xs leading-7">
                                            {item}
                                        </p>
                                    </li>
                                </ul>
                            ))}

                        </div>

                        <button
                            onClick={() => handleClick(plan.price, plan.name)}
                            className='w-full bg-[#FF1C44] text-white font-bold text-[18px] rounded-[40px] px-[32px] py-[14px] lg:py-[14px]'>
                        Seleccionar Plan
                    </button>

                </div>


                </div >
            ))}
        </>
    )
}