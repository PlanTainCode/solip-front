import Link from 'next/link';
import { useState } from 'react';
import IconMenu from '../icons/menu.svg';
import IconClose from '../icons/close.svg';
import cn from 'classnames';

const menu = [
  { title: 'главная', link: '/' },
  { title: 'услуги', link: '#' },
  { title: 'портфолио', link: '#' },
  { title: 'контакты', link: '#' },
  { title: 'полезные материалы', link: '#' },
  { title: 'о нас', link: '/about' },
  { title: 'строительство', link: '#' },
];

const MenuLink = ({ title, link, onClick }) => {
  if (link) {
    return (
      <li>
        <Link href={link}>
          <a className='hover:underline underline-offset-2' onClick={onClick}>{title}</a>
        </Link>
      </li>
    );
  }

  return (
    <li>{title}</li>
  );
};

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="h-12 lg:h-16">
      <div className="fixed left-0 top-0 w-full z-30">
        <div className="container relative h-12 lg:h-24">
          <button className='bg-white rounded-full flex items-center absolute pl-1 pr-2 text-16px font-medium right-6 top-1/2 -translate-y-1/2 lg:right-0' onClick={() => setShowMenu(true)}>
            <IconMenu className='w-6 h-6 mr-1'/>
            Menu
          </button>
        </div>
        <div className={cn(
          'hidden absolute left-0 top-0 right-0 bottom-0 bg-light-grey rounded-full lg:flex items-center transition-all ease',
          {
            'duration-200': showMenu,
            'opacity-0 pointer-events-none -translate-y-8 duration-150': !showMenu,
          }
        )}>
          <div className="container flex items-center justify-between">
            <ul className="flex gap-8 text-18px">
              {menu.map(({title, link}) => <MenuLink key={title} title={title} link={link} onClick={() => setShowMenu(false)}/>)}
            </ul>
            <button className='bg-white rounded-full p-1' onClick={() => setShowMenu(false)}>
              <IconClose className='w-6 h-6'/>
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}