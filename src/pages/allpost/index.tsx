import Link from "next/link";
import { useRouter } from "next/router";

const index = ({allpost} : any) => {

    const router = useRouter();

  return (
    <>

    <div>This is All post page</div>

    {
        allpost.map((elem:any) => (
            <div>
                <button onClick={() => {
                    router.push({
                        pathname: `/allpost/${elem.id}`,
                        query: {id: elem.id}
                    })
                }}> 
                    <div>{elem.id}:  {elem.title}</div>
                </button>
                <div>{elem.body}</div>
                <Link href={`/allpost/${elem.id}`}>
                </Link>
            </div>
        ))
    }
    </>
  )
}

export default index

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            allpost: data
        }
    }
}