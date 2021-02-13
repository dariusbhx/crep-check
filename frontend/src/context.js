import React,{useState,useContext} from 'react'
const AppContext = React.createContext()


const AppProvider = ({children}) => {
    const [formData,setFormData] = useState({
        id: "",
        title: "",
        description: "",
        image: "",
        date: "",
        price: ""
    })
    return (
        <AppContext.Provider value = {{
            formData,
            setFormData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  {AppProvider,AppContext}

