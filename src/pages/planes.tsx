import React from 'react'
import { Header, Radio } from '@app/features/ui/components/'
import Image from 'next/image'

const Planes = () => {
  return (
    <div className='bg-[#FAFBFF] h-screen'>
      <Header />

      <div className='h-[56px] w-full bg-[#EDEFFC] flex items-center justify-center'>
        <div className='flex gap-4'>
          <Image src='/paso1.svg' alt='' width={24} height={24} />
          <span className='font-bold text-[16px]'>Planes y coberturas</span>
          <Image src='/3p.svg' alt='' width={32} height={24} />

          <Image src='/paso2-off.svg' alt='' width={24} height={24} />
          <span className='font-bold text-[16px] text-[#7981B2]'>Resumen</span>
        </div>
      </div>

      <div className='gap-2 lg:flex absolute top-[160px] left-[216px] hidden'>
        <Image src='/back.svg' alt='' width={20} height={20} />
        <span className='font-bold text-lg text-[#4F4FFF]'>Volver</span>
      </div>

      <div className='flex flex-col gap-8'>

        <div className='px-6 text-left lg:text-center flex flex-col gap-2'>
          <h1 className='font-bold text-[28px] text-[#141938] leading-9'>Rocío ¿Para quién deseas cotizar?</h1>
          <span className='font-normal text-[#141938]'>Selecciona la opción que se ajuste más a tus necesidades.</span>
        </div>

        <div className='flex flex-col gap-6 px-6'>

          <div
            className='rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-4 relative cursor-pointer'
            onClick={(e) => {
              const allDivs = document.querySelectorAll('.rounded-3xl');
              allDivs.forEach(div => {
                (div as HTMLElement).style.backgroundColor = 'transparent';
                (div as HTMLElement).classList.remove('border-[3px]');
                (div as HTMLElement).classList.remove('border-[#141938]');
              });
              (e.currentTarget as HTMLElement).classList.add('border-[3px]');
              (e.currentTarget as HTMLElement).classList.add('border-[#141938]');

              // Seleccionar el elemento radio y marcarlo como checked
              const radioElement = document.getElementById('optiontc-1') as HTMLInputElement;
              if (radioElement) {
                radioElement.checked = true;
              }
            }}
          >
            <div className="absolute top-5 right-2">
              <Radio id='optiontc-1' name='optiontc' label='' />
            </div>

            <div className='flex w-full gap-2 items-center'>
              <Image src='/parami.svg' alt='' width={32} height={32} />
              <span className='font-semibold text-xl'>Para mí</span>
            </div>
            <span className='font-normal text-[12px]'>
              Cotiza tu seguro de salud y agrega familiares si así lo deseas.
            </span>
          </div>


          <div
            className='rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-4 relative cursor-pointer'
            onClick={(e) => {
              const allDivs = document.querySelectorAll('.rounded-3xl');
              allDivs.forEach(div => {
                (div as HTMLElement).style.backgroundColor = 'transparent';
                (div as HTMLElement).classList.remove('border-[3px]');
                (div as HTMLElement).classList.remove('border-[#141938]');
              });
              (e.currentTarget as HTMLElement).classList.add('border-[3px]');
              (e.currentTarget as HTMLElement).classList.add('border-[#141938]');

              // Seleccionar el elemento radio y marcarlo como checked
              const radioElement = document.getElementById('optiontc-2') as HTMLInputElement;
              if (radioElement) {
                radioElement.checked = true;
              }
            }}
          >
            <div className="absolute top-5 right-2">
              <Radio id='optiontc-2' name='optiontc' label='' />
            </div>

            <div className='flex w-full gap-2 items-center'>
              <Image src='/paraalguien.svg' alt='' width={32} height={32} />
              <span className='font-semibold text-xl'>Para alguien más</span>
            </div>
            <span className='font-normal text-[12px]'>
              Realiza una cotización para uno de tus familiares o cualquier persona.
            </span>
          </div>


        </div>

        <div className='flex flex-col gap-6 px-6'>

          {/* Planes */}
          <div className='rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-4 relative cursor-pointer'>
            
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <span className='font-bold text-2xl'>Plan en Casa</span>
                <Image src='/home.svg' alt='' width={56} height={56}/>
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-[#7981B2] font-bold'>COSTO DEL PLAN</span>
                <span className='text-xl font-bold'>$39 al mes</span>
              </div>
            </div>

          </div>

        </div>


      </div>




    </div>
  )
}

export default Planes