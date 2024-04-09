import User from "@/Component/User";
import Nav from "./Nav";
import Link from "next/link";

const product = ({data}:any) => {
  return (
    <>
        <Nav/>
        <h1>This is product page</h1>
        <div>product</div>
        {
            data.map((el:any) => {
                return (
                    <>
                      <User elem={el}/>  
                    </>
                )
            })
        }
        <Link className='mt-3' href='/'>
            <span>Go to Home Page</span>
        </Link>
    </>
  )
}

export default product;

export async function getStaticProps(context:any) {
    console.log(context);
    const { params } = context;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await response.json();

    return {
        props: {
            data: res
        }
    }
}