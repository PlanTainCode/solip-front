import IconMenu from '../icons/menu.svg';

export default function Header() {
  return (
    <header className="sticky top-0 h-12 lg:h-16 z-30">
      <button className='bg-white rounded-full flex items-center absolute pl-1 pr-2 text-16px font-medium right-0 top-1/2 -translate-y-1/2'>
        <IconMenu className='w-6 h-6 mr-1'/>
        Menu
      </button>
    </header>
  );
}