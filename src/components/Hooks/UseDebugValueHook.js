import { useState } from "react"
import useData from "../customHooks/useData"



const UseDebugValueHook = () => {

    const [name, setName] = useState('Known Technical')
    const [data, setData] = useData()
    
    return <>
    </>
}

export default UseDebugValueHook