import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const ProductContext = createContext();

export const ProductContextProvider = ({children})=>{
    const [toggle, setToggle] = useState(false)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const getProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
    }


    const increaseQuantity = (id)=>{
        setCart(prev => prev.map(elem => elem.id === id ? {...elem, quantity : elem.quantity + 1} : elem))
    }


    const decreaseQuantity = (id)=>{
        // console.log(id)

        



        setCart(prev => prev.map(elem => elem.id === id ? {...elem, quantity : elem.quantity - 1} : elem))
    }


    useEffect(()=>{
        getProducts()
    }, [])




    return <ProductContext value={{toggle, setToggle, products, setProducts, cart, setCart, increaseQuantity, decreaseQuantity}} >
        {children}
    </ProductContext>
}