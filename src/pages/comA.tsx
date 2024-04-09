'use-client'
import { useEffect, useState } from "react"
import Nav from "./Nav";
import ComB from "./comB";
import Link from "next/link";
const comA = () => {
    const [getname, setName] = useState<any>();
    const [getNames, setNames] = useState<any>([]);
    const [update, setupdate] = useState(false);
    const [getindex, setIndex] = useState<any>(null);

    const getdata =(e:any)=> {
        setName(e.target.value)
        console.log(e.target.value);
    }
    
    const showData =(e:any) => {
        // setValue(true)
        setName("");
        console.log(getname, update)
        if(getname !== "" && !update) {
            setNames([...getNames, getname])
        } else {
            console.log(getNames[getindex]);
            console.log(getname)
            setNames((prevData:any) => prevData.map((elem:any, i:number) => i == getindex ? getname : elem));
            setupdate(false);
            setIndex(null);
            // setNames(getNames[getindex] = getname)
        }
    }

    const editData=(elem:any)=> {
        console.log("edit the Data index", elem);
        setName(getNames[elem]);
        setupdate(true)
        setIndex(elem);
    }

    useEffect(() => {
        console.log(getNames)
    }, [getNames])
  return (
    <>
        <Nav />
        <div className="text-center my-3">This is CRUD Operation</div>
        {/* <ComB/> */}
        <p className="ml-5">Please Enter your Task</p>
        <input type="text" 
        onChange={(e)=>getdata(e)} 
        value={getname} className="border-solid border-2 border-black ml-5" />
        <button className="px-2 py-1 rounded m-2 bg-[blue] text-white" onClick={showData}>submit</button>
        <div className="table">
            {getNames.length != 0 ?  
                getNames.map((elem:any, i:number) => {
                    return (
                        <>
                        <div className="ml-5">
                            <span>This is the usernname: {elem}</span>
                            {getindex == i ? null : <button className="px-2 py-1 rounded m-2 bg-[violet] text-white" onClick={() => editData(i)}>update</button>
                            }
                        </div>
                        </>
                    )
                }) : null
            }
        </div>

        <Link className='mt-3 ml-5' href='/'>
            <span>Go to Home Page</span>
        </Link>
    </>
  )
}

export default comA