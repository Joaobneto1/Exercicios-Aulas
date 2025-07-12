'use client'
import { ListProps } from "@/interfaces/SkillsInterface";

export function List({skills, deleteSkill, setSkillCurrent}: ListProps) { 
  
  return (
    <ul>
      {skills?.map(item => (
        <li key={item.id}>
          {item.name}
          <button
            className="btn-delete" 
            onClick={() => deleteSkill(item)}>Delete</button>
          <button
            className="btn-edit" 
            onClick={() => setSkillCurrent(item)}>Edit</button>
        </li>
      ))}
      {/* <li key='teste'>teste</li> */}
    </ul>
  );
}