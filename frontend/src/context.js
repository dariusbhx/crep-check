import React,{useState,useContext} from 'react'
const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [formData,setFormData] = useState({
        title: "",
        description: "",
        image: "",
        price: ""
    })
    const [currentId,setCurrentId] = useState(null)
    return (
        <AppContext.Provider value = {{
            formData,
            setFormData,
            currentId,
            setCurrentId
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  {AppProvider,AppContext}

