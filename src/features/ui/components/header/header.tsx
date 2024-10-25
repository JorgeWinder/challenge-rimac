import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Header = () => {
    const router = useRouter()

    const handleGoHome = () => {
        router.push('/cotizar')
    }

    return (
        <div className='h-[56px] lg:h-[64px] py-3 px-6 flex justify-between z-[9999] relative'>
            <Image src='/logo.svg' alt='logo' width={65} height={32} onClick={handleGoHome} className='cursor-pointer'/>

            <div className='flex items-center gap-4'>
                <span className='hidden lg:flex text-xs font-bold'>
                    ¡Compra por este medio!
                </span>
                <div className='flex gap-2 items-center'>
                    <Image src='/phone.svg' alt='menu' width={20} height={20} />
                    <span className='text-[#03050F] font-bold text-[16px]'>(01) 411 6001</span>
                </div>
            </div>

        </div>
    )
}
