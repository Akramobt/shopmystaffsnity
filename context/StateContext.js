import React, { createContext, useContext, useState, useEffect } from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();
export const StateContext = ({children})=>{
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQuantities, settotalQuantities] = useState();
    const [qty, setQty] = useState(1);

//add to cart function
    const onAdd = (product, quantity) => {
      const checkProductInCart = cartItems.find((item) => item._id === product._id);
      
      setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
      
      if(checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if(cartProduct._id === product._id) return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
        })
  
        setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
        
        setCartItems([...cartItems, { ...product }]);
      }
  
      toast.success(`${qty} ${product.name} added to the cart.`);
    } 
    

//add qutity to cart
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
    //remove qutity to cart
      const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }


    return(
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty
            
          }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);