import { useCallback, useEffect } from "react";
import { useRef } from "react";

export default function useTimeout(callback, delay){
    const callbackRef = useRef(callback);
    const timoutRef = useRef();

    useEffect(()=>{
        callbackRef.current = callback
    }, [callback])  

    const set = useCallback(()=>{
        timoutRef.current = setTimeout(()=>callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(()=>{
        timoutRef.current && clearTimeout(timoutRef.current)        
    }, [])

    useEffect(()=>{
        set()
        return clear
    }, [delay, set, clear])

    const reset = useCallback(()=>{
        clear()
        set()
    }, [clear, set])

    return {reset, clear}

}