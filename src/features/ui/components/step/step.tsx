import React from 'react'
import Image from 'next/image'
import { Progress } from '../progress/progress'
import { useRouter } from 'next/router'

type StepProps = {
    step: number
}

export const Step: React.FC<StepProps> = (props) => {

    const router = useRouter()

    const handleBack = () => {
        router.back()
    }


    const { step } = props

    if (step === 1) {
        return (
            <div className='h-[56px] w-full lg:bg-[#EDEFFC] bg-transparent flex items-center justify-center border-b border-[#141938] border-opacity-20 lg:border-0'>

                <div className='lg:flex gap-4 hidden'>
                    <Image src='/paso1.svg' alt='' width={24} height={24} />
                    <span className='font-bold text-[16px]'>Planes y coberturas</span>
                    <Image src='/3p.svg' alt='' width={32} height={24} />

                    <Image src='/paso2-off.svg' alt='' width={24} height={24} />
                    <span className='font-bold text-[16px] text-[#7981B2]'>Resumen</span>
                </div>

                <div className='lg:hidden gap-4 flex py-4 px-6 items-center'>
                    <div onClick={handleBack} >
                        <Image src='/back-circle.svg' width={24} height={24} alt='' />
                    </div>
                    <span className='font-bold text-[12px] w-[30%]'>PASO 1 DE 2</span>
                    <Progress percentage={5} />
                </div>

            </div>
        )
    } else if (step === 2) {
        return (
            <div className='h-[56px] w-full lg:bg-[#EDEFFC] bg-transparent flex items-center justify-center border-b border-[#141938] border-opacity-20 lg:border-0'>

                <div className='lg:flex gap-4 hidden'>
                    <Image src='/paso1-off.svg' alt='' width={24} height={24} />
                    <span className='font-bold text-[16px] text-[#7981B2]'>Resumen</span>
                    <Image src='/3p.svg' alt='' width={32} height={24} />

                    <Image src='/paso2-on.svg' alt='' width={24} height={24} />
                    <span className='font-bold text-[16px]'>Planes y coberturas</span>

                </div>

                <div className='lg:hidden gap-4 flex py-4 px-6 items-center'>
                    <Image src='/back-circle.svg' width={24} height={24} alt='' />
                    <span className='font-bold text-[12px] w-[30%]'>PASO 2 DE 2</span>
                    <Progress percentage={50} />
                </div>

            </div>
        )

    }

}

