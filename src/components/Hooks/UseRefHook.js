import { useRef, useState, useEffect } from 'react';

const UseRefHook = () => {
    const [text, setText] = useState('')
    const [renderCount, setRenderCount] = useState(0)
    
    const renderCountRef = useRef(0)
    
    useEffect(()=>{
        // setRenderCount(prev => prev + 1)
        renderCountRef.current = renderCountRef.current + 1 
    })

    return <>
    <h1>useRef() Hook</h1>
    <input type='text' value={text} onChange={e=>setText(e.target.value)}/>
    <h3>Total render count is {renderCountRef.current}</h3>
    </>
}

export default UseRefHook;