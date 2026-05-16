import { useState,useRef } from "react"

export const useDebounce =() =>{
    const [debouncedValue, setDebouncedValue] = useState();
    const timerRef=useRef(null);
    function debouncedSearch(name, delay){

        if(timerRef.current) clearTimeout(timerRef.current);

        timerRef.current=setTimeout(()=>{
            console.log("debounced value", name);
            setDebouncedValue(name);
        },delay)
        
    }


    return{
        debouncedValue,
        debouncedSearch
    }
}