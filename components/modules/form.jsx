import { useEffect, useState } from "react";
import cn from "classnames";
import Button from "../elements/button";
import Input from "../elements/input";

export default function Form({ orientation = 'v', showDisclaimer, short, buttonText }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const reset = () => {
    setName('');
    setPhone('');
    setErrorName(false);
    setErrorPhone(false);
  };

  const showPopup = () => {
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  }

  const processing = () => {
    if (short) {
      if (phone.length === 0) {
        setErrorPhone(true);
        return;
      }
    } else {
      if (name.length === 0) {
        setErrorName(true);
        return;
      } else {
        setErrorName(false);
      }

      if (phone.length === 0) {
        setErrorPhone(true);
        return;
      }
    }

    reset();
    showPopup();
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
        {short ? (
          <Input type='tel' value={phone} onChange={setPhone} error={errorPhone}/>
        ) : (
          <>
            <Input
              type='text'
              placeholder="namn"
              placeholder="namn"
              value={name}
              onChange={setName}
              error={errorName}
            />
            <Input
              type='tel'
              value={phone}
              onChange={setPhone}
              error={errorPhone}
            />
          </>
        )}
        <Button color='black' onClick={processing}>{buttonText || 'skicka förfrågan'}</Button>
      </div>
      {showDisclaimer &&
        <div className="mt-5 text-12px">
          <p>Genom att klicka på knappen godkänner du <a href="#" className="underline underline-offset-2">avtalet om offentligt erbjudande</a> och <a href="#" className="underline underline-offset-2">behandlingen av dina personuppgifter</a>.</p>
          <p>Genom att klicka på knappen godkänner du <a href="#" className="underline underline-offset-2">avtalet om offentligt erbjudande</a> och <a href="#" className="underline underline-offset-2">behandlingen av dina personuppgifter</a>.</p>
        </div>
      }

      <div className={cn(
        'fixed left-0 top-0 right-0 bottom-0 z-50 bg-black/40 flex items-center justify-center py-10 px-6 transition-all duration-300',
        {
          'opacity-0 pointer-events-none': !showSuccessPopup,
        }
      )}>
        <div className="bg-silver rounded-3xl px-6 py-8 max-w-2xl lg:pt-24">
          <p className="t-h1 text-green text-center">har skickats</p>
          <p className="t-h1 text-green text-center">har skickats</p>
          <div className="mt-8 lg:mt-16">
            <Button color="green" onClick={() => setShowSuccessPopup(false)}>stänga</Button>
            <Button color="green" onClick={() => setShowSuccessPopup(false)}>stänga</Button>
          </div>
        </div>
      </div>
    </>
  );
}