import React from 'react'
import { Back, Header, Step } from '@app/features/ui/components/'
import Image from 'next/image'

import { useFormContext } from '@app/features/contacts/contexts'

const Resumen = () => {

  const { formData } = useFormContext()

  return (
    <div className='bg-[#FAFBFF] h-full'>
      <Header />

      {/* Steps */}
      <Step step={2} />

      {/* Botón back */}
      <Back />

      {/* Resumen del seguro */}
      <div className='flex flex-col gap-12 items-center lg:mt-24 mt-[31px]'>

        <div className='px-6 flex gap-2 justify-start lg:w-[890px] w-full'>
          <h1 className='font-bold text-[40px] text-[#141938] leading-9'>Resumen del seguro </h1>
        </div>

        <div className='flex flex-col gap-6 px-6 lg:w-[890px] w-full'>

          {/* Card resumen */}
          <div className='w-full rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-6 mb-6 relative'>

            <div className='flex flex-col h-[52px] justify-between'>
              <span className='text-[10px] font-bold uppercase'>Precios calculados para:</span>
              <div className='flex gap-3'>
                <Image src='/person.svg' alt='' width={24} height={24} />
                <span className='text-[20px] font-bold'>Rocio Miranda Díaz</span>
              </div>
            </div>

            <div className="bg-black h-[1px] flex pb-[1px] opacity-20 w-full"></div>

            <div className='gap-3 flex flex-col'>
              <span className='font-bold text-base'>Responsable de pago</span>
              <span>DNI: {formData.dni}</span>
              <span>Celular: {formData.celular}</span>
            </div>

            <div className='gap-3 flex flex-col'>
              <span className='font-bold text-base'>Plan elegido</span>
              <span>{formData.name}</span>
              <span>Costo del Plan: ${formData.price} al mes</span>
            </div>


          </div>



        </div>

      </div>


    </div>

  )
}

export default Resumen
