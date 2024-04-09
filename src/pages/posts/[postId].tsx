 import Link from "next/link";
import { useRouter } from "next/router";

const PostDetails= ({ post }:any) => {
    console.log(post)

    const router = useRouter();
    console.log(router)
    if(router.isFallback) {
        return <h1>Loading....</h1>
    }
  return (
    <>
    <h2>{post.id} {post.title}</h2>

    <h2>{post.body}</h2>
    <hr />



    <Link href='/posts' className="my-2"> Go back</Link>
    </>
  )
}

export default PostDetails

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // const paths = data.map((elem:any) => {
    //     return {
    //         params: {
    //             postId : `${elem.id}`
    //         }
    //     }
    // })

    return {
        paths : [
        { params : { postId: "1"}},
        {params: {postId : "2" }},
        {params: {postId: "3"}}
    ], fallback: true
    }

    // return {
    //     paths: paths,
    //     fallback: true
    // }

}

export async function getStaticProps(context:any) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: data,
        }
    }

}