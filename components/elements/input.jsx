import cn from "classnames";

export default function Input({ type, value = '', placeholder = '', onChange, error }) {
  let inputType = 'text';
  let inputPlaceholder = placeholder;

  if (type === 'tel') {
    inputType = 'tel';
    inputPlaceholder = '+46 73 542 76 22';
  }

  console.log('input error', error);

  return (
    <input type={inputType} className={cn(
      'block w-full bg-white text-black rounded-lg px-5 py-4 text-16px lg:text-20px',
      {
        'border border-red': error
      }
    )} placeholder={inputPlaceholder} value={value} onChange={(e) => onChange(e.target.value)}/>
  );
}