import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
// import { useCookiesStore } from './path_to_your_store'; // Замените на правильный путь к вашему файлу магазина
import { useCookiesStore } from '../../useCookiesStore';

const CookiesModal = () => {
    const [activeModal, setActiveModal] = useState(false);
    // const { getStateFromCookies, setStateToCookies } = useCookiesStore();
    const state = useCookiesStore((state) => state.state)
    const setState = useCookiesStore((state) => state.setState)

    const router = useRouter();

    useEffect(() => {

        if (state === 'accept') {
            setActiveModal(false);
        } else if (state === 'decline') {
            router.push('/error'); // Замените на вашу страницу с ошибкой
        } else if (router.pathname === '/integritetspolicy' || router.pathname === '/cookies') {
            setActiveModal(false);
        } else {
            setActiveModal(true);
        }
    }, []);

    return (
        <div className={activeModal ? 'cookies active' : 'cookies'}>
            <div className="cookies__area"></div>
            <div className="cookies__body">
                <div className="cookies__content">
                    <h1>Meddelande om cookies</h1>
                    <p>Den här webbplatsen använder cookies och tjänster som samlar in tekniska data från besökarna (IP-adress, platsdata etc.) för att säkerställa funktionalitet och förbättra kvaliteten på din upplevelse. Du kommer endast att kunna fortsätta använda webbplatsen om du samtycker till det.</p>
                    <div className='hrefs'>
                        <Link href='/integritetspolicy'>integritetspolicy</Link>
                        <Link href='/cookies'>cookies</Link>
                    </div>
                    
                </div>
                <div className="cookies__buttons">
                    <button onClick={() => { setState('accept'); setActiveModal(false); }}>Anta</button>
                    <button onClick={() => { setState('decline'); router.push('/error'); }}>Avvisa</button>
                </div>
            </div>
            
        </div>
    )
};

export default CookiesModal;
