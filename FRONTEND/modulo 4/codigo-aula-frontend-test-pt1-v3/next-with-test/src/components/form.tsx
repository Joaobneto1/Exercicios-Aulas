'use client'
import { FormProps } from "@/interfaces/SkillsInterface";
// import { createRequest } from "@/utils/createRequest";
import { FormEvent, useState } from "react";


export function Form({handleForm}: FormProps) {
  const [skill, setSkill] = useState('')

  function handleSkillForm(event: FormEvent) {
    event.preventDefault()

    if(skill.trim() !== '') {
      handleForm(skill)
      setSkill('');
    }
  }
  return (
    <form onSubmit={handleSkillForm}>
      <input 
        type="text" 
        value={skill}
        onChange={(event) => setSkill(event.target.value)}
        placeholder="Digite sua skill"/>
      <button>Salvar</button>
    </form>
  );
}