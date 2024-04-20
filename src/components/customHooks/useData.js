import { useDebugValue, useState } from "react";

const getData = () => ({name: 'Known Technical'})

const useData = () => {
    const [data, setData] = useState(getData())
    useDebugValue(data)
    return [data, setData];
}

export default useData;