import React, { useState } from "react"
import * as S from "./style"
import Cat from '../img/Cute-cat-main.gif'

export default function Index() {

  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const add = () => {
    if (input !== "") {
      setList([...list, input]);
      setInput("");
    }
  };

  const deleteAll = () => {
    setList([])
    setInput("")
  }

  return (
    <S.Main id='main'>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder='Add a task'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={() => { add() }}>Add</button>
          <button onClick={() => { deleteAll() } }>Delete all</button>
        </form>
        <ul>
          {list.map((item) => (
            <div>
              <li>{item}</li>
              <input type='checkbox' />
              <button>Finished</button>
            </div>
          ))}
        </ul>
      </div>
      <div> <img src={Cat} alt='cute cat on top of a heart' /> </div>

    </S.Main>
  )
}
