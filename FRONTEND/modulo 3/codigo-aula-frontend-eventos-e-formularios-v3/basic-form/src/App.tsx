import { useForm, SubmitHandler } from "react-hook-form"
import './App.css'

type Inputs = {
  teste: string
  firstName: string
  exampleRequired: string
}


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log('errors => ', errors.teste)

  // console.log(watch("teste")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        {...register("firstName", { required: true, maxLength: 3 })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
      {errors.firstName?.type === "maxLength" && (
        <p role="alert">Tamanho maximo 3</p>
      )}

      <input type="submit" />
    </form>
  )
}