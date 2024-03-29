import React,{useContext,createContext,useState} from 'react';

const StateContext = createContext();


const initialState = {
  chat:false,
  cart:false,
  userProfile:false,
  notification:false
}

function ContextProvider({children}) {
    const [activeMenu,setActiveMenu] = useState(true);
    const [isClicked,setIsClicked] = useState(initialState);
    const [screenSize,setScreenSize] = useState(undefined);
    const handleClick = (clicked) =>{
      setIsClicked({...initialState,[clicked]:true})
    }
  return (
    <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}}>
      {children}
    </StateContext.Provider>
  );
}

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
