import useAsync from "./useAsync";


export default function useScript(url){
    return useAsync(()=>{
        const script = document.createElement('link')
        script.href = url;
        script.rel='stylesheet'
        script.async = true;

        return new Promise((resolve, reject)=>{
            script.addEventListener('load', resolve)
            script.addEventListener('error', reject)
            document.body.appendChild(script)
        })
    }, [url])
}