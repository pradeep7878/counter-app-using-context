import {createContext, useState} from 'react';

const ContextComponent = createContext();

export const DataProvider = ({children}) => {

    const [count,setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count+1)
    }

    const handleDecrease = () => {
        setCount(count-1)
    }

    return(
        <ContextComponent.Provider value={{count,handleIncrease,handleDecrease}}>
            {children}
        </ContextComponent.Provider>
    )
}



export default ContextComponent;