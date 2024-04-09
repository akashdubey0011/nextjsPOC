import { useContext } from "react";
import { MyContext } from "./comA"

const comC = () => {
    const theme:any = useContext(MyContext);
    console.log("theme value", theme)
  return (
    <>
        <div>Current theme: {theme}</div>
    </>
  )
}

export default comC