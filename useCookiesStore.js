import {create} from 'zustand';
import Cookies from 'js-cookie';

export const useCookiesStore = create(set => ({
    state: Cookies.get('cookieState'),
    
    setState: (newState) => {
        if (newState === null || newState === undefined) {
            Cookies.remove('cookieState');
        } else if (newState === 'accept' || newState === 'decline') {
            Cookies.set('cookieState', newState);
        }
        set(() => ({ state: newState }));
    },
}));
