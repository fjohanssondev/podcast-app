import ThemeSwitcher from '@/components/ThemeSwitcher'
import { getCurrentSession } from '@lib/getCurrentSession'
import Image from 'next/image'

const Header = async () => {

  const session = await getCurrentSession();

  return (
    <header className="bg-white border-b border-b-slate-200 dark:bg-transparent dark:border-0 py-6">
      <div className='flex items-center justify-between min-w-full container px-12'>
        Header
        <div className='flex items-center gap-8'>
          <ThemeSwitcher />
          <div className='flex items-center gap-2'>
            <Image className='rounded-full' src={session?.user.image as string || session?.user.name?.charAt(0) as string} alt={session?.user.name as string} width={40} height={40} />
            <span>{session?.user.name}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header