'use client'
import { Form } from "@/components/form";
import { List } from "@/components/list";
import { ISkills } from "@/interfaces/SkillsInterface";
import { createRequest } from "@/utils/createRequest";
import {  useEffect, useState } from "react";


export default function Home() {
  const [skills, setSkills] = useState<ISkills[]>([])
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

    await createRequest('/skills', {
      method: 'POST',
      body: JSON.stringify(newSkill)
    })

    setSkills(prevSkills => ([
      ...prevSkills,
      newSkill
    ]))
  }

  return (
    <>
      <h1 className="title">Minhas Skills</h1>
      <Form handleForm={handleForm}/>
      <List skills={skills} />     
    </>
  );
}
