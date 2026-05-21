import { useState } from 'react';
 
export default function People() {
  const [people, setPeople] = useState([
    {
      id: 0,
      name: 'Donathan'
    },
    {
      id:1,
      name:'João'
    },
    {
      id: 2,
      name: "Maria"
    }
  ]);
 
  const RenderPeople = () => {
    return people.map(person => {
      return(
        <tr key={person.id}>
          <td>{person.id}</td>
          <td>{person.name}</td>
        </tr>
      )
    })
  }
 
  return (
    <table>
      <tr>
        <th>id</th>
        <th>Nome</th>
      </tr>
      <RenderPeople />
    </table>
  );
}