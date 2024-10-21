import React from 'react'
import Button from '@app/features/ui/components/button/button'
import Image from 'next/image'

const cotizar = () => {
    return (
        <>
            <div className='h-[56px] py-3 px-6 flex justify-between'>
                <Image src='/logo.svg' alt='logo' width={65} height={32} />
                <div className='flex gap-2 items-center'>
                    <Image src='/phone.svg' alt='menu' width={20} height={20} />
                    <span className='text-[#03050F] font-bold text-[16px]'>(01) 411 6001</span>
                </div>
            </div>

            <div className='flex flex-col gap-6 px-6'>
                <div className='flex w-full items-center justify-start'>
                    <div className='flex flex-col w-[60%] py-[30px] gap-2'>
                        <div className='bg-[#00F4E2] py-[2px] px-[8px] font-bold text-xs rounded text-center w-fit'>Seguro Salud Flexible</div>
                        <span className='font-bold text-[28px] w-[188px] leading-9'>Creado para <br /> ti y tu familia</span>
                    </div>
                    <div className='w-[40%]'>
                        <Image src='/banner-movil.png' alt='' width={100} height={100} className='w-[100%]' />
                    </div>
                </div>

                <div className="bg-black h-[1px] flex pb-[1px] opacity-20"></div>

                <div className='flex flex-col gap-6'>
                    <p className='font-semibold text-[14px]'>
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.
                    </p>

                    <div className='flex flex-col gap-4'>
                        <div className='flex w-full'>
                            <div className='w-[42%] flex items-center justify-between rounded-tl-lg rounded-bl-lg border-[#5E6488] border-[1px] px-4 py-2 font-medium'>
                                <div>DNI</div>
                                <Image src="/arrow-b.svg" alt="" width={20} height={20} />
                            </div>
                            <div className='w-[58%] flex rounded-tr-lg rounded-br-lg border-[#5E6488] border-[1px] px-4 py-2 input-group'>
                                <input
                                    id='dni'
                                    type='number'
                                    className="h-[40px] w-full bg-transparent text-black peer"
                                    autoComplete="off"
                                    placeholder=""
                                    style={{ paddingLeft: '5px', marginTop: '3px' }}
                                    required
                                />
                                <label
                                    htmlFor="dni"
                                    className="text-[#5E6488] font-medium text-3xs ml-[40px] mt-[0px] label-input h-auto bg-transparent"
                                >
                                    Nro. de documento
                                </label>
                            </div>
                        </div>

                        <div className='w-full flex rounded-lg border-[#5E6488] border-[1px] px-4 py-2 input-group'>
                            <input
                                id='celular'
                                type='number'
                                className="h-[40px] w-full bg-transparent text-black peer"
                                autoComplete="off"
                                placeholder=""
                                style={{ paddingLeft: '5px', marginTop: '3px' }}
                                required
                            />
                            <label
                                htmlFor="celular"
                                className="text-[#5E6488] font-medium text-3xs ml-[40px] mt-[0px] label-input h-auto bg-transparent"
                            >
                                Celular
                            </label>
                        </div>
                    </div>


                    <div className='flex flex-col gap-4'>

                        <label className="w-7/12 relative flex flex-col items-start input-group cursor-pointer">
                            <input
                                id="checkboxCustom"
                                type="checkbox"
                                className="absolute opacity-0 peer"
                            />
                            <label
                                id="labelForCheckboxCustom"
                                htmlFor="checkboxCustom"
                                className="flex flex-col justify-center peer-checked:bg-[url('/checkbox-on.svg')] bg-[url('/checkbox.svg')] h-5 bg-no-repeat bg-contain cursor-pointer w-full pl-[30px] text-black text-2xs font-medium"
                            >
                                <div className="flex flex-col gap-2 w-max">
                                    <span className="text-[14px] font-medium text-black leading-3 cursor-pointer">
                                        Acepto la Política de Privacidad
                                    </span>
                                </div>
                            </label>
                        </label>


                        <label className="w-7/12 relative flex flex-col items-start input-group cursor-pointer">
                            <input
                                id="checkboxCustom"
                                type="checkbox"
                                className="absolute opacity-0 peer"
                            />
                            <label
                                id="labelForCheckboxCustom"
                                htmlFor="checkboxCustom"
                                className="flex flex-col justify-center peer-checked:bg-[url('/checkbox-on.svg')] bg-[url('/checkbox.svg')] h-5 bg-no-repeat bg-contain cursor-pointer w-full pl-[30px] text-black text-2xs font-medium"
                            >
                                <div className="flex flex-col gap-2 w-max">
                                    <span className="text-[14px] font-medium text-black leading-3 cursor-pointer">
                                        Acepto la Política Comunicaciones Comerciales
                                    </span>
                                </div>
                            </label>
                        </label>

                    </div>

                </div>

            </div>

            <div className='text-red-400'>cotizar</div>
            <Button label='Cotiza aquí' />
        </>

    )
}

export default cotizar