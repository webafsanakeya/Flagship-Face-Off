import toast from "react-hot-toast"

export const getFavorites =()=>{
    const favorites = localStorage.getItem('favorites')
    if(favorites) return JSON.parse(favorites)
        return []
}

export const addFavorite = phone=> {
    const favorites = getFavorites()
    const isExist = favorites.find(p => p.id === phone.id)
    if(isExist) 
        return
    toast.error('Phone Already Added')
    favorites.push(phone)
    toast.success('Phone Added Successfully!!')
    localStorage.setItem('favorites', JSON.stringify(favorites))
}
export const removeFavorite = id =>{
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(phone=>phone.id !== id)
    localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
    toast.success('Removed Successfully!!')
}

export const getCart =()=>{
    const cart = localStorage.getItem('cart')
    if(cart) return JSON.parse(cart)
        return []
}

export const addToCart = phone=> {
    const cart = getCart()
    const isExist = cart.find(p => p.id === phone.id)
    if(isExist) 
        return
    toast.error('Phone Already Added')
    cart.push(phone)
    toast.success('Phone Added Successfully!!')
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const removeCart = id =>{
    const cart = getCart()
    const remainingCart = cart.filter(phone=>phone.id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingCart))
}