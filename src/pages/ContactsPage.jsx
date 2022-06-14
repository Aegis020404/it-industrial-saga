import React, {useEffect, useRef} from "react";
import ContactMap from "../components/contactsP/ContactMap";
import ContactsLocationInfo from './../components/contactsP/ContactsLocationInfo';
import NavPagesHead from "../components/UI/navpage/MyNavPages";

const ContactsPage = ()=>{
    const contactI = useRef('')
    useEffect(()=>{
        contactI.current.classList.toggle('contactsI')
    },[contactI])
    const infoPage = [{text: 'Контакты'}]
    return (
        <div>
            <main ref={contactI} className="contacts">
                <NavPagesHead navItems={infoPage}/>
                <ContactsLocationInfo/>
                <ContactMap/>
            </main>
        </div>
    )
}
export default ContactsPage