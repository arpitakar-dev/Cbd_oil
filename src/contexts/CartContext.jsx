import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
     // cartItems: [],
     // addToCart: () => { },
     // cartCount: () => { },
     // updateQuantity: () => { },
     // removeFromCart: () => { },
     // cartTotal: () => { },
     // clearCart: () => {},
     // total: 0,
     // handlingCharge: 0,
     // grandTotal: 0,
})

export const ProductProvider = ({ children }) => {
     //set cart items
     // Step 1 initial cart value
     const getInitialCart = () => {
          try {
               const storedCart = localStorage.getItem("cartItems");
               return storedCart ? JSON.parse(storedCart) : [];
          } catch (error) {
               console.error("Failed to load cart from localStorage", error);
               return [];
          }
     };


     const [cartItems, setCartItems] = useState(getInitialCart);
     //const [itemDetails, setItemDetails] = useState()

     //Add to cart
     const addToCart = (product) => {
          setCartItems((prev) => {
               const exists = prev.find((item) => item.id === product.id)
               if (exists) {
                    return prev.map((item) =>
                         item.id === product.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                    );
               } else {
                    return [...prev, { ...product, quantity: 1 }];
               }
          })
     }

     //Total Cart cout
     const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

     // Save to localStorage whenever cartItems changes
     useEffect(() => {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          console.log(cartItems)
     }, [cartItems]);


     //update Quantity 
     const updateQuantity = (productId, delta) => {
          setCartItems((prev) =>
               prev.map((item) =>
                    item.id === productId
                         ? { ...item, quantity: Math.max(1, item.quantity + delta) } // 👈 never below 1
                         : item
               )
          );
     };

     //Delete cart item
     const removeFromCart = (productId) => {
          setCartItems((prev) => prev.filter((item) => item.id !== productId));
     }

     //cart Total pdate
     let handlefee = 6
     const cartTotal = cartItems.reduce(
          (total, item) => total + (item.prices?.current_price || 0) * item.quantity,
          0
     );

     const grandTotal = cartTotal + handlefee

     const clearCart = () => {
          setCartItems([]);
          localStorage.removeItem("cartItems");
     };

     //openmenu body overflow

     return <CartContext.Provider value={{
          cartItems,
          addToCart,
          cartCount,
          updateQuantity,
          removeFromCart,
          cartTotal,
          handlefee,
          grandTotal,
          clearCart
     }}>
          {children}
     </CartContext.Provider>

}
