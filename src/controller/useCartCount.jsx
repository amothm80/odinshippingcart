import { useEffect, useState } from "react";

export default function useCartCount(){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const key = setInterval(() => {
        setCounter(count => count + 1)
      }, 5000);
  
      return () => {
        clearInterval(key);
      };
    }, [])
    return({counter});
}