import { Dispatch, SetStateAction } from "react"

export interface ISkills {
  id: string,
  name: string
}

export interface FormProps {
  handleForm: (skill: string) => void
  skillCurrent: ISkills,
  setSkillCurrent: Dispatch<SetStateAction<ISkills>>
}

export interface ListProps {
  skills: ISkills[] 
  deleteSkill: (skill: ISkills) => void
  setSkillCurrent: Dispatch<SetStateAction<ISkills>>
}