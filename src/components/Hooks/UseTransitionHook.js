import { useState, useTransition } from "react"


const UseTransitionHook = () => {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const LIST_SIZE = 20000
    const handleChange = e => {
        setInput(e.target.value)
        startTransition(()=>{
            const l = [];
            for(let i =0; i<LIST_SIZE; i++){
                l.push(e.target.value)
            }
            setList(l)
        })
        
    }
    return <>
    <input type="text" value={input} onChange={handleChange} />
    {isPending && <h4>Loading...</h4>}
    {!isPending && list.map((i, index) => <div key={index}>{i}</div>)}
    </>
}

export default UseTransitionHook