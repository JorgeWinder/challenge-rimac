import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Back = () => {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (

        <div className='gap-2 lg:flex absolute top-[160px] left-[216px] hidden cursor-pointer' onClick={handleBack}>
            <Image src='/back.svg' alt='' width={20} height={20} />
            <span className='font-bold text-lg text-[#4F4FFF]'>Volver</span>
        </div>
    )
}
