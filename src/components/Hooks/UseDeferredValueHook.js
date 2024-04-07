import { useDeferredValue, useMemo, useState } from "react";

const UseDeferredValueHook = () => {
    const [input, setInput] = useState('');
    const handleChange = e => {
        setInput(e.target.value)
    }
    return <>
         <input type="text" value={input} onChange={handleChange} />
         <List input={input}/>
    </>
}

const List = ({input}) => {
    const LIST_SIZE = 20000
    const deferredInput = useDeferredValue(input)
    const list = useMemo(()=>{
        const l = [];
        for(let i =0; i<LIST_SIZE; i++){
           l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])
    return list
}

export default UseDeferredValueHook