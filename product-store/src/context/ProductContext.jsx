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

    useEffect(()=>{
        getProducts()
    }, [])




    return <ProductContext value={{toggle, setToggle, products, setProducts, cart, setCart}} >
        {children}
    </ProductContext>
}