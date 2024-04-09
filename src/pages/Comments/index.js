import { useEffect } from "react";
import { useState } from "react";


const index = () => {

    const [comment, setcomments] = useState([]);

    const fetchComments =async()=> {
        try {    
            const response = await fetch('/api/comments');
            const data = await response.json();

            if(response.ok) {
                setcomments(data);
            }
            
        } catch (error) {
            console.log("Failed to load data << ", error)
        }
    }

  return (
    <div>
        <button onClick={fetchComments}>
            Load Comments
        </button>

        {
            comment.length!==0 ? 
            comment.map(elem => {
                return (
                    <>
                        <div key={elem.id}>
                            <span key={elem.id}>{elem.id}</span> <span>{elem.text}</span>
                        </div>
                    </>

                )
            })
            : ""
        }
    </div>
    
  )
}

export default index