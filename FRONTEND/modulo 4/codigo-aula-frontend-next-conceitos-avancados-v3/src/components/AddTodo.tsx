import { createRequest } from "@/utils/createRequest";
import { revalidateTag } from "next/cache";

export async function AddTodo() {
  // delay 3s
  await new Promise(resolve => setTimeout(resolve, 3000))

  async function handleCreateTodo(form: FormData) {
    'use server'

    // delay 3s

    const newTodo = {
      id: crypto.randomUUID(),
      name: form.get('todo')
    }

    await createRequest('/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    })

    revalidateTag('get-todos')



  }
  return (
    <form action={handleCreateTodo}>
      <input type="text" placeholder="Digite sua tarefa" name="todo" />
      <button type="submit">Salvar</button>
    </form>
  );
}