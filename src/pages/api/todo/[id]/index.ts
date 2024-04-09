// const SOURCE_URL = "https://jsonplaceholder.typicode.com/posts"

// export default async function(req: Request, res: Response) {
//     try {

//         const resp = await fetch(SOURCE_URL);

//         if(!resp.ok) {
//             throw new Error('failed to fetch data')
//         }

//         const todos = await resp.json();
//         res.status(200).json(todos)

//     } catch(error) {
//         console.log("Error while fetching the data:", error);
//         res.status(500).json({error: "Internal server error"})
//     }
// }


// pages/api/todos.js

import { NextApiRequest, NextApiResponse } from 'next';
import { todos } from '../../../../../db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id }= req.query as any;
  if (req.method === 'GET') {
    const data = todos.filter(todo => todo.id == parseInt(id))
    return res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const newTodo = { ...req.body, id: todos.length + 1 };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }

  if(req.method === "DELETE") {
    const data = todos.find((todo) => todo.id == parseInt(id));
    const index = todos.findIndex(todo => todo.id == parseInt(id));
    console.log(index)
    // console.log(data);
    todos.splice(index, 1);
    console.log(todos)
    return res.status(200).json(data);  
  }

  if(req.method === "PATCH") {
    console.log(req.body)
    const data = todos.filter(todo => todo.id == parseInt(id));
    const index = todos.findIndex(todo => todo.id == parseInt(id));
    const newTodo={
      id,
      text:req.body.text,
      completed:req.body.completed
    } as any
    todos.splice(index,1,newTodo)
    console.log(req.body)
    return res.status(200).json(newTodo)
  }

  // put/update



  return res.status(405).end(); // Method Not Allowed
}
