import ThemeSwitcher from '@/components/ThemeSwitcher'
import { getCurrentSession } from '@lib/getCurrentSession'
import Image from 'next/image'
import Search from '@components/Search';
import { ChevronIcon } from '@/icons/ChevronIcon';

const Header = async () => {

  const session = await getCurrentSession();

  return (
    <header className="bg-white border-b border-b-slate-200 dark:bg-transparent dark:border-0 py-6">
      <div className='flex items-center justify-between min-w-full container px-12'>
        <span aria-hidden="true"></span>
        <Search />
        <div className='flex items-center gap-8'>
          <ThemeSwitcher />
          <div className='flex items-center gap-3'>
            <Image className='rounded-full' src={session?.user.image as string || session?.user.name?.charAt(0) as string} alt={session?.user.name as string} width={40} height={40} />
            <span className='text-sm'>{session?.user.name}</span>
            <ChevronIcon direction='right' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header