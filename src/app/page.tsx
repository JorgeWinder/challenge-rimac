'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    async function getLoader() {
      const { dotWave } = await import('ldrs')
      dotWave.register()
    }
    getLoader()
  }, []);

  useEffect(() => {
    setTimeout(() => {
      router.push('/cotizar');
    }, 2000);
  }, [router]);

  return (
    <div className="fixed flex flex-col gap-4 items-center justify-center" style={{ width: '100%', height: '100vh', backgroundColor: '#F7052D' }}>

      {/* <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

      <Image src='/logo-white-v.svg' alt='' width={120} height={60} />

      <div className="h-[23.5px]">
        <l-dot-wave
          size="47"
          speed="1"
          color="white"
        ></l-dot-wave>
      </div>

    </div>
  );
}
