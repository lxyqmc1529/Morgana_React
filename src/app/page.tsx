'use client'
import { Button }from 'antd';
import  Link from 'next/link'
import useScrollEffect from '@/hooks/useScrollEffect';
import {clsx} from 'clsx';

export default function Home() {
  const opcity = useScrollEffect();
  const headerClsx = clsx('w-full h-[100px] flex items-center sticky top-0 z-50', {
    'shadow-sm': opcity < 0.2 && opcity > 0.1,
    'shadow-md': opcity >= 0.2 && opcity < 0.5,
    'shadow-lg': opcity >= 0.5&& opcity < 0.75,
    'shadow-xl': opcity >= 0.75,
    'shadow-none': opcity <=0.1
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <header className={headerClsx} style={{ background: `rgba(255,255,255, ${opcity})` }}>
         <nav className='container px-16 flex items-center gap-16'>
        <Button type='text'>
          <Link href='/dashboard/list'>Dashboard</Link>
        </Button>
        <Button type='text'>
          <Link href='/dashboard'>Document</Link>
        </Button>
        <Button type='text'>
          <Link href='/dashboard'>Concat</Link>
        </Button>
        <Button type='text'>
          <Link href='/dashboard'>Github</Link>
        </Button>
      </nav>
      </header>
     
      <section className="container w-full h-[calc(100vh-100px)] flex relative">
        <div className="w-full h-full py-24 px-12 z-10">
          <div className="flex items-center text-lg text-current font-medium">
            <img className="w-6 h-6 mr-2" src="/vercel.svg" alt='' />
            Mogana Question star
          </div>
          <div className="mt-12 text-8xl font-bold leading-snug">Quickly build Question star</div>
          <div className="mt-16 text-lg text-gray-600">By username</div>
        </div>
        <img className="absolute right-0 bottom-0 h-[80vh]" src="/home.png" alt="" />
      </section>
      <section className='w-full h-screen bg-slate-700'>
        <div>
        <div className="bg-[var(--background)] text-[var(--foreground)] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-[var(--primary)] text-[var(--primary-foreground)] inline-block px-4 py-2 rounded">Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img  alt="easy-to-use" src="https://openui.fly.dev/openui/48x48.svg?text=😊" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy to use</h3>
            <p className="text-[var(--muted-foreground)]">You can quickly create, publish forms, collect form undefined and analyze undefined with simple operations.</p>
          </div>
          <div className="flex flex-col items-center">
            <img  alt="easy-to-use" src="https://openui.fly.dev/openui/48x48.svg?text=📈" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy to use</h3>
            <p className="text-[var(--muted-foreground)]">Collect form undefined in a unified manner, quickly analyze form delivery status, and visualize form undefined.</p>
          </div>
          <div className="flex flex-col items-center">
            <img  alt="standalone-deployment" src="https://openui.fly.dev/openui/48x48.svg?text=📦" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Standalone Deployment</h3>
            <p className="text-[var(--muted-foreground)]">Private deployment service, safer for internal use.</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      </section>
    </main>
  );
}
