import ComC from "./comC";
import { MyContext } from "./comA";
import { use, useContext } from "react";
const comB = () => {
    const theme = useContext(MyContext);
    console.log("theme from B >>> ",theme)
  return (
      <>
        <div>comB</div>
        <ComC />
    </>
  )
}

export default comB