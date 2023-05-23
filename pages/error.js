import { useCookiesStore } from '../useCookiesStore';
import { useRouter } from 'next/router'

export default function Error() {

    const state = useCookiesStore((state) => state.state)
    const setState = useCookiesStore((state) => state.setState)

    const router = useRouter();


    return (
        <div className="errorPage">
            <div style={{textAlign: 'center', width: '100%', justifyContent: 'center'}}>
                <h1>Du har inte accepterat cookies</h1>
                <button onClick={() => { setState('accept'); router.push('/'); }}>Anta</button>
            </div>
        </div>
    )
}