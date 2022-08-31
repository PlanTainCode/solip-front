export default function Input({ type, value = '', placeholder = '', onChange }) {
  let inputType = 'text';
  let inputPlaceholder = placeholder;

  if (type === 'tel') {
    inputType = 'tel';
    inputPlaceholder = '+46 73 542 76 22';
  }

  return (
    <input type={inputType} className='block w-full bg-white text-black rounded-lg px-5 py-4 text-16px lg:text-20px' placeholder={inputPlaceholder} value={value} onChange={(e) => onChange(e.target.value)}/>
  );
}