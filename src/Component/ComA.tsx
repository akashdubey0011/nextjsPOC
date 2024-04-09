'use-client'
import { createContext } from "react"
import ComB from "./ComB"
export const MyContext = createContext();
const comA = () => {
  return (
    <>
        <MyContext.Provider value='new Data'>
            <div>comA</div>
            <ComB/> 
        </MyContext.Provider>
    </>
  )
}

export default comA