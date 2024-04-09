import { use, useState } from "react";
import Nav from "./Nav";

const rest = () => {
    const options = ['Done', 'Pending']
    const [getdata, setData] = useState('');
    const [check, setCheck] = useState(null);
    const [fetchData, setfetchData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [getindex, setIndex] = useState(null);
    const [disablebtn, setDisablebtn] = useState(true);

    let complete: boolean|string = '';

    options.map(elem => {
        if(elem == "Done") {
            complete = true;
        } else if(elem == 'Pending') {
            complete = false;
        }
    })


    const handlesubmit =async()=> {
        alert("handle click submit")
        console.log("flag", flag)
        if(flag) {
            console.log("inside true")
            console.log("getindex",getindex)
            const response = await fetch(`api/todo/${getindex}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: getdata, completed: complete})
            })

            if(response.ok) {
                fetchApi();
                alert("successfully updated the Data")
            }

            setData('');
            setCheck(null);
            setFlag(false);
        } else {
            const response = await fetch('api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({text: getdata, completed: complete})
            })
    
            if(response.ok) {
                const data = await response.json();
                fetchApi();
                console.log("Todo added Successfully", data)
                alert("successfully added the Data")
            } else {
                console.log('Failed to add Data')
                alert("Some error Occured")
            }
        }
    }

    const handleChange =(e:any)=> {
        setData(e.target.value)
    }

    const handleCheck =(option:any)=> {
        setCheck(option)
    }

    // rest functions
    const fetchApi =async()=> {
        const res = await fetch('api/todo');
        const data = await res.json();
        setfetchData(data);
        setDisablebtn(false)
        console.log("fetched all the data from api", res)
    }

    const deleteApi =async(id) => {
        console.log("delete id", id)
        const res = await fetch(`api/todo/${id}`, {
            method: 'DELETE'
        });
        
        if(res.ok) {
            fetchApi();
        }
    }

    const updateApi =async(id:any,index:any) => {
        console.log(index);
        console.log(fetchData);
        const getdata = fetchData.find(elem => elem.id == parseInt(id));
        console.log(getdata)
        setData(getdata.text);
        setFlag(true)
        setIndex(id)
        console.log("flag update api", flag)
        // const res = await fetch(`api/todo/${id}`, {
        //     method: 'UPDATE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newData)
        // });

        // if(res.ok) {
        //     fetchApi();
        // }
    }

    return (
        <>
            <Nav />

            {
                disablebtn ? 
                <button className='bg-black text-white py-2 px-3 my-3 mx-2 rounded' onClick={fetchApi}>Fetch All the comments</button> : null
            }

            <div className="Allpost mt-5">
                {
                    fetchData.map((elem:any, index:any) => (
                        <>
                        <p className="ml-5">{elem.id}) {elem.text} </p>
                        <button onClick={()=>{updateApi(elem.id, index)}} className="border-black bg-black text-white py-2 px-3 ml-3 mr-3 rounded">Edit</button>
                        <button onClick={()=>{deleteApi(elem.id)}} className="border-black bg-[red] text-white py-2 px-3 ml-3 mr-3 rounded">Delete</button>
                        </>
                    ))  
                }
            </div>
            <div>
                <input
                    type="text"
                    value={getdata}
                    className="border border-black bg-light-blue-200 px-2 py-1 rounded-md my-5 ml-2"
                    onChange={handleChange}
                />
                <div>
                    {
                    options.map((option, index)=> (
                        <div>
                            <input 
                            type="checkbox" 
                            name="checkbox"
                            onChange={()=>handleCheck(option)}
                            checked={check === option}
                            className="h-5 w-5 text-blue-500 rounded border border-gray-300 focus:ring-blue-400 ml-2"
                            />
                            <span>{option}</span>
                        </div>
                    ))
                    }
                    
                </div>

                <button className="border-black px-2 py-1 rounded bg-black text-white ml-2 mt-5" onClick={handlesubmit}>submit</button>
            </div>
        </>
    )
}

export default rest