import React from 'react';
const Getpost = ({detailpage, category}:any) => {

    console.log(detailpage, category)
  return (
    <>
     <div>This is allpost page</div>
     {
        detailpage.map((elem:any) => {
            return (
                <div>
                    <h2>This page show the category: {category}</h2>
                    <div>{elem.title}</div>
                </div>
            )
        })
    }
    </>
)}

export default Getpost;

export async function getServerSideProps(context:any) {
    const { params } = context;
    const { allpost } = params;
    console.log("params >>" ,allpost)

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${allpost}`);
    const data  = await response.json();

    console.log(data)

    return {
        props: {
            detailpage: data,
            category: allpost
        }
    }

}