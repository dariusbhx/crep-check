import React,{useState,useContext} from 'react'
const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [formData,setFormData] = useState({
        title: "",
        description: "",
        image: "",
        price: ""
    })
    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }


    

   
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const [currentId,setCurrentId] = useState(null)
    return (
        <AppContext.Provider value = {{
            formData,
            setFormData,
            currentId,
            setCurrentId,
            getToken,
            password,
            setPassword,
            email,
            setEmail
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  {AppProvider,AppContext}

