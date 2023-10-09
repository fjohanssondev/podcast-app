import Search from '@components/Search';
import ThemeSwitcher from '@/components/ThemeSwitcher'
import ProfileDropdown from '@components/ProfileDropdown';

const Header = () => {

  return (
    <header className="bg-white border-b border-b-slate-200 dark:bg-transparent dark:border-0 py-3">
      <div className='flex items-center justify-between min-w-full container px-12'>
        <span aria-hidden="true"></span>
        <Search />
        <div className='flex items-center gap-8'>
          <ThemeSwitcher />
          <div className='relative'>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header