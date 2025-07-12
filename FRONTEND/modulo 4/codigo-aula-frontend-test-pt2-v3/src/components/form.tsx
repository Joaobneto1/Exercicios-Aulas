'use client'
import { FormProps } from "@/interfaces/SkillsInterface";
// import { createRequest } from "@/utils/createRequest";
import { FormEvent } from "react";


export function Form({handleForm, skillCurrent, setSkillCurrent}: FormProps) {

  function handleSkillForm(event: FormEvent) {
    event.preventDefault()

    if(skillCurrent.name.trim() !== '') {
      handleForm(skillCurrent.name)
      setSkillCurrent({id: '', name: ''});
    }
  }
  return (
    <form onSubmit={handleSkillForm}>
      <input 
        type="text" 
        value={skillCurrent.name}
        onChange={(event) => setSkillCurrent({
            id: skillCurrent.id, 
            name: event.target.value
        })}
        placeholder="Digite sua skill"/>
      <button className="btn-save">Salvar</button>
    </form>
  );
}