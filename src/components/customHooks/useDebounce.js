import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, depedencies){
    const {reset, clear} = useTimeout(callback, delay, depedencies);
    useEffect(reset,  [...depedencies, reset]);
    useEffect(clear, [])
}