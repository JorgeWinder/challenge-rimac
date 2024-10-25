import React from 'react'
import Button from '@app/features/ui/components/button/button'
import { Header } from '@app/features/ui/components/'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form"

import { useFormContext } from '@app/features/contacts/contexts'

interface FormData {
    dni: number;
    celular: number;
    price: number;
    name: string;
}


const Cotizar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const router = useRouter()

    const { formData, setFormData } = useFormContext()

    const onSubmit = (data: FormData) => {
        // Redireccionar a la siguiente página si formulario no tiene errores
        if (Object.keys(errors).length === 0) {
            // Guardar datos en el contexto
            setFormData(data)
            router.push('/planes')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: parseInt(value) || 0
        });
        console.log(value)
    };

    return (
        <>
            <Image src='/blur-asset-1.svg' alt='logo' width={352} height={304} className='lg:hidden block h-[304px] absolute right-0' />
            <Image src='/blur-asset-2.svg' alt='logo' width={352} height={304} className='lg:hidden block h-[304px] absolute left-[-50px] bottom-[0px]' />

            <Image src='/blur-asset1.svg' alt='logo' width={352} height={1088} className='hidden lg:block h-[100vh] absolute right-0 top-0' />
            <Image src='/blur-asset2.svg' alt='logo' width={352} height={1088} className='hidden lg:block h-[100vh] absolute left-0 top-0' />


            <Header />

            <div className='flex h-[calc(100vh-64px)] items-center z-[9999] relative'>

                <div className='w-[45%] lg:flex hidden justify-end'>
                    <Image src='/banner-desktop.png' alt='' width={480} height={560} className='h-[560px]' />
                </div>

                <div className='flex flex-col gap-6 px-6 w-full lg:w-[55%] lg:items-center'>
                    <div className='flex w-full items-center justify-start lg:w-[352px]'>
                        <div className='flex flex-col w-[60%] lg:w-full py-[30px] gap-2'>
                            <div className='bg-[#00F4E2] py-[2px] px-[8px] font-bold text-xs rounded text-center w-fit'>Seguro Salud Flexible</div>
                            <span className='font-bold text-[28px] w-[188px] leading-9'>Creado para <br /> ti y tu familia</span>
                        </div>
                        <div className='w-[40%] lg:hidden'>
                            <Image src='/banner-movil.png' alt='' width={100} height={100} className='w-[100%]' />
                        </div>
                    </div>

                    <div className="bg-black h-[1px] flex pb-[1px] opacity-20 lg:hidden"></div>

                    <form className='flex flex-col gap-6 lg:w-[352px]' onSubmit={handleSubmit(onSubmit)}>
                        <p className='font-bold text-[14px]'>
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
                                        {...register('dni', { required: true, onChange: handleChange })}
                                    />
                                    <label
                                        htmlFor="dni"
                                        className="text-[#5E6488] font-medium text-3xs ml-[40px] mt-[0px] label-input h-auto bg-transparent"
                                    >
                                        Nro. de documento
                                    </label>
                                </div>

                            </div>
                            {errors.dni && <p style={{ color: 'red', fontSize: '13px', marginTop: '-15px' }}>*Este campo es requerido</p>}

                            <div className='w-full flex rounded-lg border-[#5E6488] border-[1px] px-4 py-2 input-group'>
                                <input
                                    id='celular'
                                    type='number'
                                    className="h-[40px] w-full bg-transparent text-black peer"
                                    autoComplete="off"
                                    placeholder=""
                                    style={{ paddingLeft: '5px', marginTop: '3px' }}
                                    {...register('celular', { required: true, onChange: handleChange })}
                                />
                                <label
                                    htmlFor="celular"
                                    className="text-[#5E6488] font-medium text-3xs ml-[40px] mt-[0px] label-input h-auto bg-transparent"
                                >
                                    Celular
                                </label>
                            </div>
                        </div>
                        {errors.celular && <p style={{ color: 'red', fontSize: '13px', marginTop: '-15px' }}>*El número de contacto es requerido</p>}


                        <div className='flex flex-col gap-4'>

                            <label className="w-full relative flex flex-col items-start input-group cursor-pointer">
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


                            <label className="w-full relative flex flex-col items-start input-group cursor-pointer">
                                <input
                                    id="checkboxCustomComunica"
                                    type="checkbox"
                                    className="absolute opacity-0 peer"
                                />
                                <label
                                    id="labelForCheckboxCustom"
                                    htmlFor="checkboxCustomComunica"
                                    className="flex flex-col justify-center peer-checked:bg-[url('/checkbox-on.svg')] bg-[url('/checkbox.svg')] h-5 bg-no-repeat bg-contain cursor-pointer w-full pl-[30px] text-black text-2xs font-medium"
                                >
                                    <div className="flex flex-col gap-2 w-max">
                                        <span className="text-[14px] font-medium text-black leading-3 cursor-pointer">
                                            Acepto la Política Comunicaciones Comerciales
                                        </span>
                                    </div>
                                </label>
                            </label>

                            <span className='font-bold text-xs underline underline-offset-4'>
                                Aplican Términos y Condiciones.
                            </span>

                        </div>

                        {/* <Button label='Cotiza, aquí' onClick={handleClick} /> */}
                        <Button label='Cotiza, aquí' type='submit' />

                    </form>

                </div>


            </div>


            <div className='py-8 px-6 lg:px-[120px] bg-[#03050F] flex flex-col lg:flex-row lg:justify-between items-center gap-6'>
                <Image src='/logo-white.svg' alt='' width={138} height={20} className='h-[20px] lg:hidden' />
                <Image src='/logo-white-v.svg' alt='' width={100} height={42} className='h-[42px] lg:block hidden' />
                <div className="bg-white h-[1px] flex pb-[1px] opacity-40 w-full lg:hidden"></div>
                <span className='text-white font-medium text-[12px]'>© 2023 RIMAC Seguros y Reaseguros.</span>
            </div>


        </>

    )
}

export default Cotizar