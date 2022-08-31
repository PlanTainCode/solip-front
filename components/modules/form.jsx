import { useState } from "react";
import cn from "classnames";
import Button from "../elements/button";
import Input from "../elements/input";

export default function Form({ orientation = 'v' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

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
        <Button color='black'>Консультация</Button>
      </div>
      <div className="mt-5 text-12px">
        <p>Нажимая на кнопку, ты соглашаешься с <a href="#" className="underline underline-offset-2">Договором Публичной Оферты</a> и <a href="#" className="underline underline-offset-2">обработкой своих персональных данных</a>.</p>
      </div>


    </>
  );
}