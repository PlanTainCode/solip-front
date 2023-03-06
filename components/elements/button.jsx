import cn from "classnames";
import Link from "next/link";

export default function Button({children, color = 'white', className, link, ...props}) {
  const classNames = cn(className, {
    'block w-full text-16px font-medium text-center px-8 py-4 rounded-full lg:text-18px': true,
    'transition-opacity duration-300 hover:opacity-90': true,
    'bg-white text-black': color === 'white',
    'bg-green text-white': color === 'green',
    'bg-black text-white': color === 'black',
  });

  if (link) {
    return (
      <Link href={link} {...props}>
        <a className={classNames} >{children}</a>
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>{children}</button>
  );
}