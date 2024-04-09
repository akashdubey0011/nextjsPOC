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
import {todos} from '../../../../db.js';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;
  if (req.method === 'GET') {
    return res.status(200).json(todos);
  }

  if (req.method === 'POST') {
    console.log(req.body)
    const newTodo = { ...req.body, id: todos.length + 1 };
    todos.push(newTodo);
    return res.status(201).json(newTodo);
  }

  res.status(405).end(); // Method Not Allowed
}
