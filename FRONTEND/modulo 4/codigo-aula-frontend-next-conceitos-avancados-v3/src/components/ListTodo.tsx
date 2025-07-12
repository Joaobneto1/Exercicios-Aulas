import { createRequest } from "@/utils/createRequest";

interface ITodo {
  id: string,
  name: string
}

async function getData() {
  // delay 3s
  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await createRequest('/todos', {
    method: "GET",
    next: {
      tags: ['get-todos'],
      revalidate: 30
    },
    // cache: 'force-cache' => default
    //cache: 'no-store'
  })
  return response
}


export async function ListTodo() {
  const todos: ITodo[] = await getData()
  return (
    <ul>
      {todos.map(item =>
        <li key={item.id}>{item.name}</li>
      )}
    </ul>
  );
}