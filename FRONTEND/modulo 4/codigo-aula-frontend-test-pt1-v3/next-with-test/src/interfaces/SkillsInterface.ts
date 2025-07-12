import { Dispatch, SetStateAction } from "react"

export interface ISkills {
  id: string,
  name: string
}

export interface FormProps {
  handleForm: (skill: string) => void
}

export interface ListProps {
  skills: ISkills[] 
}