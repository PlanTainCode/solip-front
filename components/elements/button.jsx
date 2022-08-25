import cn from "classnames";

export default function Button({children, color = 'white', className}) {
  return (
    <a href="#" className={cn(className, {
      'block w-full text-18px font-medium text-center px-8 py-4 rounded-full': true,
      'transition-opacity duration-300 hover:opacity-90': true,
      'bg-white text-black': color === 'white',
      'bg-green text-white': color === 'green',
      'bg-black text-white': color === 'black',
    })}>{children}</a>
  );
}