import { useState, useEffect } from 'react'

//4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    //5 - refatorando o post
    const [confg, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6- loading
    const [loading, setLoading] = useState(false)

    //8 - tratando erros
    const [erros, setErros] = useState(null)

    //dasafio seção 7
    const [itemId, setItamId] = useState(null)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            setMethod(method)
        } else if(method === 'DELETE'){
            setConfig({
                method,
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            setMethod(method)
            setItamId(data)
        }
    }

    useEffect(() => {
        //6 - loading
        const fetchData = async () => {
            setLoading(true)
            
            try {
                    const response = await fetch(url)
                    const result = await response.json()
                    setData(result)
            } catch (error) {
                    console.log(error.message)
                    setErros("Houve um erro ao carregar os dados")  
                }
                setLoading(false)
            }
        
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, confg]
                const response = await fetch(...fetchOptions)
                const result = await response.json()
                setCallFetch(result)
            } else if(method === 'DELETE'){
                const deleteUrl = `${url}/${itemId}`
                const response = await fetch(deleteUrl, confg)
                const result = await response.json()
                setCallFetch(result)
            }
        }
        httpRequest()
    }, [confg, method, url])

    return { data, httpConfig, loading, erros }
}