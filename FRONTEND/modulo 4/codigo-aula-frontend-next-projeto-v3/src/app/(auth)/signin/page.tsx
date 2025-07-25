'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChangeEvent, FormEvent, useState } from "react";
import { createRequestAuth } from "@/utils/createRequest";
import { IForm } from "@/interfaces/SignInInterface";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter()
  const [form, setForm] = useState<IForm>({
    email: '',
    password: ''
  });

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
    console.log(form)
  }

  async function handleFormSignIn(event: FormEvent) {
    event.preventDefault()

    if (!form.email || !form.password) return

    const response = await createRequestAuth('/login', {
      method: 'POST',
      body: JSON.stringify({
        email: form.email,
        senha: form.password
      })
    })

    if (!response) return

    Cookies.set('token', response.token);
    Cookies.set('user', JSON.stringify(response.usuario))

    router.push('/transactions')
  }

  return (
    <form onSubmit={handleFormSignIn} className="px-4 py-12 space-y-12 md:py-24 md:px-6">
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Faça o login para acessar suas transações</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            type="email"
            name="email"
            onChange={handleChangeInput}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
        </div>
        <Button className="w-full">Entrar</Button>
      </div>
    </form>
  );
}
