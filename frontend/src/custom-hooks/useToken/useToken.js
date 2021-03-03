import React,{useState} from 'react'
import { useGlobalContext } from '../../context'

const useToken = () => {
    const {getToken} = useGlobalContext()
    
    const[ token, setToken] = useState(getToken())

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
    }
    return{
        setToken: saveToken,
        token
    }
}

export default useToken