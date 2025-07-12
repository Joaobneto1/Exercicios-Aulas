'use client'
import { ListProps } from "@/interfaces/SkillsInterface";

export function List({skills}: ListProps) { 
  
  return (
    <ul>
      {skills?.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
      {/* <li key='teste'>teste</li> */}
    </ul>
  );
}