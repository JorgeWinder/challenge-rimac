import React, { useEffect, useState } from 'react'
import { Header, Radio, Back, Step } from '@app/features/ui/components/'
import { PlansCard } from '@app/features/plans/components/'
import { useFormContext } from '@app/features/contacts/contexts'
import Image from 'next/image'

import axios from 'axios'

type userProps = {
  name?: string
  lastName?: string
  birthDay?: string
}

type PlanProps = {
  name: string
  age: number
  price: number
  description: string[]
}


const Planes = () => {
  // const router = useRouter()
  const [plans, setPlans] = useState([])
  const [usuario, setUsuario] = useState<userProps>()
  const { formData, setFormData } = useFormContext()

  // Calcular edad
  const calcularEdad = (birthDay: string) => {
    const hoy = new Date();
    const fechaNacimiento = new Date(birthDay);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    return edad;
  };

  // Listar los planes de seguros de la api
  const getPlanes = async (descuento: number) => {
    return await axios.get(`${process.env.NEXT_PUBLIC_URI_API}/plans.json`)
      .then(response => {
        const birthDay = usuario?.birthDay;

        if (birthDay) {
          const age = calcularEdad(birthDay)

          // Filtrar los planes por edad mayor e igual a 'age'
          const planes = response.data.list.filter((plan: PlanProps) => plan.age >= age)
          // Aplicar descuento
          planes.forEach((plan: PlanProps) => {
            plan.price = plan.price - (plan.price * descuento / 100)
          })

          setPlans(planes)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  // Listar los usaruios de la api
  const getUsuarios = async () => {
    return await axios.get(`${process.env.NEXT_PUBLIC_URI_API}/user.json`)
      .then(response => {
        setUsuario(response.data)
      })
      .catch(error => {
        console.log(error)
      })

  }

  useEffect(() => {
    const fetchData = async () => {
      await getUsuarios();
      setFormData({
        ...formData,
        fullName: (usuario?.name + ' ' + usuario?.lastName) || ''
      })
    };
    fetchData();
  }, [formData, setFormData, usuario?.name, usuario?.lastName]);


  return (
    <div className='bg-[#FAFBFF] h-full'>
      <Header />

      {/* Steps */}
      <Step step={1} />

      {/* Botón back */}
      <Back />

      <div className='flex flex-col gap-8 items-center lg:mt-24 mt-[31px]'>

        <div className='px-6 text-left lg:text-center flex flex-col gap-2'>
          <h1 className='font-bold text-[28px] text-[#141938] leading-9'>Rocío ¿Para quién deseas cotizar?</h1>
          <span className='font-normal text-[#141938]'>Selecciona la opción que se ajuste más a tus necesidades.</span>
        </div>

        <div className='flex flex-col lg:flex-row gap-6 px-6'>

          <div
            className='lg:w-[256px] w-full rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-4 relative cursor-pointer'
            onClick={(e) => {
              const allDivs = document.querySelectorAll('.rounded-3xl');
              allDivs.forEach(div => {
                (div as HTMLElement).style.backgroundColor = 'white';
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

              getPlanes(0)
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
            className='lg:w-[256px] w-full rounded-3xl bg-[#FFFFFF] py-10 px-6 flex flex-col shadow-md gap-4 relative cursor-pointer'
            onClick={(e) => {
              const allDivs = document.querySelectorAll('.rounded-3xl');
              allDivs.forEach(div => {
                (div as HTMLElement).style.backgroundColor = 'white';
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

              getPlanes(5)
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

        <div className='flex lg:flex-row flex-col gap-6 px-6'>
          {/* Planes */}
          <PlansCard plans={plans} />

        </div>


      </div>


    </div>
  )
}

export default Planes