import { useState, forwardRef, useImperativeHandle, useRef } from "react"


const UseImperativeHandleHook = () => {
    const counterRef = useRef()
    return<>
    <Counter ref={counterRef}/>
    <button onClick={()=>counterRef.current?.reset()}>Reset from Parent</button>
    </>
}

const Counter = forwardRef((props, ref) => {
    const [value, setValue] = useState(0);
    const incremetn = ()=>{
        setValue(prev=>prev+1);
    }
    const decrement = () => {
        setValue(prev=>prev-1);
    }
    const reset = ()=>{
        setValue(0)
    }
    useImperativeHandle(ref, ()=>{
        return {reset}
    })

    return <>
    <button onClick={incremetn}>Increment</button>
    <br/>
    {value}
    <br/>
    <button onClick={decrement}>Decremetn</button>
    </>
})

export default UseImperativeHandleHook