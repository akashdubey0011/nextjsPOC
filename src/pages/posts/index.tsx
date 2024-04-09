import Link from "next/link"
import { useEffect, useState } from "react"
import Nav from "../Nav";

const index = ({posts}:any) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 7;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = posts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(posts.length / recordPerPage);

//   const numbers = [...Array(npage)]; 
    const numbers: number[] = [];
    [...Array(npage)].map((elem, i:number) => {
        numbers.push(i+1)
    })
  
//   console.log(" >>> ", numbers.slice(1))

  function changecp(elem:any) {
    console.log("changecp", elem)
    setCurrentPage(elem)
  }

  function getback() {
    if(currentPage == 1) {
        setCurrentPage(1)
    } else {
        setCurrentPage(currentPage - 1)
    }
  }
  function gonext() {
    console.log("go next index", currentPage , currentPage)
    if(currentPage == numbers.length) {
        setCurrentPage(currentPage)
    } else {
        setCurrentPage(currentPage + 1)
    }
  }

  useEffect(()=> {
    console.log(currentPage)
  }, [currentPage])
  return (
    <>
    <Nav />
    <h1 className="my-4">post Details : Get the details of indiviual page by clicking on the respective points</h1>
    <p></p>

    {   
        record.map((elem:any) => {
            return (
                <div key={elem.id}>
                    <Link href={`/posts/${elem.id}`}> 
                        <h2> {elem.id}. {elem.title} </h2>
                    </Link> 
                    <hr />
                </div>
            )
        })
    }

        <div className="pagination">
            <span onClick={()=>getback()}>back</span>
   {
            numbers.map((elem:any) => {
                return (
                    <>
                    <span style={{"margin":"10px"}} onClick={()=>changecp(elem)}>{elem}</span>
                    </>
                )
            })
        }
            <span onClick={()=>gonext()}>next</span>
        </div>
        <div className='mt-3'>
            <Link href='/'>
                <span>Go to Home Page</span>
            </Link>
        </div>
    </>
  )
}

export default index

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props : {
            posts: data,
        }
    }
}