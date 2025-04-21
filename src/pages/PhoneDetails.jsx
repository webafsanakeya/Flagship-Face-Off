import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../components/ui/Button';
import { MdBookmarkAdd, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { addFavorite, addToCart, getCart } from '../utils';
import { CartContext } from '../providers/Contexts';
import { SiEtcd } from 'react-icons/si';

const PhoneDetails = () => {
  const {setCart} = useContext(CartContext)
    const data = useLoaderData()
    const {id} = useParams()
    const singlePhone = data.find(phone => phone.id === (parseInt(id)))
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {}
  const handleFavorite = ()=>{
    addFavorite(singlePhone)
  }

  const handleCart = ()=>{
    // save to localstorage for persistency
    addToCart(singlePhone)
    // update state for instant ui change
    setCart(getCart)
    
  }
    return (
        <div className='w-full py-12'>
            <img src={image} alt="Banner Image" className='w-full mx-auto md:w-auto mb-8' />
            {/* title and buttons */}
            <div className="flex justify-between"><h1 className='text-6xl font-thin mb-8'>{name}</h1>
            <div className='space-x-4'>
                <Button onClick={handleCart} label={<MdOutlineShoppingCartCheckout />} />
                <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
              

            </div>
            
            </div>
            {/* Details */}
            <div></div>
        </div>
    );
};

export default PhoneDetails;