import { useEffect, useState } from "react";

export default function useCartCount(cartCont){
    const [counter, setCounter] = useState(cartCont.getCartLength);
    
    useEffect(() => {
      const key = setInterval(() => {
        setCounter( cartCont.getCartLength())
      }, 500);
  
      return () => {
        clearInterval(key);
      };
    }, [])
    return({counter});
}