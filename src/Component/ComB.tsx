import { MyContext } from "./ComA";
import { use, useContext } from "react";
const comB = () => {
    const theme:any = useContext(MyContext);
    console.log("theme from B >>> ",theme)
  return (
      <>
        <div>comB: {theme}</div>
    </>
  )
}

export default comB