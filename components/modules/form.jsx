import { useEffect, useState } from "react";
import cn from "classnames";
import Button from "../elements/button";
import Input from "../elements/input";

export default function Form({ orientation = 'v' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const processing = () => {
    setName('');
    setPhone('');
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  };

  return (
    <>
      <div className={cn(
        'space-y-3',
        {
          'lg:space-y-5': orientation === 'v',
          'lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0': orientation === 'h',
        }
      )}>
        <Input type='text' placeholder="Имя" value={name} onChange={setName}/>
        <Input type='tel' value={phone} onChange={setPhone}/>
        <Button color='black' onClick={processing}>Консультация</Button>
      </div>
      <div className="mt-5 text-12px">
        <p>Нажимая на кнопку, ты соглашаешься с <a href="#" className="underline underline-offset-2">Договором Публичной Оферты</a> и <a href="#" className="underline underline-offset-2">обработкой своих персональных данных</a>.</p>
      </div>

      <div className={cn(
        'fixed left-0 top-0 right-0 bottom-0 z-50 bg-black/40 flex items-center justify-center py-10 px-6 transition-all duration-300',
        {
          'opacity-0 pointer-events-none': !showSuccessPopup,
        }
      )}>
        <div className="bg-silver rounded-3xl px-6 py-8 max-w-2xl lg:pt-24">
          <p className="t-h1 text-green text-center">Успешно отправлено</p>
          <div className="mt-8 lg:mt-16">
            <Button color="green" onClick={() => setShowSuccessPopup(false)}>Закрыть</Button>
          </div>
        </div>
      </div>
    </>
  );
}