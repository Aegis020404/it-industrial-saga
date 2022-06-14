import React, {useEffect, useRef} from 'react';
import MainApplication from '../components/mainP/MainApplication';
import KeysMain from '../components/keysP/KeysMain';
import NavPagesHead from '../components/UI/navpage/MyNavPages';

const KeysPage = () => {
    const keysI = useRef('')
    useEffect(() => {
        keysI.current.classList.toggle('keysI')
    }, [keysI])
    const infoPage = [{text: 'Кейсы'}]
    return (
        <div>
            <main ref={keysI} className='keys'>
                <NavPagesHead navItems={infoPage}/>
                <KeysMain/>
                <MainApplication/>
            </main>
        </div>
    )
}

export default KeysPage