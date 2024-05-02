import { useEffect } from "react";
import { isEqual } from "lodash";

export function useCompareDeepEffect(callback, depedencies){
    const currentDepedenciesRef = useRef();
    if(!isEqual(currentDepedenciesRef.current, depedencies)){
        currentDepedenciesRef.current  = depedencies
    }
    useEffect(callback, [currentDepedenciesRef.current])
}