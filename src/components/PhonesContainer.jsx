import React, { useEffect, useState } from 'react';
import PhoneCard from './phoneCard';
import Button from './ui/Button';

const PhonesContainer = ({phones}) => {
    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState (false)
    useEffect(() => {
        if (showAll){
            setDisplayPhones(phones)
        }else {
            setDisplayPhones(phones.slice(0, 6))
        }
    }, [phones, showAll])
    console.log(phones)
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => (
                        <PhoneCard key={phone.id} phone={phone}/>))
                }
               

            </div>
            
<Button type ='submit' 
onClick={() => {
                setShowAll(prv => !prv)
                if(showAll) window.scrollTo(0, 400)
            }}
         label={showAll? 'Show Less' : 'Show All'} />
            
            
        </div>
    );
};

export default PhonesContainer;