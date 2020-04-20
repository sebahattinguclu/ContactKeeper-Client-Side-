import React, {useContext, useRef,useEffect} from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const {filterContacts, clearFilter,filtered} = contactContext;
    const text = useRef('');
    const onChange = (e) => {
        if (text.current.value !== '') {
            filterContacts(e.target.value)
        } else {
            clearFilter();
        }
    }

    useEffect(()=>{
        if(filtered===null){
            text.current.value='';
        }
    },[])

    return (
        <form>
            <input
                ref={text}
                type="text"
                placeholder="Search by Name and Email"
                onChange={onChange}
            />
        </form>
    )
}

export default ContactFilter;