'use client'
import { Form } from "@/components/form";
import { List } from "@/components/list";
import { ISkills } from "@/interfaces/SkillsInterface";
import { createRequest } from "@/utils/createRequest";
import {  useEffect, useState } from "react";


export default function Home() {
  const [skills, setSkills] = useState<ISkills[]>([])
  const [skillCurrent, setSkillCurrent] = useState<ISkills>({
    id: '',
    name: ''
  })
  
  useEffect(() => {
    getSkills()
  }, [])

  async function getSkills() {
    const response = await createRequest('/skills', {
      method: 'GET'
    }) as ISkills[]
    setSkills(response)
  }
  async function handleForm(skill: string) {

    const newSkill ={
      id: crypto.randomUUID(),
      name: skill
    }   
// console.log("teste ", newSkill, !skillCurrent.id)
    if(!skillCurrent.id) {
      await saveSkill(newSkill)
    } else {
      await editSkill(skillCurrent)
    }
 
  }

  async function deleteSkill(skill: ISkills) {
    
    await createRequest(`/skills/${skill.id}`, {
      method: 'DELETE',
    })

    const newSkills = [...skills].filter(item => item.id !== skill.id)
    setSkills(newSkills)
  
  }

  async function editSkill(skill: ISkills) {
    
    await createRequest(`/skills/${skill.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: skillCurrent.name
      })
    })

    const dataSkills = [...skills]
    const selectedIndexSkills = [...dataSkills].findIndex(item => item.id == skill.id )
    dataSkills[selectedIndexSkills] = skill
    
    setSkills(dataSkills)

  }
  async function saveSkill(skill: ISkills) {
  
    await createRequest('/skills', {
      method: 'POST',
      body: JSON.stringify(skill)
    })

    setSkills(prevSkills => ([
      ...prevSkills,
      skill
    ]))

  }
  return (
    <>
      <h1 className="title">Minhas Skills</h1>
      <Form 
        handleForm={handleForm} 
        skillCurrent={skillCurrent}
        setSkillCurrent={setSkillCurrent}/>
      <List 
        skills={skills} 
        deleteSkill={deleteSkill}
        setSkillCurrent={setSkillCurrent}/>     
    </>
  );
}
